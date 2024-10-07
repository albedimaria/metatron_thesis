import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import getNameToShow from "../../contexts/labelsContext/ChangingNameFunction";
import SphereDataGenerator from "../spheres/SphereDataGenerator";
import { getLabelContent } from "./LabelsFromAxisFunction";
import { useColorsDropbox } from "../../contexts/levaControls/colorDropbox/LevaColorDropboxContext";

const SphereLabels = ({
                          meshRef,
                          labelRef,
                          selectedOptionX,
                          selectedOptionY,
                          selectedOptionZ,
                          showSelected,
                          labelVisibility,
                      }) => {

    const sphereData = SphereDataGenerator();
    // const { colors } = useColorsDropbox();

    const visibleSpheres = sphereData.filter((_, instanceId) => labelVisibility[instanceId]);

    return visibleSpheres.length > 0 ? visibleSpheres.map((sphere, instanceId) => {
        const positionLabels = [30, 25, 0]; // Replace with dynamic position calculation if needed

        const featureContent = (
            <>
                {getLabelContent(selectedOptionX, sphere)} <br />
                {getLabelContent(selectedOptionY, sphere)} <br />
                {getLabelContent(selectedOptionZ, sphere)} <br />
            </>
        );

      /*  const colorObject = colors[instanceId];
        const r = colorObject.r;
        const g = colorObject.g;
        const b = colorObject.b;

        const labelColor = `rgba(${(r * 255).toFixed(2)}, ${(g * 255).toFixed(2)}, ${(b * 255).toFixed(2)}, 0.3)`;
*/

        const labelsStyle = {
            color: "white",
            backgroundColor: "#181c20",
            fontFamily: "Helvetica, Arial",
            position: "absolute",
            padding: "15px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRadius: "8px",
            userSelect: "none",
            lineHeight: "1.5",  // Adjust this value as needed

        };

        return (
            <group key={instanceId}>
                <Html
                    position={positionLabels}
                    style={labelsStyle}
                    center
                    distanceFactor={32}
                    occlude={[meshRef, ...labelRef.current]}
                    ref={(ref) => (labelRef.current[instanceId] = ref)}
                >
                    {getNameToShow(sphere, featureContent, showSelected)}
                </Html>
            </group>
        );
    }) : null;
};

export default SphereLabels;




/*import React, {useState} from 'react';
import { Html } from '@react-three/drei';
import { useVisibility } from "../../utils/VisibilityFunction";
import getNameToShow from "../../contexts/labelsContext/ChangingNameFunction";
import SphereDataGenerator from "../spheres/SphereDataGenerator";
import { getLabelContent } from "./LabelsFromAxisFunction";
import {useColorsDropbox} from "../../contexts/levaControls/colorDropbox/LevaColorDropboxContext";*/

/*const SphereLabels = ({
                          meshRef,
                          labelRef,
                          selectedOptionX,
                          selectedOptionY,
                          selectedOptionZ,
                          showSelected,
                          labelVisibility,
                      }) => {

    const sphereData = SphereDataGenerator();
    const { colors } = useColorsDropbox()
    // console.log(colors)


    return labelVisibility
        ? Array.from({ length: sphereData.length }, (_, instanceId) => {

            const positionOpt = calculatePosition(instanceId);

        /!*    const positionLabels = [
                positionOpt[0],
                positionOpt[1] + sphereSize * multiplying + additional,
                positionOpt[2],
            ];*!/

            const positionLabels = [30, 25, 0]
            const featureContent = (
                <>
                    {getLabelContent(selectedOptionX, sphereData[instanceId])} <br />
                    {getLabelContent(selectedOptionY, sphereData[instanceId])} <br />
                    {getLabelContent(selectedOptionZ, sphereData[instanceId])} <br />
                </>
            );

            // Extract RGB components from the Color object
            const colorObject = colors[instanceId];
            const r = colorObject.r;
            const g = colorObject.g;
            const b = colorObject.b;

            // Convert RGB components to an RGB or RGBA CSS color string
            const labelColor = `rgba(${(r * 255).toFixed(2)}, ${(g * 255).toFixed(2)}, ${(b * 255).toFixed(2)}, 0.3)`;

            const labelsStyle = {
                color: "white", // Use the CSS color string
                backgroundColor: labelColor,
                fontFamily: "Helvetica, Arial",
                position: "absolute",
                padding: "15px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRadius: "8px",
                userSelect: "none",
            }

            return (
                    labelVisibility[instanceId] && ( // Check visibility using the hook

                    <group key={instanceId}>
                        <Html
                            position={positionLabels}
                            // wrapperClass="label"
                            style={labelsStyle}
                            center
                            distanceFactor={30}
                            occlude={[meshRef, ...labelRef.current]}
                            ref={(ref) => (labelRef.current[instanceId] = ref)}
                        >
                            {getNameToShow(sphereData[instanceId], featureContent, showSelected)}

                        </Html>
                    </group>
                )
            );
        })
        : null;
};


export default SphereLabels;*/
