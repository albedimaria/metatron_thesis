import React, { useState } from 'react';
import * as mm from '@magenta/music';
import {Html} from "@react-three/drei";

const MusicGenerator = () => {
    const [model, setModel] = useState(null);
    const [isModelLoading, setIsModelLoading] = useState(false);

    // Initialize the model
    const initializeModel = async () => {
        if (model || isModelLoading) return;

        setIsModelLoading(true);
        const musicVAE = new mm.MusicVAE(`${process.env.PUBLIC_URL}/checkpoints/mel_16bar/model.json`);
        await musicVAE.initialize();
        setModel(musicVAE);
        setIsModelLoading(false);
    };

    // Generate a melody
    const generateMelody = async () => {
        if (!model) {
            console.error('Model is not initialized');
            return;
        }

        const sample = await model.sample(1);
        const player = new mm.Player();
        player.resumeContext(); // Required in some browsers to allow audio
        await player.start(sample[0]);
    };

    return (
        <Html>
            <div>
                <button onClick={initializeModel} disabled={isModelLoading}>
                    {isModelLoading ? 'Loading Model...' : 'Load Model'}
                </button>
                <button onClick={generateMelody} disabled={!model}>
                    Generate Melody
                </button>
            </div>
        </Html>
    );
};

export default MusicGenerator;
