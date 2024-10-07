import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState} from "react";
import { useNumSpheres } from "../../contexts/basicSphereProperties/numSpheresContext/NumSpheresContext";
import { useOptions } from "../../contexts/levaControls/axisControls/OptionsContext";
import { useSliders } from "../../contexts/levaControls/filtersControls/SlidersContext";
import SphereLabels from '../labels/SphereLabels';
import SphereDataGenerator from "./SphereDataGenerator";
import CalculatePosition from "./CalculatePosition";
import { useVisibility } from "../../utils/VisibilityFunction";
import { useColorsDropbox } from "../../contexts/levaControls/colorDropbox/LevaColorDropboxContext";
import { handlePointerOut, handlePointerOver, modifiedHandleLeftClick} from "../../SphereEventHandlers";
import LabelsState from "../../contexts/labelsContext/LabelsState";
import SentDataPopup from "../../SentDataPopup";
import { calculateColorFromFeature } from "./CalculateColorFromFeature";
import { useLabels } from "../../contexts/labelsContext/LabelsContext";

function SpheresStart() {
    const {
        bpmSelectedLow, bpmSelectedHigh,
        danceabilitySelectedLow, danceabilitySelectedHigh,
        moodSelected, keySelected, instrumentSelected,
        timbreSelected, scaleSelected, colorSelected,
        harmonicitySelectedLow, harmonicitySelectedHigh,
        dynamicSelectedLow, dynamicSelectedHigh,
        showSelected, textSelected,

    } = useSliders();

    const filters = {
        bpmSelectedLow, bpmSelectedHigh,
        danceabilitySelectedLow, danceabilitySelectedHigh,
        moodSelected, keySelected, instrumentSelected,
        timbreSelected, scaleSelected, colorSelected,
        harmonicitySelectedLow, harmonicitySelectedHigh,
        dynamicSelectedLow, dynamicSelectedHigh, showSelected, textSelected
    };


    const { numSpheres, sphereSize, sphereSegments } = useNumSpheres();
    const { selectedOptionX, selectedOptionY, selectedOptionZ } = useOptions();
    const sphereData = SphereDataGenerator();
    const meshRef = useRef([]);
    const labelRef = useRef([]);
    const sphereGeometry = new THREE.SphereGeometry(sphereSize, sphereSegments, sphereSegments);
    const { labelVisibility, setLabelVisibility } = LabelsState();
    const calculatePosition = CalculatePosition({ selectedOptionX, selectedOptionY, selectedOptionZ, sphereData });
    const visibility = useVisibility();
    const { colors } = useColorsDropbox();
    const [scaleFactor, setScaleFactor] = useState(new Array(numSpheres).fill(1));
    const [feedbackVisible, setFeedbackVisible] = useState(false); // New state for feedback visibility


    useEffect(() => {

        if (!meshRef.current) {
            console.warn('InstancedMesh ref is not assigned.');
            return;
        }
        sphereData.forEach((_, instanceId) => {
            const isVisible = visibility(sphereData[instanceId]);
            const [positionX, positionY, positionZ] = calculatePosition(instanceId);
            const scale = isVisible ? scaleFactor[instanceId] : 0;
            const matrix = new THREE.Matrix4().compose(
                new THREE.Vector3(positionX, positionY, positionZ),
                new THREE.Quaternion(),
                new THREE.Vector3(scale, scale, scale)
            );

                meshRef.current.setMatrixAt(instanceId, matrix);
                meshRef.current.setColorAt(instanceId, colors[instanceId]);

        });

            meshRef.current.instanceMatrix.needsUpdate = true;
            meshRef.current.instanceColor.needsUpdate = true;
            meshRef.current.material.needsUpdate = true;

    }, [sphereData, filters, colors]);


    return (
        <>
            <instancedMesh
                ref={meshRef} args={[null, null, numSpheres]} geometry={sphereGeometry}
                onPointerOver={(e) => handlePointerOver(e.instanceId, scaleFactor, setScaleFactor, setLabelVisibility)}
                onPointerOut={(e) => handlePointerOut(e.instanceId, numSpheres, setScaleFactor, setLabelVisibility)}
                onClick={(e) => modifiedHandleLeftClick(e.instanceId, sphereData, setFeedbackVisible)}

            >
                <meshBasicMaterial />
                <SphereLabels
                    meshRef={meshRef}
                    labelRef={labelRef}
                    selectedOptionX={selectedOptionX}
                    selectedOptionY={selectedOptionY}
                    selectedOptionZ={selectedOptionZ}
                    showSelected={showSelected}
                    labelVisibility={labelVisibility} />
            </instancedMesh>

            {feedbackVisible && <SentDataPopup />}

        </>
    );
}

export default SpheresStart;

// LATEST SPHERES RENDERING
/*   useEffect(() => {
       const updatedLabelVisibility = sphereData.map((_, instanceId) => {
           const isVisible = visibility(sphereData[instanceId], filters);
           updateSphere(instanceId, isVisible);
           return isVisible;
       });

       setLabelVisibility(updatedLabelVisibility);

       if (meshRef.current) {
           meshRef.current.instanceMatrix.needsUpdate = true;
           meshRef.current.instanceColor.needsUpdate = true;
       }
   }, [sphereData, scaleFactor, colors, visibility]);

   const updateSphere = (instanceId, isVisible) => {
       const [positionX, positionY, positionZ] = calculatePosition(instanceId);
       const scale = isVisible ? scaleFactor[instanceId] : 0;
       const matrix = new THREE.Matrix4().compose(
           new THREE.Vector3(positionX, positionY, positionZ),
           new THREE.Quaternion(),
           new THREE.Vector3(scale, scale, scale)
       );

       meshRef.current.setMatrixAt(instanceId, matrix);
       meshRef.current.setColorAt(instanceId, colors[instanceId]);
   };*/


// OG SPHERES
/*useEffect(() => {
        for (let instanceId = 0; instanceId < numSpheres; instanceId++) {
            const sphere = sphereData[instanceId];
            const isVisible = visibility(sphere, filters);
            const [positionX, positionY, positionZ] = calculatePosition(instanceId);
            const scale = isVisible ? scaleFactor[instanceId] : 0;
            const matrix = new THREE.Matrix4().compose(
                new THREE.Vector3(positionX, positionY, positionZ),
                new THREE.Quaternion(),
                new THREE.Vector3(scale, scale, scale)
            );

            if (meshRef.current) {
                meshRef.current.setMatrixAt(instanceId, matrix);
                meshRef.current.setColorAt(instanceId, colors[instanceId]);
            }
        }

        if (meshRef.current) {
            meshRef.current.instanceMatrix.needsUpdate = true;
            meshRef.current.instanceColor.needsUpdate = true;
        }
    }, [numSpheres, scaleFactor, sphereData, calculatePosition, visibility, colors]);*/

// IMPROVED SPHERES
/*    useEffect(() => {
        sphereData.forEach((_, instanceId) => {
            const isVisible = visibility(sphereData[instanceId], filters);
            const [positionX, positionY, positionZ] = calculatePosition(instanceId);
            const scale = isVisible ? scaleFactor[instanceId] : 0;
            const matrix = new THREE.Matrix4().compose(
                new THREE.Vector3(positionX, positionY, positionZ),
                new THREE.Quaternion(),
                new THREE.Vector3(scale, scale, scale)
            );


                meshRef.current.setMatrixAt(instanceId, matrix);
                meshRef.current.setColorAt(instanceId, colors[instanceId]);

        });

            meshRef.current.instanceMatrix.needsUpdate = true;
            meshRef.current.instanceColor.needsUpdate = true;

    }, [sphereData, filters, scaleFactor, calculatePosition, colors]);*/

/*    const updateSphere = useCallback((instanceId) => {
        const sphere = sphereData[instanceId];
        const isVisible = visibility(sphere, filters);
        const [positionX, positionY, positionZ] = calculatePosition(instanceId);
        const scale = isVisible ? scaleFactor[instanceId] : 0;
        const matrix = new THREE.Matrix4().compose(
            new THREE.Vector3(positionX, positionY, positionZ),
            new THREE.Quaternion(),
            new THREE.Vector3(scale, scale, scale)
        );
        meshRef.current.setMatrixAt(instanceId, matrix);
        meshRef.current.setColorAt(instanceId, colors[instanceId]);
        return isVisible;
    }, [sphereData, filters, scaleFactor, calculatePosition, visibility, colors]);

    useEffect(() => {
        const newLabelVisibility = sphereData.map((_, instanceId) => updateSphere(instanceId));
        setLabelVisibility(newLabelVisibility);
        if (meshRef.current) {
            meshRef.current.instanceMatrix.needsUpdate = true;
            meshRef.current.instanceColor.needsUpdate = true;
        }
        console.log("sphere update")
    }, [numSpheres, scaleFactor, sphereData, updateSphere]);*/
