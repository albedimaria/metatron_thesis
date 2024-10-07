import React, { createContext, useState } from 'react';
import { Html } from '@react-three/drei';
import { Knob } from "primereact/knob";
import {useGeomControls} from "../levaControls/geomControls/GeomControlsContext";
import './controlKnobsStyle.css'
import {findLabelValue, mapValuesToLabels} from "./FromValuesToKnobs";
import {useData} from "../dataFromBackend/DataContext";
import LabelsDataExtractor from "../labelsContext/LabelDataExtractor";



const KnobsContext = createContext();

export const KnobsProvider = ({ children }) => {

    const { explanation } = useData()
    const {
        moodClassesAvailable,
        instrumentClassesAvailable,
        keyClassesAvailable,
        timbreClassesAvailable
    } =
        LabelsDataExtractor({ explanation });

    // here we take the value from each feature,
    // we set the knob and give back the new value
    const { VERTICES_LENGTH, tempoGeom, timbreGeom } = useGeomControls();
    const [tempoGeomNew, setTempoGeomNew] = useState(tempoGeom);
    const [timbreGeomNew, setTimbreGeomNew] = useState(timbreGeom);

    const tempTimbre = findLabelValue(timbreClassesAvailable, timbreGeomNew);
    const getValueToLabel = mapValuesToLabels(timbreClassesAvailable);
    const label = getValueToLabel(tempTimbre);
    console.log(label);

    const knobData = [
        { name: "tempo", position: [-25, -20, 0], value: tempoGeomNew,
            step: 0.5, valueColor: "black", rangeColor: "white",
            onChange: (tempoGeomNew) => {setTempoGeomNew(tempoGeomNew)} },

        { name: "timbre", position: [65, -20, 0], value: tempTimbre,
            step: 10, valueColor: "black", rangeColor: "white",
            onChange: (timbreGeomNew) => {
                setTimbreGeomNew(getValueToLabel(timbreGeomNew));
            },
        },
        // Add more knobs as needed
    ];


    return (
        <>
            {knobData.map(({ name, position, value, step, rangeColor, valueColor, onChange }, index) => (
                <Html key={index} position={position}>
                    <Knob
                        name={name}
                        size={100}
                        value={value}
                        step={step}
                        valueColor={valueColor}
                        rangeColor={rangeColor}
                        strokeWidth={5}
                        onChange={(e) => onChange(e.value)}
                    />


                </Html>
            ))}




            <KnobsContext.Provider value={{ tempoGeomNew, timbreGeomNew }}>
                {children}
            </KnobsContext.Provider>
        </>
    );
};

export function useKnobs() {
    return React.useContext(KnobsContext);
}


