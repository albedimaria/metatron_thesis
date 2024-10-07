// SphereEventHandlers.js

// Logic for handling pointer over
import {sendDataToBackend} from "./contexts/levaControls/buuttonToBackendControls/SendToBackend";

export const handlePointerOver = (instanceId, scaleFactor, setScaleFactor, setLabelVisibility) => {
    const updatedScaleFactors = scaleFactor.map((scale, index) =>
        index === instanceId ? 1.5 : scale); // Increase scale for the hovered sphere
    setScaleFactor(updatedScaleFactors);

    setLabelVisibility(prevLabelVisibility => {
        const updatedVisibility = [...prevLabelVisibility];
        updatedVisibility[instanceId] = true; // Show label for the hovered sphere
        return updatedVisibility;
    });

    // Change cursor to pointer
    document.body.style.cursor = 'pointer';
};

// Logic for handling pointer out
export const handlePointerOut = (instanceId, numSpheres, setScaleFactor, setLabelVisibility) => {
    setScaleFactor(new Array(numSpheres).fill(1)); // Reset scale for all spheres

    setLabelVisibility(prevLabelVisibility => {
        const updatedVisibility = [...prevLabelVisibility];
        updatedVisibility[instanceId] = false; // Hide label for the sphere
        return updatedVisibility;
    });

    // Revert cursor to default
    document.body.style.cursor = 'default';
};


// handleLeftClick.js
export const handleLeftClick = (instanceId, sphereData) => {

    // Execute additional functionality if provided
    const sentSample = sphereData[instanceId];
    sendDataToBackend(sentSample);
    console.log("sent data: ", sentSample);
};

export const modifiedHandleLeftClick = (instanceId, sphereData, setFeedbackVisible) => {
    handleLeftClick(instanceId, sphereData);
    // Show feedback and hide it after X seconds
    setFeedbackVisible(true);
    setTimeout(() => setFeedbackVisible(false), 1500);
};
