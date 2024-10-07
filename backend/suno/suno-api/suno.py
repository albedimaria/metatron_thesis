import requests
import os
import time
import logging
from requests.exceptions import RequestException

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants
BASE_URL = "https://api.sunoaiapi.com/api/v1"
API_KEY = 'bw0f/AFAdYQ3QVX3ZkM9ZrnncYH/iCRl'  # Ensure you have API_KEY set in your environment variables

# Headers
headers = {
    'api-key': API_KEY,
    'Content-Type': 'application/json'
}

def query_remaining_songs():
    try:
        url = f"{BASE_URL}/gateway/limit"
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Failed to query remaining songs: {e}")
        return None

def generate_music(title, tags, prompt, model='chirp-v3-0'):
    url = f"{BASE_URL}/gateway/generate/music"
    data = {'title': title, 'tags': tags, 'prompt': prompt, 'mv': model}
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except RequestException as e:
        logging.error(f"Error generating music: {e}")
        return None

def get_music_status(song_id):
    url = f"{BASE_URL}/gateway/feed/{song_id}"
    max_attempts = 10
    attempt = 0
    backoff_factor = 1
    while attempt < max_attempts:
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            data = response.json()
            if data.get('data', {}).get('status', '') == 'complete':
                return data, data['data'].get('audio_url')
            time.sleep(backoff_factor)
            backoff_factor *= 2  # Exponential backoff
        except RequestException as e:
            logging.error(f"Error checking music status: {e}")
            time.sleep(backoff_factor)
            backoff_factor *= 2
        attempt += 1
    logging.warning(f"Failed to complete music generation after {max_attempts} attempts.")
    return None, None

def download_audio(url, path):
    if url is None:
        logging.error("No URL provided for download.")
        return
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with requests.get(url, stream=True) as response:
            response.raise_for_status()
            with open(path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=1024):
                    f.write(chunk)
        logging.info(f"File downloaded and saved as {path}")
    except RequestException as e:
        logging.error(f"Failed to download file: {e}")

def main():
    remaining_songs_response = query_remaining_songs()
    logging.info(f"Remaining Songs Check: {remaining_songs_response}")
    if remaining_songs_response.get('code', 1) == 0 and remaining_songs_response['data']['songs_left'] > 0:
        logging.info(f"You have {remaining_songs_response['data']['songs_left']} songs left to generate.")
        # Uncomment below to generate music
        # music_response = generate_music('Happy Song', 'upbeat, joyful', 'Create a happy upbeat song')
        # logging.info(f"Music Generation Submitted: {music_response}")
    else:
        logging.warning("You have reached your limit or there is an error in retrieving data.")

if __name__ == "__main__":
    main()
