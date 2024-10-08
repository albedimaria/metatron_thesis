# Visualizing Music and Emotions Throughout Metatron: From Audio Analysis to Music Generation

## Description
This project revolutionizes audio analysis and music creation by addressing the limitations of traditional methods, particularly in representing emotions through music. Conventional techniques often rely on basic, two-dimensional plots, limiting users from fully exploring the nuanced relationship between music and emotions.

This system integrates sacred geometry with advanced visualization techniques and AI-driven music generation, creating a seamless experience that allows users to explore and generate music in an intuitive, visually-driven manner.

The project consists of three interconnected clients:

1. **Latent Space Client (LSC)**: A 3D audio visualization tool that lets users interactively analyze audio features.
2. **Metatron Client (MC)**: A sacred geometry-based tool that maps emotions to audio features using shapes like Metatron’s Cube.
3. **Generative Client (GC)**: An AI-based music generation platform that uses visual placeholders instead of written prompts to create music.

This system allows users to visualize, analyze, and generate music in a continuous loop, offering an immersive and intuitive interface.

## Features
- 3D audio visualization through customizable axes.
- Integration of sacred geometry (e.g., Metatron’s Cube) for emotion-to-audio mapping.
- AI-driven music generation without the need for written prompts.
- Real-time interaction and feedback across all clients.

## Technologies Used

### Frontend:
- **JavaScript**
- **CSS**
- **React**: A JavaScript library for building user interfaces.
- **React Three Fiber (r3f)**: A powerful renderer for Three.js within React.

### Backend:
- **Python**
- **Flask**: A lightweight WSGI web framework for Python.
- **Essentia**: An open-source library for audio analysis and music information retrieval.
- **NumPy**: A library for numerical computing in Python.

### Other:
- **WebSocket**: Used for real-time communication between the clients, enabling dynamic interaction.

## Installation

### Prerequisites
- **Python 3.x** (for the backend)
- **Node.js and npm** (for the frontend)

### Clone the Repository
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/albedimaria/metatron_thesis.git
   ```
   ```bash
   cd metatron_thesis
   ```

2. Setting up the backend (python environment)
   ```bash
   cd backend_thesis
   ```
   ```bash
   python3 -m venv env
   ```
   ```bash
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```
   ```bash
   pip install -r requirements.txt
   ```
- `requirements.txt` file containing the list of required libraries can be found inside the `backend_thesis` folder. In case of issues, you can manually install the libraries with the following command:

  ```bash
   pip install libraryName
   ```
**To install Essentia**  
To install Essentia use the following link with the instructions:
  - https://essentia.upf.edu/download.html

**Note**: downloading and installing Essentia requires several steps and may encounter issues along the way, particularly depending on your system setup. It is recommended to carefully follow the provided installation guide.

**Platform Requirements**
- Essentia can run natively on **macOS** and **Linux**.
- **Windows** users will need to install and run **Windows Subsystem for Linux** (WSL) to use Essentia, as it does not natively support Windows.

3. Setting up the frontend (React)
   
   - There are two React apps that need to be installed and run: `client` and `secondClient`.

   Setting up `client`:
   ```bash
   cd ../frontend_thesis
   ```
   ```bash
   npm install
   ```

   Setting up `secondClient`:
   ```bash
   cd ../secondClient
   ```
   ```bash
   npm install
   ```

## Running the Application

### Running the backend
Start the backend server (ensure the virtual environment is activated):
   ```bash
   python main.py
   ```
### Running the frontend
**First Client:**  
Navigate to the `client` directory:
   ```bash
   cd frontend_thesis/client
   ```
Start the React devlopment server:
   ```bash
   npm start
   ```

**Second Client:**  
Navigate to the `secondClient` directory:
   ```bash
   cd frontend_thesis/secondClient
   ```
Start the React devlopment server:
   ```bash
   npm start
   ```

You will need to run both `client` and `secondClient` to fully interact with the system. The frontend servers should run on different ports (`http://localhost:3001` and `http://localhost:3002`), and the backend on `http://localhost:5000`.
