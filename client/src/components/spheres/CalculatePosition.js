import { useCallback } from 'react';
import LabelsDataExtractor from "../../contexts/labelsContext/LabelDataExtractor";
import { useData } from "../../contexts/dataFromBackend/DataContext";
import { labelIndexFinder } from "../../contexts/labelsContext/LabelsIndexFinder";

function CalculatePosition({
                               selectedOptionX,
                               selectedOptionY,
                               selectedOptionZ,
                               sphereData
                           }) {

    const { explanation } = useData()

    const {
        moodClassesAvailable,
        instrumentClassesAvailable,
        keyClassesAvailable,
        timbreClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable
    } =
        LabelsDataExtractor({ explanation });

    function spaceMapping(value, min, max, newMin, newMax) {
        return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
    }

    // PLANE: X = 60, Y = NA Z = 25


    const calculatePosition = useCallback(
        (instanceId) => {
            const optionCalculations = {

                bpm: (i) => spaceMapping(sphereData[i].bpm, 20, 200, 0, 60),
                danceability: (i) => spaceMapping(sphereData[i].danceability, 0, 100, 0, 60),
                // key: (i) => spaceMapping(labelIndexFinder(keyClassesAvailable, sphereData[i].key), 0, keyClassesAvailable.length - 1, 10, 60),
                scale: (i) => spaceMapping(labelIndexFinder(scaleClassesAvailable, sphereData[i].scale), 0, scaleClassesAvailable.length - 1, 10,   50),
                key: (i) => {
                    const keyValue = labelIndexFinder(keyClassesAvailable, sphereData[i].key);
                    const mappedValue = spaceMapping(keyValue, 0, keyClassesAvailable.length - 1, 10, 60);
                    console.log(`Mapping key: input value=${keyValue}, mapped value=${mappedValue}`);
                    return mappedValue;
                },
                mood: (i) => spaceMapping(labelIndexFinder(moodClassesAvailable, sphereData[i].mood), 0, moodClassesAvailable.length - 1 , 10, 20 ),
                color: (i) => spaceMapping(labelIndexFinder(colorsClassesAvailable, sphereData[i].color), 0, colorsClassesAvailable.length - 1, 10, 20),
                timbre: (i) => spaceMapping(labelIndexFinder(timbreClassesAvailable, sphereData[i].timbre), 0, timbreClassesAvailable.length - 1, 10, 20 ),

                instrument: (i) => spaceMapping(labelIndexFinder(instrumentClassesAvailable, sphereData[i].instrument), 0, instrumentClassesAvailable.length - 1, -15, 15),
                dynamicity:  (i) => spaceMapping(sphereData[i].dynamicity, 0, 1, -15, 15 ),
                harmonicity: (i) => spaceMapping(sphereData[i].harmonicity, 0, 100, -15, 12)
            };
            // Apply selected position calculations based on options
            const positionX = optionCalculations[selectedOptionX]?.(instanceId) || 0;
            const positionY = optionCalculations[selectedOptionY]?.(instanceId) || 1;
            const positionZ = optionCalculations[selectedOptionZ]?.(instanceId) || 0;
            return [positionX, positionY, positionZ];
        },
        [selectedOptionX, selectedOptionY, selectedOptionZ, sphereData]
    );

    return calculatePosition;
}

export default CalculatePosition;
