import {Html} from "@react-three/drei";
import React, {useState} from "react"
import './knobsStyle.css'
import Vertices from "../../vertices/Vertices";
import {useKnobs} from "../../../../../contexts/knobsSliders/KnobsContext";

function GeomKnobs() {

    // create the six circles controlled by the knobs

    const { tempoGeomNew, timbreGeomNew } = useKnobs()

    const { A, B, C, D, E, F } = Vertices();

    const knobData = [
        {vertex: A, value: tempoGeomNew },
        {vertex: B, value: timbreGeomNew },
        {vertex: C, value: "to be defined"},
        {vertex: D, value: "to be defined"},
        {vertex: E, value: "to be defined"},
        {vertex: F, value: "to be defined"}

    ]; // Add more vertices as needed


    return (
        <>
            {knobData.map(({vertex, value}, index) => (
                <Html
                    key={index}
                    position={[vertex.x - 4.1, vertex.y + 3.5, vertex.z]}>

                    <div className="skill">
                        <div className="">
                            <div className="">
                                <div id="number">{ value }</div>
                            </div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80px" height="80px">
                            <defs>
                                <linearGradient id={`GradientColor${index}`}>
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                            <circle cx="45" cy="45" r="30" strokeLinecap={"round"} style={{
                                fill: 'none',
                                stroke: `url(#GradientColor${index})`,
                                strokeWidth: '2px', // Adjusted stroke width for smaller circles
                                strokeDasharray: 187, // Adjusted stroke dash array
                                strokeDashoffset: 187 - (( value / 100) * 187),
                                animation: 'anim 2s linear forwards',
                            }} />

                        </svg>

                    </div>
                </Html>
            ))}
        </>
    );
}

export default GeomKnobs