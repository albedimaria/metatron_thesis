import * as THREE from 'three'
import {Html, MeshReflectorMaterial, useHelper, useKeyboardControls} from '@react-three/drei'
import '../../rootStyle/style.css'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useLabels} from "../../contexts/labelsContext/LabelsContext";
import {useOptions, useOptionsX} from "../../contexts/levaControls/axisControls/OptionsContext";
import {useLevaView} from "../../contexts/levaControls/viewsControls/viewsContext";


THREE.ColorManagement.legacyMode = false

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#181c20'})



function PlaneStart() {
    const heightPlane = 0.2;
    const planeRef = useRef();
    const axisRefs = useRef([]);

    const { selectedOptionX, selectedOptionY, selectedOptionZ } = useOptions()
    const {
        BPM_label, Key_label, Color_label, Timbre_label,
        Scale_label, Harmonicity_label, Dynamics_label,
        Instrument_label, Mood_label, Danceability_label
    } = useLabels()

    const { distanceFactor } = useLevaView()
    const [effectiveDistanceFactor, setEffectiveDistanceFactor] = useState(distanceFactor); // Initialize with default value

    useEffect(() => {
        if (distanceFactor) {
            setEffectiveDistanceFactor(distanceFactor);
        }
    }, [distanceFactor]);

    // useMemo for computed values
    const scalingFactor = useMemo(() => ({ x: 60, y: heightPlane / 2, z: 30 }), [heightPlane]);

    const getLabelText = useCallback((option) => {
        const labelMappings = {
            'bpm': BPM_label,
            'mood': Mood_label,
            'danceability': Danceability_label,
            'key': Key_label,
            'instrument': Instrument_label,
            'color': Color_label,
            'timbre': Timbre_label,
            'scale': Scale_label,
            'harmonicity': Harmonicity_label,
            'dynamicity': Dynamics_label
        };
        return labelMappings[option] || '';
    }, [BPM_label, Mood_label, Danceability_label, Key_label, Instrument_label, Color_label, Timbre_label, Scale_label, Harmonicity_label, Dynamics_label]);


    const labelX = useMemo(() => getLabelText(selectedOptionX), [selectedOptionX, getLabelText]);
    const labelY = useMemo(() => getLabelText(selectedOptionY), [selectedOptionY, getLabelText]);
    const labelZ = useMemo(() => getLabelText(selectedOptionZ), [selectedOptionZ, getLabelText]);


    return (
        <>
            <group>
                <mesh
                    ref={ planeRef }
                    geometry={ boxGeometry }
                    material={ boxMaterial }
                    scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
                    position={[scalingFactor.x / 2, -heightPlane / 4, 0]}
                />
            </group>

            <axesHelper scale={[scalingFactor.x, scalingFactor.x / 3, scalingFactor.z]} position={[0, 0, -scalingFactor.z / 2]} />

            <group>
                <Html position={[- 3, 1.5, 0]}
                      wrapperClass="label" center distanceFactor={effectiveDistanceFactor + 5} occlude={[planeRef, axisRefs.current[0]]}            >
                    { labelZ }
                </Html>

                <Html position={[0, scalingFactor.x / 2.7, -scalingFactor.z / 2]}
                      wrapperClass="label" center distanceFactor={effectiveDistanceFactor + 15} occlude={[planeRef, axisRefs.current[1]]}>
                    { labelY }
                </Html>

                <Html position={[scalingFactor.x / 2, 1.5, scalingFactor.x / 3 - 2]}
                      wrapperClass="label" center distanceFactor={effectiveDistanceFactor - 10} occlude={[planeRef, axisRefs.current[2]]}>
                    { labelX }
                </Html>
            </group>


{/*
            <gridHelper args={[scalingFactor.x, scalingFactor.x / 3, scalingFactor.z]} position={[scalingFactor.x / 2, 0, -scalingFactor.z / 2 - 1]} />
*/}
        </>
    );
}



export default function Plane()
{
    return <>
        <PlaneStart/>
    </>
}