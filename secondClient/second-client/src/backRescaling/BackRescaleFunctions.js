import {moodMapping} from "../functions/rescaler/helpers/mood/MoodHelper";
import {instrumentRangeMapping} from "../functions/rescaler/helpers/instruments/InstrumentHelper";

export function reverseRescaleValue(value, minRescaled, maxRescaled, minOriginal, maxOriginal) {
    return ((value - minRescaled) / (maxRescaled - minRescaled)) * (maxOriginal - minOriginal) + minOriginal;
}

export function findLabelByValue(value, classesAvailable) {
    const index = Math.round(value / 100 * (classesAvailable.length - 1));
    return classesAvailable[index];
}


export const reverseMoodValue = (moodValue) => {
    for (const [label, range] of Object.entries(moodMapping)) {
        if (moodValue >= range[0] && moodValue <= range[1]) {
            return label;
        }
    }
    return ""; // Return an empty string or a default value if no match is found
};

export const reverseInstrumentValue = (instrumentValue) => {
    for (const [label, range] of Object.entries(instrumentRangeMapping)) {
        if (instrumentValue >= range[0] && instrumentValue <= range[1]) {
            return label;
        }
    }
    return ""; // Return an empty string or a default value if no match is found
};

