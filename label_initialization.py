# label_initialization.py

import json
import os

def initialize_labels(model_path):
    labels = {}

    # Load timbre labels
    with open(os.path.join(model_path, 'timbre-effnet-discogs-1.json'), 'r') as file:
        metadata = json.load(file)
    labels['timbre_labels'] = metadata['classes']

    # Load mood labels
    with open(os.path.join(model_path, 'discogs_label_embeddings-effnet-bs64-1.json'), 'r') as file:
        metadata = json.load(file)
    labels['mood_labels'] = metadata['classes']

    # Load instrument labels
    with open(os.path.join(model_path, 'mtg_jamendo_instrument-effnet-discogs_artist_embeddings-1.json'), 'r') as file:
        metadata = json.load(file)
    labels['instrument_labels'] = metadata['classes']

    # Load approachability labels
    with open(os.path.join(model_path, 'approachability.json'), 'r') as file:
        metadata = json.load(file)
    labels['approachability_labels'] = metadata['classes']

    # Load engagement labels
    with open(os.path.join(model_path, 'engagement.json'), 'r') as file:
        metadata = json.load(file)
    labels['engagement_labels'] = metadata['classes']

    return labels
