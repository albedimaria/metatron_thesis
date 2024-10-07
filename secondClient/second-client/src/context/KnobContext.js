import React, {createContext, useState, useEffect} from 'react';
import Rescaler from "../functions/rescaler/Rescaler";

const KnobValuesContext = createContext();

export const KnobValuesProvider = ({ children }) => {

    const { bpm_rescaled, dance_rescaled, mood_rescaled, instr_rescaled, key_rescaled,
        scale_rescaled, timbre_rescaled, harmonicity_rescaled, dynamics_rescaled,
        color_rescaled,
        texture_rescaled, reverb_rescaled, clarity_rescaled } = Rescaler();


    const [knobValues, setKnobValues] = useState({
        bpmKnob:     bpm_rescaled,
        danceKnob:   dance_rescaled,
        moodKnob:    mood_rescaled,
        instrKnob:   instr_rescaled,
        keyKnob:     key_rescaled,
        scaleKnob:   scale_rescaled,
        timbreKnob:  timbre_rescaled,
        harmoKnob:   harmonicity_rescaled,
        dynamicKnob: dynamics_rescaled,
        colorKnob:   color_rescaled,
        textureKnob: texture_rescaled,  // New feature
        reverbKnob:  reverb_rescaled,   // New feature
        clarityKnob: clarity_rescaled,  // New feature
    });

    // Update knobValues whenever the values from Rescaler change
    useEffect(() => {
        setKnobValues({
            bpmKnob:     bpm_rescaled,
            danceKnob:   dance_rescaled,
            moodKnob:    mood_rescaled,
            instrKnob:   instr_rescaled,
            keyKnob:     key_rescaled,
            scaleKnob:   scale_rescaled,
            timbreKnob:  timbre_rescaled,
            harmoKnob:   harmonicity_rescaled,
            dynamicKnob: dynamics_rescaled,
            colorKnob:   color_rescaled,
            textureKnob: texture_rescaled,  // New feature
            reverbKnob : reverb_rescaled,   // New feature
            clarityKnob: clarity_rescaled,  // New feature
        });
    }, [bpm_rescaled, dance_rescaled, mood_rescaled, instr_rescaled, key_rescaled, scale_rescaled, timbre_rescaled, harmonicity_rescaled, dynamics_rescaled, color_rescaled, texture_rescaled, reverb_rescaled, clarity_rescaled]);  // Include new features in dependencies

    return (
        <KnobValuesContext.Provider value={{ knobValues, setKnobValues }}>
            {children}
        </KnobValuesContext.Provider>
    );
};

export function useKnobsValues(){
    return React.useContext(KnobValuesContext);
}


/*
import React, {createContext, useState, useContext, useEffect} from 'react';
import Rescaler from "./functions/rescaler/Rescaler";

const KnobValuesContext = createContext();

export const KnobValuesProvider = ({ children }) => {

    const { bpm_rescaled, dance_rescaled, mood_rescaled, instr_rescaled, key_rescaled,
        scale_rescaled, timbre_rescaled, harmonicity_rescaled, dynamics_rescaled,
        color_rescaled } = Rescaler();


    const [knobValues, setKnobValues] = useState({
        bpmKnob:     bpm_rescaled,
        danceKnob:   dance_rescaled,
        moodKnob:    mood_rescaled,
        instrKnob:   instr_rescaled,
        keyKnob:     key_rescaled,
        scaleKnob:   scale_rescaled,
        timbreKnob:  timbre_rescaled,
        harmoKnob:   harmonicity_rescaled,
        dynamicKnob: dynamics_rescaled,
        colorKnob:   color_rescaled,

    });

    // Update knobValues whenever the values from Rescaler change
    useEffect(() => {
        setKnobValues({
            bpmKnob: bpm_rescaled,
            danceKnob: dance_rescaled,
            moodKnob: mood_rescaled,
            instrKnob: instr_rescaled,
            keyKnob: key_rescaled,
            scaleKnob: scale_rescaled,
            timbreKnob: timbre_rescaled,
            harmoKnob: harmonicity_rescaled,
            dynamicKnob: dynamics_rescaled,
            colorKnob: color_rescaled,
        });
    }, [bpm_rescaled, dance_rescaled, mood_rescaled, instr_rescaled, key_rescaled, scale_rescaled, timbre_rescaled, harmonicity_rescaled, dynamics_rescaled, color_rescaled]);


    // console.log(knobValues, "knobValues")

    return (
        <KnobValuesContext.Provider value={{ knobValues, setKnobValues }}>
            {children}
        </KnobValuesContext.Provider>
    );
};

export function useKnobsValues(){
    return React.useContext(KnobValuesContext);

}
*/
