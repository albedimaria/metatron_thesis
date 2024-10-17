import requests

base_url = 'http://localhost:3000'

def custom_generate_audio(payload):
    url = f"{base_url}/api/custom_generate"
    response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})
    return response.json()

def extend_audio(payload):
    url = f"{base_url}/api/extend_audio"
    response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})
    return response.json()

def generate_audio_by_prompt(payload):
    url = f"{base_url}/api/generate"
    response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})
    return response.json()

def get_audio_information(audio_ids):
    url = f"{base_url}/api/get?ids={audio_ids}"
    response = requests.get(url)
    return response.json()

def get_quota_information():
    url = f"{base_url}/api/get_limit"
    response = requests.get(url)
    return response.json()

def download_audio(url, filename):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Raises an error for bad HTTP status codes
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Audio downloaded and saved as {filename}")
    except requests.RequestException as e:
        print(f"Failed to download audio: {e}")

def generate_prompt(data):
    prompt = (
        "ambient track with:\n"
        f"- BPM: {data.get('bpm', 'N/A')}\n"
        # f"- Danceability: {data.get('dance', 'N/A')}\n"
        f"- Mood: {data.get('mood', 'N/A')}\n"
        f"- Instrument: {data.get('instrument', 'N/A')}\n"
        f"- Key: {data.get('key', 'N/A')}\n"
        f"- Scale: {data.get('scale', 'N/A')}\n"
        # f"- Color: {data.get('color', 'N/A')}\n"
        f"- Timbre: {data.get('timbre', 'N/A')}\n"
        # f"- Dynamic Complexity: {data.get('dynamic_complexity_norm', 'N/A')}\n"
        # f"- Texture: {data.get('texture', 'N/A')}\n"
        # f"- Reverb: {data.get('reverb', 'N/A')}\n"
        # f"- Clarity: {data.get('clarity', 'N/A')}\n"
    )
    return prompt
