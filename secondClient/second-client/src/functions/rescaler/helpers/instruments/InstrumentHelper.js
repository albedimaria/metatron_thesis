export const instrumentRangeMapping = {
    "acousticguitar": [0, 2], "classicalguitar": [3, 5], "guitar": [6, 8],
    "harp": [9, 11], "cello": [12, 14], "viola": [15, 17], "violin": [18, 20],
    "flute": [21, 23], "oboe": [24, 26], "clarinet": [27, 29], "saxophone": [30, 32],
    "trumpet": [33, 35], "trombone": [36, 38], "horn": [39, 41], "brass": [42, 44],
    "accordion": [45, 47], "organ": [48, 50], "piano": [51, 53], "electricpiano": [54, 56],
    "synthesizer": [57, 59], "keyboard": [60, 62], "drummachine": [63, 65], "computer": [66, 68],
    "drums": [69, 71], "percussion": [72, 74], "bongo": [75, 77], "bell": [78, 80],
    "harmonica": [81, 83], "bass": [84, 86], "acousticbassguitar": [87, 89], "doublebass": [90, 92],
    "electricguitar": [93, 95], "rhodes": [96, 98], "sampler": [99, 100]
};


export const getInstrumentValue = (instrumentLabel) => {
    // Default neutral value for instrument
    const DEFAULT_INSTRUMENT_VALUE = 0; // Example value, adjust as needed

    // Check for the initial or undefined state
    if (!instrumentLabel || typeof instrumentLabel !== 'string' || instrumentLabel === '...') {
        return DEFAULT_INSTRUMENT_VALUE;
    }

    const instrumentRange = instrumentRangeMapping[instrumentLabel.toLowerCase()];
    if (instrumentRange) {
        const midpoint = (instrumentRange[0] + instrumentRange[1]) / 2;
        return midpoint;
    } else {
        console.error("Instrument not found:", instrumentLabel);
        return DEFAULT_INSTRUMENT_VALUE;
    }
};
