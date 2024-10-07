import React, { createContext } from 'react';
import {useData} from "../dataFromBackend/DataContext";
import LabelsDataExtractor from "./LabelDataExtractor";

const LabelsContext = createContext();

export const LabelsProvider = ({ children }) => {

    const { explanation } = useData()


    // Use the LabelsDataExtractor component to extract label data
    const {
        moodClassesAvailable,
        instrumentClassesAvailable,
        keyClassesAvailable,
        timbreClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable
    } =
        LabelsDataExtractor({ explanation });


    const labels = {

        BPM_label: "bpm",
        Mood_label: "mood",
        Danceability_label: "danceability",
        Key_label: "key",
        Instrument_label: "instrument",

        Timbre_label: "timbre",
        Scale_label: "scale",
        Dynamics_label: "dynamicity",
        Harmonicity_label: "harmonicity",
        Color_label: "color",

        MoodChoicesLabels: moodClassesAvailable,
        InstrumentChoicesLabels: instrumentClassesAvailable,
        KeyChoicesLabels: keyClassesAvailable,
        TimbreChoicesLabels: timbreClassesAvailable,
        ScaleChoicesLabels: scaleClassesAvailable,
        ColorChoicesLabels: colorsClassesAvailable,

        OptionsLabels: [
            'bpm',
            'key',
            'danceability',
            'scale',

            'mood',
            'color',
            'timbre',

            'instrument',
            'dynamicity',
            'harmonicity'
        ]


    };





    return (
        <LabelsContext.Provider value={ labels }>
            {children}
        </LabelsContext.Provider>
    );
};

export function useLabels(){
    return React.useContext(LabelsContext)
}