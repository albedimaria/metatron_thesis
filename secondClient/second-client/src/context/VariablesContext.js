import React, { createContext, useEffect, useState, useMemo } from "react";
import SphereDataGenerator from "../data/dataGenerator/SphereDataGenerator";

const VariablesContext = createContext();

export const VariablesProvider = ({ children }) => {
    const { sphere } = SphereDataGenerator();
    // console.log(sphere)

    // Initialize state with default values
    const [tempoGeomNew, setTempoGeomNew] = useState(20);
    const [danceGeomNew, setDanceGeomNew] = useState(0);
    const [moodGeomNew, setMoodGeomNew] = useState('');
    const [instrGeomNew, setInstrGeomNew] = useState('');
    const [keyGeomNew, setKeyGeomNew] = useState('');
    const [scaleGeomNew, setScaleGeomNew] = useState('');
    const [colorGeomNew, setColorGeomNew] = useState('');

    const [dynamicsGeomNew, setDynamicsGeomNew] = useState(0);
    const [timbreGeomNew, setTimbreGeomNew] = useState('');
    const [harmonicityGeomNew, setHarmonicityGeomNew] = useState(0);


    useEffect(() => {
        if (sphere) {
            setTempoGeomNew(parseFloat(sphere.bpm) || 20);
            setDanceGeomNew(sphere.danceability || 0);
            setMoodGeomNew(sphere.mood || '');
            setInstrGeomNew(sphere.instrument || '');
            setKeyGeomNew(sphere.key || '');
            setScaleGeomNew(sphere.scale || '');

            setColorGeomNew(sphere.color || '');

            setDynamicsGeomNew(sphere.dynamic_complexity_norm || 0)
            setTimbreGeomNew(sphere.timbre || '')
            setHarmonicityGeomNew(sphere.harmonicity || 0);


            if (process.env.NODE_ENV === "development") {
                console.log("Sphere data:");
            }
        }

    }, [sphere]);

    const contextValue = useMemo(() => ({
        tempoGeomNew,
        danceGeomNew,
        moodGeomNew,
        instrGeomNew,
        keyGeomNew,
        scaleGeomNew,
        colorGeomNew,
        timbreGeomNew,
        harmonicityGeomNew,
        dynamicsGeomNew,
    }), [tempoGeomNew, danceGeomNew, moodGeomNew, instrGeomNew, keyGeomNew, scaleGeomNew,
        colorGeomNew, timbreGeomNew, harmonicityGeomNew, dynamicsGeomNew]);



    const setContextValue = useMemo(() => ({

        setHarmonicityGeomNew,
        setDynamicsGeomNew,
        setTempoGeomNew,
        setDanceGeomNew,
        setMoodGeomNew,
        setInstrGeomNew,
        setKeyGeomNew,
        setScaleGeomNew,
        setColorGeomNew,
        setTimbreGeomNew,


    }), [tempoGeomNew, danceGeomNew, moodGeomNew, instrGeomNew, keyGeomNew, scaleGeomNew,
        colorGeomNew, timbreGeomNew, harmonicityGeomNew, dynamicsGeomNew]);


    return (
        <VariablesContext.Provider value={{contextValue, setContextValue}}>
            {children}
        </VariablesContext.Provider>
    );
};

export function useVariables() {
    return React.useContext(VariablesContext);
}
