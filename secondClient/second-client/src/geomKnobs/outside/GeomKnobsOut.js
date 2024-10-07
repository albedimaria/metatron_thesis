import React from 'react';
import Vertices from "../../vertices/Vertices";
import AnimatedRing from "../animatedRing/AnimatedRing";
import {useKnobsValues} from "../../context/KnobContext";

function GeomKnobsOut() {
    const { A, B, C, D, E, F } = Vertices();

    const { knobValues } = useKnobsValues()
    const {
        bpmKnob,
        danceKnob,
        moodKnob,
        instrKnob,
        keyKnob,
        scaleKnob,
    } = knobValues

    const knobData = [
        { vertex: D, value: bpmKnob,   label: "bpm",         name: "bpm"       },
        { vertex: F, value: danceKnob, label: "dance",       name: "dance"     },
        { vertex: B, value: moodKnob,  label: "mood",        name: "mood"      },
        { vertex: C, value: instrKnob, label: "instrument",  name: "instr"     },
        { vertex: A, value: keyKnob,   label: "key",         name: "key"       },
        { vertex: E, value: scaleKnob, label: "scale",       name: "scale"     }
    ];

    // console.log("knobData:", knobData);

    const outerRadius = 5.5;
    const innerRadius = outerRadius - 0.17;


    return (
        <>
            {knobData.map(({ vertex, value, label, name }, index) => (
                <AnimatedRing
                    key={index}
                    vertex={vertex}
                    value={value}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    label={label}
                    knobName={`${name}Knob`} // Assign a unique name for each knob
                    originComponent={"knobsOut"}
                />
            ))}
        </>
    );
}

export default GeomKnobsOut;


/*
import React, {useRef, useState} from 'react';
import { Ring } from '@react-three/drei';
import Vertices from "../vertices/Vertices";
import Rescaler from "../functions/rescaler/Rescaler";

function GeomKnobsOut() {
    // Getting rescaled values from the Rescaler function
    const { bpm_rescaled, dance_rescaled, mood_rescaled, instr_rescaled, key_rescaled, scale_rescaled } = Rescaler();

    const { A, B, C, D, E, F } = Vertices();

    const knobData = [
        { vertex: A, value: bpm_rescaled },
        { vertex: B, value: dance_rescaled },
        { vertex: C, value: mood_rescaled },
        { vertex: D, value: instr_rescaled },
        { vertex: E, value: key_rescaled },
        { vertex: F, value: scale_rescaled }
    ];

    const innerRadius = 4;
    const outerRadius = 4.2;

    return (
        <>
            {knobData.map(({ vertex, value }, index) => {

                return (
                    <group key={index} position={[vertex.x, vertex.y, vertex.z]}>
                        {/!* Background Ring *!/}
                        <Ring args={[innerRadius, outerRadius, 32]}>
                            <meshBasicMaterial attach="material" color="lightgrey" />
                        </Ring>
                        {/!* Value Ring *!/}
                        <Ring ref={ringRef} args={[innerRadius - 0.02, outerRadius + 0.02, 32, 1, 0, currentAngle]}>
                            <meshBasicMaterial attach="material" color="purple" />
                        </Ring>
                    </group>
                );
            })}
        </>
    );
}

export default GeomKnobsOut;


*/
