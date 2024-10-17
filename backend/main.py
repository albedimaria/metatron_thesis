import os, json
import time
import essentia.standard as esstd
import numpy as np
from paths.pathsToFolders import dir_path, model_path, json_dir, generated_dir
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import logging
import requests

from flask_socketio import SocketIO, emit, join_room, leave_room

from audio_processing import load_audio, assign_tempo_label, get_sector_color_label, predict_label_from_classes
from model_initialization import initialize_models
from label_initialization import initialize_labels
from suno_functions import (
    custom_generate_audio,
    extend_audio,
    generate_audio_by_prompt,
    get_audio_information,
    get_quota_information,
    download_audio,
    generate_prompt,
    base_url
)

load_dotenv()  # Load variables from .env into environment
SUNO_COOKIE = os.getenv('SUNO_COOKIE')  # Access the Suno cookie

app = Flask(__name__)
# Set up CORS to allow specific origins
cors_origins = ["http://localhost:3001", "http://localhost:3002"]
CORS(app, resources={r"/socket.io/*": {"origins": cors_origins}})

# Initialize SocketIO with CORS enabled for the specified origins
socketio = SocketIO(app, cors_allowed_origins=cors_origins)


# Initialize models
models = initialize_models()

classes_embedding_model = models["classes_embedding_model"]
mood_embedding_model = models["mood_embedding_model"]
timbre_model = models["timbre_model"]
mood_model = models["mood_model"]
instrument_model = models["instrument_model"]
va_embedding_model = models["va_embedding_model"]
va_model = models["va_model"]
approachability_model = models["approachability_model"]
engagement_model = models["engagement_model"]

# initialize labels
labels = initialize_labels(model_path)

timbre_labels = labels["timbre_labels"]
mood_labels = labels["mood_labels"]
instrument_labels = labels["instrument_labels"]
approachability_labels = labels["approachability_labels"]
engagement_labels = labels["engagement_labels"]

print("MODELS and LABELS LOADED")


# constants
THRESHOLD = 0.2

all_results = []



@app.route("/process_audio")
def process_audio():
    print("START")

    # Initialize a list or set to store the names of analyzed files
    analyzed_files = set()

    # Check if the JSON file with analyzed file names exists
    analyzed_files_json_path = os.path.join(json_dir, 'analyzed_files.json')

    if os.path.exists(analyzed_files_json_path):
        with open(analyzed_files_json_path, 'r') as analyzed_file:
            analyzed_files = set(json.load(analyzed_file))

    # Path to the JSON file
    backend_analysis_path = os.path.join(json_dir, 'backend_analysis.json')

    # Load existing results if the file exists
    all_results = []
    if os.path.exists(backend_analysis_path):
        with open(backend_analysis_path, 'r') as json_file:
            all_results = json.load(json_file)



    for root, dirs, files in os.walk(dir_path):
        for file_name in files:
            if file_name.lower().endswith('.mp3') or file_name.lower().endswith('.wav'):
                file_path = os.path.join(root, file_name)

                # Check if the file has already been analyzed
                if file_name in analyzed_files:
                    print("Skipping file (already analyzed):", file_path)
                    continue

                start_time = time.time()

                print("Loading file:", file_path)

                audio = load_audio(file_path)

                # compute beat positions and BPM.
                rhythm_extractor = esstd.RhythmExtractor2013(method="degara")
                bpm, beats, beats_confidence, _, beats_intervals = rhythm_extractor(audio)

                # tempo label
                tempo_label = assign_tempo_label(bpm)

                # key
                key_extractor = esstd.KeyExtractor(profileType = 'krumhansl')
                key, scale, key_strength_raw = key_extractor(audio)
                key_strength = round(key_strength_raw   , 3)

                # danceability
                danceability_raw, _ = esstd.Danceability()(audio)
                danceability = round(danceability_raw * 100 / 3, 3)

                # dynamic complexity & global loudness
                dynamic_complexity, global_loudness_raw = esstd.DynamicComplexity()(audio)
                normalized_dynamic_complexity = round(dynamic_complexity / abs(global_loudness_raw), 3)
                global_loudness = round(global_loudness_raw, 3)

                # embeddings
                classes_embeddings = classes_embedding_model(audio)
                mood_embeddings = mood_embedding_model(audio)

                # timbre
                timbre_predictions = timbre_model(classes_embeddings)
                timbre_predicted_label = predict_label_from_classes(timbre_predictions, timbre_labels)

                # mood
                mood_predictions = mood_model(mood_embeddings)
                mood_predicted_label = predict_label_from_classes(mood_predictions, mood_labels)

                # instrument - to review
                instrument_predictions = instrument_model(classes_embeddings)
                instrument_predicted_label = predict_label_from_classes(instrument_predictions, instrument_labels)

                # valence & arousal
                va_embeddings = va_embedding_model(audio)
                va_predictions = va_model(va_embeddings)
                va_predictions = np.mean(va_predictions.squeeze(), axis=0)
                va_predictions = (va_predictions - 5) / 4
                valence = va_predictions[0]
                valence = float(valence)
                arousal = va_predictions[1]
                arousal = float(arousal)

                # color and relative emotion label
                color, emotion = get_sector_color_label(valence, arousal, threshold=THRESHOLD)

                for frame in esstd.FrameGenerator(audio, frameSize=2048, hopSize=1024):
                    # Perform frame-specific processing
                    frame_spectrum = esstd.Spectrum()(frame)

                    f, m = esstd.SpectralPeaks(magnitudeThreshold=0.01, minFrequency=10)(frame_spectrum)

                    # Calculate inharmonicity (sample rate inferred from audio)
                    inharmonicity = esstd.Inharmonicity()(f, m)

                harmonicity_pct = (1 - inharmonicity) * 100

                # approachability & engagement
                approach_predictions = approachability_model(classes_embeddings)
                engagement_predictions = engagement_model(classes_embeddings)
                approachability = predict_label_from_classes(approach_predictions, approachability_labels)
                engagement = predict_label_from_classes(engagement_predictions, engagement_labels)

                # time for each file
                end_time = time.time()
                elapsed_time = end_time - start_time
                print(f"File processing time: {elapsed_time} seconds")


                # updating already analyzed files
                analyzed_files.add(file_name)

                # Save the updated list of analyzed files to the JSON file
                with open(analyzed_files_json_path, 'w') as analyzed_file:
                    json.dump(list(analyzed_files), analyzed_file, indent=4)


                # Process the audio file and append the results to the list
                # results = process_audio_file(file_path, file_name)
                results = {
                    "file_name": file_name,
                    "BPM": bpm,
                    "key": key,
                    "scale": scale,
                    "key_strength": key_strength,
                    "mood": mood_predicted_label,
                    "tempo": tempo_label,
                    "danceability": danceability,
                    "dynamic_complexity_norm": normalized_dynamic_complexity,
                    "global_loudness_dB": global_loudness,
                    "valence": valence,
                    "arousal": arousal,
                    "color": color,
                    "emotion": emotion,
                    "timbre": timbre_predicted_label,
                    "instrument": instrument_predicted_label,
                    "approachability": approachability,
                    "engagement": engagement,
                    "harmonicity": harmonicity_pct
                }
                all_results.append(results)

                # Update the backend_analysis.json file with the new result
                with open(backend_analysis_path, 'w') as json_file:
                    json.dump(all_results, json_file, indent=4)


    print("END")

    # Read and return the contents of backend_analysis.json
    try:
        with open(os.path.join(json_dir, 'backend_analysis.json'), 'r') as json_file:
            data = json.load(json_file)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"message": "backend_analysis.json not found"}), 404



@socketio.on('connect')
def handle_connect():
    print("connection")


@socketio.on('disconnect')
def handle_disconnect():
    print("ended connection")


# data received from client 1
@socketio.on('send_data_to_server')
def handle_data_from_client(data):
    print("Data received from client:", data)

    # Relay data to all clients except the sender
    emit('data_from_client1', data, broadcast=True, include_self=False)


@socketio.on('clear_cache_request')
def handle_clear_cache_request(data):
    print("Clear cache request received:", data)
    action = data.get('action')
    if action == 'clearCache':
        # Paths to the JSON files
        analyzed_files_path = os.path.join(json_dir, 'analyzed_files.json')
        backend_analysis_path = os.path.join(json_dir, 'backend_analysis.json')

        # Perform the cache clearing logic here
        try:
            if os.path.exists(analyzed_files_path):
                os.remove(analyzed_files_path)
                print(f"Deleted {analyzed_files_path}")

            if os.path.exists(backend_analysis_path):
                os.remove(backend_analysis_path)
                print(f"Deleted {backend_analysis_path}")

            # Optionally, send a confirmation message back to the client
            emit('cache_cleared', {'status': 'success', 'message': 'Cache cleared successfully'})

        except Exception as e:
            print(f"Error clearing cache: {e}")
            emit('cache_cleared', {'status': 'error', 'message': 'Error clearing cache'})

    else:
        print("Invalid action or no action provided.")
        emit('cache_cleared', {'status': 'error', 'message': 'Invalid action'})


@socketio.on('request_backend_analysis')
def handle_backend_analysis_request():
    try:
        with open(os.path.join(json_dir, 'backend_analysis.json'), 'r') as file:
            backend_analysis_data = json.load(file)

        # print("Emitting data:", backend_analysis_data)  # Debugging line

        emit('backend_analysis_data', backend_analysis_data)
    except FileNotFoundError:
        print("File not found error")  # Debugging line
        emit('backend_analysis_data', {'error': 'File not found'})


# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@socketio.on('client2_to_server')
def handle_data_from_client2(data):
    try:
        logger.info("Data received from Client2: %s", data)

        # Validate that the required keys are present in 'data'
        required_keys = ['instrument', 'mood', 'bpm']
        missing_keys = [key for key in required_keys if key not in data]
        if missing_keys:
            error_message = f"Missing keys in data: {missing_keys}"
            logger.error(error_message)
            emit('error', {'message': error_message}, broadcast=True)
            return

        # Generate a prompt using the placeholders
        prompt = generate_prompt(data)  # Ensure this function handles exceptions
        logger.info("Generated prompt: %s", prompt)

        # Call the Suno API to generate music
        suno_response = generate_audio_by_prompt({
            "prompt": prompt,
            "make_instrumental": True,
            "wait_audio": False
        })
        logger.info("Suno API response: %s", suno_response)

        # Check if 'suno_response' is a list with at least two items
        if isinstance(suno_response, list) and len(suno_response) >= 2:
            if 'id' in suno_response[0] and 'id' in suno_response[1]:
                ids = f"{suno_response[0]['id']},{suno_response[1]['id']}"
                logger.info("Generated IDs: %s", ids)
            else:
                error_message = "IDs not found in Suno API response elements."
                logger.error(error_message)
                emit('error', {'message': error_message}, broadcast=True)
                return
        else:
            error_message = "Invalid Suno API response format."
            logger.error(error_message)
            emit('error', {'message': error_message}, broadcast=True)
            return

        # Extract features from data
        feature_1 = data.get('instrument', 'unknown')
        feature_2 = data.get('mood', 'unknown')
        feature_3 = data.get('bpm', 'unknown')

        # Check audio status and download when ready
        for attempt in range(60):
            audio_data = get_audio_information(ids)  # Ensure this function handles exceptions
            if audio_data and len(audio_data) >= 2:
                status_0 = audio_data[0].get("status")
                status_1 = audio_data[1].get("status")
                if status_0 == 'streaming' and status_1 == 'streaming':
                    filename1 = f"generated ~ {feature_1} ~ {feature_2} ~ {feature_3}.mp3"
                    file_path1 = os.path.join(generated_dir, filename1)

                    try:
                        # Download the audio file
                        download_audio(audio_data[0]['audio_url'], file_path1)
                        logger.info("Downloaded audio file: %s", file_path1)
                    except Exception as e:
                        logger.error("Error downloading audio: %s", e)
                        emit('error', {'message': 'Error downloading audio'}, broadcast=True)
                        return

                    try:
                        # Process the audio file (feature extraction, updating JSON files, etc.)
                        process_audio(file_path1)  # Pass the file path if required
                        logger.info("Processed audio file: %s", file_path1)
                    except Exception as e:
                        logger.error("Error processing audio: %s", e)
                        emit('error', {'message': 'Error processing audio'}, broadcast=True)
                        return

                    # Notify clients that a new sample has been generated
                    emit('new_sample_generated', {'filename': filename1}, broadcast=True)
                    logger.info("Emitted 'new_sample_generated' event with filename: %s", filename1)
                    break
                else:
                    logger.info("Audio not ready yet. Attempt %d/60", attempt + 1)
            else:
                logger.error("Invalid audio_data format or not enough data.")
                emit('error', {'message': 'Invalid audio data received from Suno API'}, broadcast=True)
                return

            time.sleep(5)
        else:
            # Executed if the loop completes without a 'break'
            error_message = "Audio generation timed out."
            logger.error(error_message)
            emit('error', {'message': error_message}, broadcast=True)
            return

        # Optionally, emit the processed data back to the frontend or to another client
        emit('processed_data_from_server', suno_response, broadcast=True)
        logger.info("Emitted 'processed_data_from_server' event.")

    except Exception as e:
        # Catch any unexpected exceptions
        logger.error("An unexpected error occurred: %s", e)
        emit('error', {'message': 'An unexpected error occurred on the server.'}, broadcast=True)


if __name__ == '__main__':
    socketio.run(app, debug=True)



"""
OLD VERSION 
# Modify the `handle_data_from_client2` function
@socketio.on('client2_to_server')
def handle_data_from_client2(data):
    print("Data received from Client2:", data)

    # Generate a prompt using the placeholders
    prompt = generate_prompt(data)

    # Call the Suno API to generate music
    suno_response = generate_audio_by_prompt({
        "prompt": prompt,
        "make_instrumental": True,
        "wait_audio": False
    })
    print(suno_response)

    if 'id' in suno_response[0] and 'id' in suno_response[1]:
        ids = f"{suno_response[0]['id']},{suno_response[1]['id']}"
        print(f"ids: {ids}")

        feature_1 = data.get('instrument', 'unknown')   # instrument
        feature_2 = data.get('mood', 'unknown')         # mood
        feature_3 = data.get('bpm', 'unknown')          # bpm

        for _ in range(60):
            audio_data = get_audio_information(ids)
            if audio_data and audio_data[0]["status"] == 'streaming' and audio_data[1]["status"] == 'streaming':
                filename1 = f"generated ~ {feature_1} ~ {feature_2} ~ {feature_3}.mp3"
                download_audio(audio_data[0]['audio_url'], os.path.join(generated_dir, filename1))

                # Call the process_audio function after downloading the audio files
                process_audio()  # feature extraction and updates JSON files


                # Notify client1 to restart audio processing
                emit('new_sample_generated', {'filename1': filename1 }, broadcast=True)
                break
            time.sleep(5)
    else:
        print("No valid IDs received to process audio information.")

    # Optionally, emit the processed data back to the frontend or to another client
    emit('processed_data_from_server', suno_response, broadcast=True)

"""


