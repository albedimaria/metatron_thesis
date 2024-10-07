import requests
import os
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants
BASE_URL = "https://api.sunoai.com"  # Adjusted to hypothetical URL
API_KEY = os.getenv('SUNO_API_KEY')  # API key stored in environment variables

# Headers
headers = {
    'Authorization': f"Bearer {API_KEY}",
    'Content-Type': 'application/json'
}

def generate_music():
    """Generate music with default settings."""
    url = f"{BASE_URL}/api/generate"
    try:
        response = requests.post(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error generating music: {e}")
        return None

def generate_custom_music(lyrics, style, title):
    """Generate custom music with specified lyrics, style, and title."""
    url = f"{BASE_URL}/api/custom_generate"
    data = {'lyrics': lyrics, 'style': style, 'title': title}
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error in custom music generation: {e}")
        return None

def generate_lyrics(prompt):
    """Generate lyrics based on a given prompt."""
    url = f"{BASE_URL}/api/generate_lyrics"
    data = {'prompt': prompt}
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error generating lyrics: {e}")
        return None

def get_music_info(ids=None):
    """Retrieve music information by ID(s)."""
    url = f"{BASE_URL}/api/get"
    params = {'ids': ids} if ids else {}
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error retrieving music information: {e}")
        return None

def get_quota_info():
    """Get API usage quota information."""
    url = f"{BASE_URL}/api/get_limit"
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error fetching quota info: {e}")
        return None

def extend_audio_length(audio_id):
    """Extend the length of an existing audio."""
    url = f"{BASE_URL}/api/extend_audio"
    data = {'audio_id': audio_id}
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error extending audio: {e}")
        return None

def main():
    # Example usage of the API functions
    # print(generate_music())
    # print(generate_custom_music("Hello, Suno!", "pop", "Hello Song"))
    # print(generate_lyrics("Write a song about the moon"))
    # print(get_music_info("123,456"))
    # print(extend_audio_length("789"))
    print(get_quota_info())

if __name__ == "__main__":
    main()
