import * as THREE from 'three';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import React from "react";
import { useNumSpheres } from "../../contexts/basicSphereProperties/numSpheresContext/NumSpheresContext";
import { useOptions } from "../../contexts/levaControls/axisControls/OptionsContext";
import { useSliders } from "../../contexts/levaControls/filtersControls/SlidersContext";
import SphereLabels from '../labels/SphereLabels';
import SphereDataGenerator from "./SphereDataGenerator";
import CalculatePosition from "./CalculatePosition";
import { useVisibility } from "../../utils/VisibilityFunction";
import { useColorsDropbox } from "../../contexts/levaControls/colorDropbox/LevaColorDropboxContext";
import {handlePointerOut, handlePointerOver, handleLeftClick} from "../../SphereEventHandlers";
import LabelsState from "../../contexts/labelsContext/LabelsState";


function SpheresStart() {

    const { numSpheres, sphereSize, sphereSegments } = useNumSpheres();         // SPHERES BASIC CONTROLS
    const { selectedOptionX, selectedOptionY, selectedOptionZ} = useOptions()    // AXIS CHOICE

    // ARRAY OF PROPS
    const sphereData = SphereDataGenerator();

    const meshRef = useRef([])
    const labelRef = useRef([]);
    const sphereGeometry = useMemo(() => new THREE.SphereGeometry(sphereSize, sphereSegments, sphereSegments), [sphereSize, sphereSegments]);
    const {labelVisibility, setLabelVisibility} = LabelsState()



    // POSITION OF EACH SPHERE
    const calculatePosition = CalculatePosition({
        selectedOptionX,
        selectedOptionY,
        selectedOptionZ,
        sphereData
    });

    // PARAMS OF FILTERS
    const {
        bpmSelectedLow,
        bpmSelectedHigh,
        danceabilitySelectedLow,
        danceabilitySelectedHigh,
        moodSelected,
        keySelected,
        instrumentSelected,
        textSelected,
        showSelected,

        timbreSelected,
        scaleSelected,
        colorSelected,
        harmonicitySelectedLow,
        harmonicitySelectedHigh,
        dynamicSelectedLow,
        dynamicSelectedHigh,

    } = useSliders()


    const visibility = useVisibility();

    const { colors, selectedFeature } = useColorsDropbox()

    const [scaleFactor, setScaleFactor] = useState(new Array(numSpheres).fill(1));


    // SPHERES RENDERING

    useEffect(() => {
        let newLabelVisibility = [...labelVisibility]; // Clone the current state

        for (let instanceId = 0; instanceId < numSpheres; instanceId++) {
            const sphere = sphereData[instanceId];
            // console.log(`Updating sphere ${instanceId}:`, sphere);

            const isVisible = visibility(sphere, {
                bpmSelectedLow,
                bpmSelectedHigh,
                danceabilitySelectedLow,
                danceabilitySelectedHigh,
                moodSelected,
                keySelected,
                instrumentSelected,
                textSelected,
                showSelected,

                timbreSelected,
                scaleSelected,
                colorSelected,
                harmonicitySelectedLow,
                harmonicitySelectedHigh,
                dynamicSelectedLow,
                dynamicSelectedHigh,

            });

            if (!isVisible) {
                newLabelVisibility[instanceId] = isVisible;
            }

            const [positionX, positionY, positionZ] = calculatePosition(instanceId);
            const matrix = new THREE.Matrix4();
            const scale_for_visibility = isVisible ? scaleFactor[instanceId] : 0;

            matrix.compose(
                new THREE.Vector3(positionX, positionY, positionZ),
                new THREE.Quaternion(),
                new THREE.Vector3(scale_for_visibility, scale_for_visibility, scale_for_visibility)
            );

            if (meshRef.current) {
                meshRef.current.setMatrixAt(instanceId, matrix);
                meshRef.current.setColorAt(instanceId, (colors[instanceId]));
            }
        }

        setLabelVisibility(newLabelVisibility); // Update state once after the loop

        meshRef.current.instanceMatrix.needsUpdate = true;
        meshRef.current.instanceColor.needsUpdate = true;

    }, [numSpheres, scaleFactor, selectedOptionX, selectedOptionY, selectedOptionZ, sphereData, selectedFeature,
        bpmSelectedLow,
        bpmSelectedHigh,
        textureSelectedLow,
        textureSelectedHigh,
        danceabilitySelectedLow,
        danceabilitySelectedHigh,
        moodSelected,
        keySelected,
        instrumentSelected,
        textSelected,
        showSelected,

        timbreSelected,
        scaleSelected,
        colorSelected,
        harmonicitySelectedLow,
        harmonicitySelectedHigh,
        dynamicSelectedLow,
        dynamicSelectedHigh,
    ]);





    return (
        <>
            <instancedMesh
                ref={ meshRef }
                args={[ null, null, numSpheres ]}
                geometry={ sphereGeometry }
                onPointerOver={(e) => console.log('Pointer over', e.instanceId)}

                /*
                                onPointerOver={e => handlePointerOver(e.instanceId, scaleFactor, setScaleFactor, setLabelVisibility)}
                */
                onPointerOut={e => handlePointerOut(e.instanceId, numSpheres, setScaleFactor, setLabelVisibility)}
            >
                <meshStandardMaterial/>
                <SphereLabels
                    meshRef={meshRef}
                    labelRef={labelRef}
                    selectedOptionX={selectedOptionX}
                    selectedOptionY={selectedOptionY}
                    selectedOptionZ={selectedOptionZ}
                    showSelected={showSelected}
                    labelVisibility={labelVisibility}
                />

            </instancedMesh>

        </>
    );
}

export default function Spheres() {
    return (
        <>
            <SpheresStart />
        </>
    );
}



