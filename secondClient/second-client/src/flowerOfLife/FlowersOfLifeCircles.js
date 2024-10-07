import Vertices from "../vertices/Vertices";
import React, {useEffect, useRef, useState} from "react";
import {Circle, Ring} from "@react-three/drei";
import Rescaler from "../functions/rescaler/Rescaler";
import {useFrame} from "@react-three/fiber";
import {useKnobsValues} from "../context/KnobContext";

const outerRadius = 5.5
const innerRadius = outerRadius - 0.15

const FlowersOfLifeCircles = () => {
    const { O, P, Q, R, S, T, U } = Vertices();
    const [opacity, setOpacity] = useState(1); // State to track opacity
    const [shouldFadeOut, setShouldFadeOut] = useState(false);

    const { knobValues } = useKnobsValues();

    const {
        bpmKnob,
        danceKnob,
        moodKnob,
        instrKnob,
        keyKnob,
        scaleKnob,
        colorKnob,
        timbreKnob,
        harmoKnob,
        dynamicKnob
    } = knobValues;


    // Check if the starting point condition is met
    useEffect(() => {
        const startingPoint =
            bpmKnob === 0 &&
            danceKnob === 0 &&
            moodKnob === 0 &&
            instrKnob === 0 &&
            keyKnob === 0 &&
            scaleKnob === 0 &&
            colorKnob === 0 &&
            timbreKnob === 0 &&
            harmoKnob === 0 &&
            dynamicKnob === 0;

        if (!startingPoint) {
            setShouldFadeOut(true);
        } else {
            setShouldFadeOut(false);
        }
    }, [bpmKnob, danceKnob, moodKnob, instrKnob, keyKnob, scaleKnob, colorKnob, timbreKnob, harmoKnob, dynamicKnob]);


    useFrame(() => {
        if (shouldFadeOut && opacity > 0) {
            setOpacity(currentOpacity => Math.max(currentOpacity - 0.005, 0)); // Decrease opacity
        } else if (!shouldFadeOut && opacity < 1) {
            setOpacity(currentOpacity => Math.max(currentOpacity + 0.005, 1)); // Decrease opacity
        }
    });

    const vertices = [O, P, Q, R, S, T, U];



    return (
        <>
            {vertices.map((vertex, index) => (
                <Ring
                    args={[innerRadius, outerRadius, 32]}
                    key={index}
                    position={[vertex.x, vertex.y, vertex.z]}
                >
                    <meshBasicMaterial
                        attach="material"
                        color={'lightgrey'}
                        transparent={true}
                        opacity={opacity} // Use state variable
                    />
                </Ring>
            ))}
        </>
    );
};

export default FlowersOfLifeCircles;

