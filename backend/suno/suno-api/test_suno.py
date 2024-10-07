import time
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


if __name__ == '__main__':

    start_time = time.time()

    prompt = "ambient track with reverberated cello solo, with rich texture, ethereal"
    """
    data = generate_audio_by_prompt({
        "prompt": prompt,
        "make_instrumental": True,
        "wait_audio": False
    })

    if 'id' in data[0] and 'id' in data[1]:
        ids = f"{data[0]['id']},{data[1]['id']}"
        print(f"ids: {ids}")

        for _ in range(60):
            data = get_audio_information(ids)
            if data and data[0]["status"] == 'streaming' and data[1]["status"] == 'streaming':
                download_audio(data[0]['audio_url'], f"{data[0]['id']}.mp3")
                download_audio(data[1]['audio_url'], f"{data[1]['id']}.mp3")
                break
            time.sleep(5)
    else:
        print("No valid IDs received to process audio information.")
    """




    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Time taken for generation: {elapsed_time:.2f} seconds")
    print("--------")
    print(get_quota_information())
