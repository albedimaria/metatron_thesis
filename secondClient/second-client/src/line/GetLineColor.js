import LabelDataExtractor from "../data/label extractor/LabelDataExtractor";
import { useData } from "../data/backendData/DataContext";

// Function to determine the line color based on the colorKnob value
export const GetLineColor = (colorKnob) => {

    const { explanation } = useData();

    const {
        colorsClassesAvailable
    } = LabelDataExtractor({ explanation });

    if (colorKnob === 0) {
        return 'white';
    }

    // Ensure colorKnob is between 0 and 100
    const clampedValue = Math.max(0, Math.min(colorKnob, 100));

    // Calculate the index for the color based on the number of available colors
    const colorIndex = Math.floor((clampedValue / 100) * (colorsClassesAvailable.length - 1));

    // Return the color from the available colors
    return colorsClassesAvailable[colorIndex];
};

 // Get the current line color based on knob value