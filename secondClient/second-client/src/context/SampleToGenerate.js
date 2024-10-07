import React, { createContext, useEffect, useState, useMemo } from 'react';
import {useBackRescaler} from "../backRescaling/BackRescalerProvider";

const SampleToGenerateContext = createContext();

export const SampleToGenerateProvider = ({ children }) => {
    const { rescaledData } = useBackRescaler();
    const [sampleData, setSampleData] = useState({});

    useEffect(() => {
        setSampleData(rescaledData);
    }, [rescaledData]);

    if (process.env.NODE_ENV === "development") {
        // console.log("Sample data:", sampleData);
    }

    const contextValue = useMemo(() => ({ sampleData, setSampleData }), [sampleData]);

    return (
        <SampleToGenerateContext.Provider value={contextValue}>
            {children}
        </SampleToGenerateContext.Provider>
    );
}

export function useSampleToGenerate() {
    return React.useContext(SampleToGenerateContext);
}


/*
import React, { createContext, useEffect, useState, useMemo } from 'react';
import { useKnobsValues } from "../KnobProvider";

const SampleToGenerateContext = createContext();

export const SampleToGenerateProvider = ({ children }) => {
    const [sampleData, setSampleData] = useState({});

    const { knobValues } = useKnobsValues();
    const {
        bpmKnob,
        moodKnob,
        danceKnob,
        instrKnob,
        keyKnob,
        colorKnob,
        scaleKnob,
        timbreKnob,
        harmoKnob,
        dynamicKnob,
        textureKnob,
        reverbKnob,
        clarityKnob
    } = knobValues;

    useEffect(() => {
        setSampleData({
            bpm: bpmKnob,
            dance: danceKnob,
            mood: moodKnob,
            instrument: instrKnob,
            key: keyKnob,
            scale: scaleKnob,
            color: colorKnob,
            timbre: timbreKnob,
            harmonicity: harmoKnob,
            dynamic_complexity_norm: dynamicKnob,

            texture: textureKnob,
            reverb: reverbKnob,
            clarity: clarityKnob
        });
    }, [
        bpmKnob,
        moodKnob,
        danceKnob,
        instrKnob,
        keyKnob,
        colorKnob,
        scaleKnob,
        timbreKnob,
        harmoKnob,
        dynamicKnob,

        textureKnob,
        reverbKnob,
        clarityKnob
    ]);

    if (process.env.NODE_ENV === "development") {
        // console.log("Sample data:", sampleData);
    }

    const contextValue = useMemo(() => ({ sampleData, setSampleData }), [sampleData]);

    return (
        <SampleToGenerateContext.Provider value={contextValue}>
            {children}
        </SampleToGenerateContext.Provider>
    );
}

export function useSampleToGenerate() {
    return React.useContext(SampleToGenerateContext);
}
*/
