import React, {createContext, useCallback, useMemo, useRef, useState} from 'react';
import { useNumSpheres } from "../../contexts/basicSphereProperties/numSpheresContext/NumSpheresContext";
import {useLabels} from "../../contexts/labelsContext/LabelsContext";

const SpherePropertiesContext = createContext();

export function SpherePropertiesProvider({ children }) {

    const { MoodChoicesLabels, InstrumentChoicesLabels, KeyChoicesLabels } = useLabels();
    const numSpheres = useNumSpheres()

    // SLIDERS TYPE

    const getBpm = useMemo(() => {
        const min = 20;
        const max = 200;
        return (i) => Math.floor(Math.random() * (max - min + 1) + min);
    }, []);

    const getDanceability = useMemo(() => {
        const min = 0;
        const max = 100;
        return (i) => Math.floor(Math.random() * (max - min + 1) + min);
    }, []);





    // WINDOW TYPE

    const getMood = useMemo(() => {
        const moods = MoodChoicesLabels;
        return (i) => {
            // Generate a random index from 1 to moods.length - 1
            const randomIndex = Math.floor(Math.random() * (moods.length - 1)) + 1;
            return moods[randomIndex];
        };
    }, [MoodChoicesLabels]);

    const getKey = useMemo(() => {

        const key = KeyChoicesLabels
        return (i) => {
            const randomIndex = Math.floor(Math.random() * (key.length - 1)) + 1;
            return key[randomIndex];
        };
    }, [KeyChoicesLabels]);

    const getInstrument = useMemo(() => {

        const instrumental = InstrumentChoicesLabels;
        return (i) => {
            const randomIndex = Math.floor(Math.random() * (instrumental.length - 1)) + 1;
            return instrumental[randomIndex];
        };
    }, [InstrumentChoicesLabels]);

    // const getIndex = useCallback((i) => i, []);
    const getIndex = useMemo(() => (i) => i, []);


/*    const getName = useMemo(() => {
        const getPropertyValue = (getProperty) => {
            const property = getProperty;
            return typeof property === 'string' ? property : '';
        };

        return (i, getIndex, getInstrument, getKey) => {
            const output1 = getPropertyValue(getIndex(i).toString());
            const output2 = getPropertyValue(getInstrument(i));
            const output3 = getPropertyValue(getKey(i));
            return `${output1} ${output2} ${output3}`.trim();
        };
    }, []);*/







    // Render the children with the sphereData as a prop
    return (
        <SpherePropertiesContext.Provider
            value={{
                getBpm,
                getMood,
                getDanceability,
                getInstrument,
                getKey,
                getIndex,
            }}
        >
            {children}
        </SpherePropertiesContext.Provider>
    );
}


export function useSpheresProperties(){
    return React.useContext(SpherePropertiesContext)
}