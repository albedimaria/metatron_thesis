import React, { createContext, useEffect, useState, useMemo } from 'react';
import {useNewFeatures} from "../context/NewFeaturesContext";
import {useKnobsValues} from "../context/KnobContext";
import {useData} from "../data/backendData/DataContext";
import LabelDataExtractor from "../data/label extractor/LabelDataExtractor";
import {findLabelByValue, reverseInstrumentValue, reverseMoodValue, reverseRescaleValue} from "./BackRescaleFunctions";

const BackRescalerContext = createContext();

export const BackRescalerProvider = ({ children }) => {
    const [rescaledData, setRescaledData] = useState({});

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
        dynamicKnob,
        textureKnob,
        reverbKnob,
        clarityKnob
    } = knobValues;

    const {
        textureClassesAvailable,
        reverbClassesAvailable,
        clarityClassesAvailable,
        dynamicClassesAvailable,
    } = useNewFeatures();

    const { explanation } = useData()

    const {
        keyClassesAvailable,
        timbreClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable
    } =
        LabelDataExtractor({ explanation });

    // Define original ranges for features that need rescaling
    const originalBpmRange = [20, 200];
    const rescaledBpmRange = [0, 100];

    // Convert numeric value back to label
    useEffect(() => {
        setRescaledData({
            bpm: reverseRescaleValue(bpmKnob, rescaledBpmRange[0], rescaledBpmRange[1], originalBpmRange[0], originalBpmRange[1]),
            dance: danceKnob,
            mood: reverseMoodValue(moodKnob),
            instrument: reverseInstrumentValue(instrKnob),
            key: findLabelByValue(keyKnob, keyClassesAvailable),
            scale: findLabelByValue(scaleKnob, scaleClassesAvailable),
            color: findLabelByValue(colorKnob, colorsClassesAvailable),
            timbre: findLabelByValue(timbreKnob, timbreClassesAvailable),
            dynamic_complexity_norm: findLabelByValue(dynamicKnob, dynamicClassesAvailable),
            texture: findLabelByValue(textureKnob, textureClassesAvailable),
            reverb: findLabelByValue(reverbKnob, reverbClassesAvailable),
            clarity: findLabelByValue(clarityKnob, clarityClassesAvailable)
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
        dynamicKnob,
        textureKnob,
        reverbKnob,
        clarityKnob
    ]);

    const contextValue = useMemo(() => ({ rescaledData, setRescaledData }), [rescaledData]);

    return (
        <BackRescalerContext.Provider value={contextValue}>
            {children}
        </BackRescalerContext.Provider>
    );
}

export function useBackRescaler() {
    return React.useContext(BackRescalerContext);
}
