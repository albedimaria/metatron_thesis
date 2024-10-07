# json_management.py

import json
import os


def reset_analyzed_files(analyzed_files_json_path):
    open(analyzed_files_json_path, 'w').close()


def add_to_analyzed(file_name, analyzed_files_json_path):
    try:
        with open(analyzed_files_json_path, 'r') as file:
            analyzed_files = set(json.load(file))
    except json.JSONDecodeError:
        analyzed_files = set()

    analyzed_files.add(file_name)
    with open(analyzed_files_json_path, 'w') as file:
        json.dump(list(analyzed_files), file)


def remove_from_analyzed(file_name, analyzed_files_json_path):
    try:
        with open(analyzed_files_json_path, 'r') as file:
            analyzed_files = set(json.load(file))
    except json.JSONDecodeError:
        analyzed_files = set()

    analyzed_files.discard(file_name)
    with open(analyzed_files_json_path, 'w') as file:
        json.dump(list(analyzed_files), file)
