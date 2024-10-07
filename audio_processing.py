import essentia.standard as esstd
from utils.tempo_ranges import tempo_ranges
from utils.sector_labels import sector_labels
from utils.sector_colors import sector_colors
import numpy as np

import logging

def load_audio(file_path):
    """Load and resample audio from the given file path with error handling."""
    try:
        audio = esstd.MonoLoader(filename=file_path, sampleRate=16000, resampleQuality=4)()
        logging.info(f"Audio file {file_path} loaded successfully.")
        return audio
    except Exception as e:
        logging.error(f"Error loading audio file {file_path}: {e}")
        return None



# Function to assign a tempo label based on the BPM range
def assign_tempo_label(bpm):
    for label, (min_bpm, max_bpm) in tempo_ranges.items():
        if min_bpm <= bpm < max_bpm:
            return label
    return 'unknown'


# from valence/arousal to color and relative emotion
def get_sector_color_label(valence, arousal, threshold):
    # Calculate the polar coordinates of the point
    theta = np.arctan2(valence, arousal)

    # Shift the angle to fall within the range [0, 2*pi)
    if theta < 0:
        theta += 2 * np.pi

    # If the distance is below the threshold, return 'neutral' color and label
    if abs(valence) < threshold and abs(arousal) < threshold:
        return 'white', 'neutral'

    # Define the number of sectors
    num_sectors = 16

    # Define the sector angles
    sector_angles = 2 * np.pi / num_sectors

    # Find the sector that the point falls into
    sector_index = int(np.floor(theta / sector_angles))

    # Get the color and label of the sector
    sector_color = sector_colors[sector_index]
    sector_label = sector_labels[sector_index]

    return sector_color, sector_label


def predict_label_from_classes(predictions, class_labels):
    """
    Predict the primary label(s) present in the audio file.
    Returns the predicted label(s).
    """
    # Extract the tags from the predictions
    tags = predictions[0][:len(class_labels)]

    # Determine the most likely label(s) based on the tag probabilities
    max_index = int(np.argmax(tags))
    predicted_label = class_labels[max_index]

    return predicted_label

