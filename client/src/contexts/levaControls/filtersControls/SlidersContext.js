import React, {createContext, useContext, useState} from 'react';
import {button, folder, useControls} from 'leva';
import { useLabels } from "../../labelsContext/LabelsContext";

const SlidersContext = createContext();

export const SlidersProvider = ({ children }) => {

    const {
        BPM_label,
        Mood_label,
        Danceability_label,
        Key_label,
        Instrument_label,
        MoodChoicesLabels,
        KeyChoicesLabels,
        InstrumentChoicesLabels,
        Timbre_label,
        TimbreChoicesLabels,
        Scale_label,
        ScaleChoicesLabels,
        Color_label,
        ColorChoicesLabels,
        Harmonicity_label,
        Dynamics_label,

    } = useLabels();

    const [moodSelected, setMoodSelected] = useState('all moods');

    const [danceabilitySelectedLow, setDanceabilitySelectedLow] = useState(0);
    const [danceabilitySelectedHigh, setDanceabilitySelectedHigh] = useState(100);
    const [instrumentSelected, setInstrumentSelected] = useState('all instrs');
    const [keySelected, setKeySelected] = useState('all keys');
    const [bpmSelectedLow, setBpmSelectedLow] = useState(20);
    const [bpmSelectedHigh, setBpmSelectedHigh] = useState(200);
    const [textSelected, setTextSelected] = useState('');
    const [showSelected, setShowSelected] = useState(false)

    const [timbreSelected, setTimbreSelected] = useState('all timbres');
    const [scaleSelected, setScaleSelected] = useState('all scales');
    const [colorSelected, setColorSelected] = useState('all colors');
    const [harmonicitySelectedLow, setHarmonicitySelectedLow] = useState(0);
    const [harmonicitySelectedHigh, setHarmonicitySelectedHigh] = useState(100);
    const [dynamicSelectedLow, setDynamicSelectedLow] = useState(0);
    const [dynamicSelectedHigh, setDynamicSelectedHigh] = useState(1);

    const [bypass, setBypass] = useState(false);

    const resetFilters = () => {
        setBpmSelectedLow(20);
        setBpmSelectedHigh(200);
        setDanceabilitySelectedLow(0);
        setDanceabilitySelectedHigh(100);
        setMoodSelected('all moods');
        setKeySelected('all keys');
        setInstrumentSelected('all instrs');
        setTimbreSelected('all timbres');
        setScaleSelected('all scales');
        setColorSelected('all colors');
        setHarmonicitySelectedLow(0);
        setHarmonicitySelectedHigh(100);
        setDynamicSelectedLow(0);
        setDynamicSelectedHigh(1);
    };


    const [, set] = useControls('filter', () => ({

        'by features': folder({
            bpmSlider: {
                value: [bpmSelectedLow, bpmSelectedHigh],
                min: 20,
                max: 200,
                step: 1,
                label: BPM_label,
                onChange: (value) => {
                    setBpmSelectedLow(value[0]);
                    setBpmSelectedHigh(value[1]);
                },
            },

            danceabilitySlider: {
                value: [danceabilitySelectedLow, danceabilitySelectedHigh],
                min: 0,
                max: 100,
                step: 1,
                label: <span>% of <br />{Danceability_label}</span>,
                onChange: (value) => {
                    setDanceabilitySelectedLow(value[0]);
                    setDanceabilitySelectedHigh(value[1]);
                },
            },

            moodSelector: {
                options: MoodChoicesLabels,
                value: moodSelected,
                label: Mood_label,
                onChange: (value) => setMoodSelected(value),
            },

            keySelector: {
                options: KeyChoicesLabels,
                value: keySelected,
                label: Key_label,
                onChange: (value) => setKeySelected(value),
            },

            instrumentSelector: {
                options: InstrumentChoicesLabels,
                value: instrumentSelected,
                label: Instrument_label,
                onChange: (value) => setInstrumentSelected(value),
            },

            timbreSelector: {
                options: TimbreChoicesLabels,
                value: timbreSelected,
                label: Timbre_label,
                onChange: (value) => setTimbreSelected(value),
            },
            scaleSelector: {
                options: ScaleChoicesLabels,
                value: scaleSelected,
                label: Scale_label,
                onChange: (value) => setScaleSelected(value),
            },
            colorSelector: {
                options: ColorChoicesLabels,
                value: colorSelected,
                label: Color_label,
                onChange: (value) => setColorSelected(value),
            },

            harmonicitySlider: {
                value: [harmonicitySelectedLow, harmonicitySelectedHigh],
                min: 0,
                max: 100,
                step: 1,
                label: Harmonicity_label,
                onChange: (value) => {
                    setHarmonicitySelectedLow(value[0]);
                    setHarmonicitySelectedHigh(value[1]);
                },
            },
            dynamicsSlider: {
                value: [dynamicSelectedLow, dynamicSelectedHigh],
                min: 0,
                max: 1,
                step: 0.01,
                label: Dynamics_label,
                onChange: (value) => {
                    setDynamicSelectedLow(value[0]);
                    setDynamicSelectedHigh(value[1]);
                },
            },

            /*'booleanbypass': {
                value: bypass,
                label: "bypass all filters",
                onChange: (value) => {
                    // if bypass true then call resetFilters()
                }
            },*/

            'bypass filters': button(() => {
                resetFilters();
            }),



        },
        { collapsed: true }
        ),

        'by names': folder({
            showSamplesName: {
                value: showSelected,
                label: <span>samples <br/> name </span>,
                onChange: (value) => setShowSelected(value)
            },
            text: {
                value: textSelected,
                label: <span>filter <br />by name</span>,
                onChange: (value) => setTextSelected(value)
            },
            "NB": {
                value: "press enter to confirm",
                editable: false
            },
        }, { collapsed: true }
        )
    }));


    return (
        <SlidersContext.Provider value={{
            bpmSelectedLow, setBpmSelectedLow,
            bpmSelectedHigh, setBpmSelectedHigh,
            danceabilitySelectedLow, setDanceabilitySelectedLow,
            danceabilitySelectedHigh, setDanceabilitySelectedHigh,
            moodSelected, setMoodSelected,
            keySelected, setKeySelected,
            instrumentSelected, setInstrumentSelected,
            textSelected, setTextSelected,
            showSelected, setShowSelected,

            timbreSelected, setTimbreSelected,
            scaleSelected, setScaleSelected,
            colorSelected, setColorSelected,

            harmonicitySelectedLow, setHarmonicitySelectedLow,
            harmonicitySelectedHigh, setHarmonicitySelectedHigh,
            dynamicSelectedLow, setDynamicSelectedLow,
            dynamicSelectedHigh, setDynamicSelectedHigh,
        }}>
            {children}
        </SlidersContext.Provider>
    );
};

export function useSliders() {
    return React.useContext(SlidersContext)
}