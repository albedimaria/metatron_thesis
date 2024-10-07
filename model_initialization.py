# model_initialization.py

import os
import essentia.standard as esstd
from paths.pathsToFolders import model_path

def initialize_models():
    # Initialize the various models required for the application
    classes_embedding_model = esstd.TensorflowPredictEffnetDiscogs(
        graphFilename=os.path.join(model_path, "discogs-effnet-bs64-1.pb"),
        output="PartitionedCall:1"
    )

    mood_embedding_model = esstd.TensorflowPredictEffnetDiscogs(
        graphFilename=os.path.join(model_path, "discogs_artist_embeddings-effnet-bs64-1.pb"),
        output="PartitionedCall:1"
    )

    timbre_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, 'timbre-effnet-discogs-1.pb'),
        output="model/Softmax"
    )

    mood_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, 'mtg_jamendo_moodtheme-discogs_artist_embeddings-effnet-1.pb')
    )

    instrument_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, 'mtg_jamendo_instrument-discogs-effnet-1.pb')
    )

    va_embedding_model = esstd.TensorflowPredictMusiCNN(
        graphFilename=os.path.join(model_path, "msd-musicnn-1.pb"),
        output="model/dense/BiasAdd"
    )

    va_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, "emomusic-msd-musicnn-2.pb"),
        output="model/Identity"
    )

    approachability_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, "approachability_3c-discogs-effnet-1.pb"),
        output="model/Softmax"
    )

    engagement_model = esstd.TensorflowPredict2D(
        graphFilename=os.path.join(model_path, "engagement_3c-discogs-effnet-1.pb"),
        output="model/Softmax"
    )

    # Return a dictionary containing all initialized models
    return {
        "classes_embedding_model": classes_embedding_model,
        "mood_embedding_model": mood_embedding_model,
        "timbre_model": timbre_model,
        "mood_model": mood_model,
        "instrument_model": instrument_model,
        "va_embedding_model": va_embedding_model,
        "va_model": va_model,
        "approachability_model": approachability_model,
        "engagement_model": engagement_model
    }

