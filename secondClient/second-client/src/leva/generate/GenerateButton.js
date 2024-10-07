import React, { useRef, useEffect } from 'react';
import { useControls, button, folder } from 'leva';
import { socket } from "../../socket/Socket";
import { useSampleToGenerate } from "../../context/SampleToGenerate";

const GenerateButton = () => {
    const { sampleData } = useSampleToGenerate();
    const sampleDataRef = useRef(sampleData); // Create a ref to hold the latest sampleData

    // Update the ref whenever sampleData changes
    useEffect(() => {
        sampleDataRef.current = sampleData;
    }, [sampleData]);

    const handleGenerateSample = () => {
        // Use the current value of the ref
        const currentSampleData = sampleDataRef.current;
        if (currentSampleData) {
            sendDataToBackend(currentSampleData);
            // window.location.reload(); // Reload the page after sending the data
        } else {
            console.log("No data available to send");
        }
    };

    useControls('backend connection', () => ({
        'generate new sample': folder({
            'generate': button(handleGenerateSample),
                "info:": {
                    value: "one click for new music",
                    editable: false
                },
        },
            {
            collapsed: false,
            oneLineLabels: true
        }),
    }));

    return null; // This component doesn't render anything
};

function sendDataToBackend(sampleData) {
    socket.emit('client2_to_server', sampleData);
    console.log("Data sent to backend:", sampleData);
}

export default GenerateButton;
