import React, {createContext, useEffect, useMemo, useState} from "react";
import {folder, useControls} from "leva";
import {useData} from "../../data/backendData/DataContext";
import LabelDataExtractor from "../../data/label extractor/LabelDataExtractor";
import {useVariables} from "../../context/VariablesContext";


const GeomControlsContext = createContext()

export const GeomControlsProvider = ({ children }) => {
    const { explanation } = useData();
    const {
        moodClassesAvailable,
        instrumentClassesAvailable,
        keyClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable,
        timbreClassesAvailable,
    } = LabelDataExtractor({ explanation });

    const {
        tempoGeomNew,
        danceGeomNew,
        moodGeomNew,
        instrGeomNew,
        keyGeomNew,
        scaleGeomNew,
        colorGeomNew,

        timbreGeomNew,
        setTimbreGeomNew,
        harmonicityGeomNew,
        setHarmonicityGeomNew,
        dynamicsGeomNew,
        setDynamicsGeomNew,

        setTempoGeomNew,
        setDanceGeomNew,
        setMoodGeomNew,
        setInstrGeomNew,
        setScaleGeomNew,
        setColorGeomNew,
        setKeyGeomNew,


    } = useVariables();



    const [, set] = useControls('geometries', () => ({
        'knobs': folder({
            f1: {
                value: tempoGeomNew,
                min: 20,
                max: 200,
                step: 1,
                label: "bpm",
                onChange: (value) => setTempoGeomNew(value),
            },


            f2: {
                value: danceGeomNew,
                min: 0,
                max: 100,
                step: 1,
                label: "danceability",
                onChange: (value) => setDanceGeomNew(value),
            },

            f3: {
                options: moodClassesAvailable,
                value: moodGeomNew,
                label: "mood",
                onChange: (value) => setMoodGeomNew(value),
            },

            f4: {
                options: instrumentClassesAvailable,
                value: instrGeomNew,
                label: "instrument",
                onChange: (value) => setInstrGeomNew(value),
            },

            f5: {
                options: keyClassesAvailable,
                value: keyGeomNew,
                label: "key",
                onChange: (value) => setKeyGeomNew(value),
            },

            f6: {
                options: scaleClassesAvailable,
                value: scaleGeomNew,
                label: "scale",
                onChange: (value) => setScaleGeomNew(value),
            },

            f7: {
                options: colorsClassesAvailable,
                value: colorGeomNew,
                label: "color",
                onChange: (value) => setColorGeomNew(value),
            },

            f8: {
                options: timbreClassesAvailable,
                value: timbreGeomNew,
                label: "timbre",
                onChange: (value) => setTimbreGeomNew(value),
            },

            f9: {
                value: harmonicityGeomNew,
                min: 0,
                max: 100,
                label: "harmonicity",
                onChange: (value) => setHarmonicityGeomNew(value),
            },

            f10: {
                value: dynamicsGeomNew,
                min: 0,
                max: 100,
                label: "dynamics",
                onChange: (value) => setDynamicsGeomNew(value)
            },





        }),

    }));

    // console.log(tempoGeomNew)



    return <>
        <GeomControlsContext.Provider value={{
            tempoGeomNew,
            danceGeomNew,
            moodGeomNew,
            instrGeomNew,
            keyGeomNew,
            scaleGeomNew,
            colorGeomNew,

            timbreGeomNew,
            harmonicityGeomNew,
            dynamicsGeomNew
        }}>
            {children}
        </GeomControlsContext.Provider>
    </>


}

export function useGeomControls() {
    return React.useContext(GeomControlsContext)
}

