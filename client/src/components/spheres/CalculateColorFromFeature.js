import {colorToHex} from "../../contexts/levaControls/colorDropbox/ColorToHex";
import * as THREE from "three";
import {labelIndexFinder} from "../../contexts/labelsContext/LabelsIndexFinder";

export const calculateColorFromFeature = (feature, sphere, index, labelsData) => {

    switch (feature) {
        case 'mood':
            const hexColorMood = colorToHex(sphere.color); // Assuming sphere.color is a valid color name
            return new THREE.Color(hexColorMood);

        case 'instrument':
            const fromInstrument = labelIndexFinder(labelsData.InstrumentChoicesLabels, sphere.instrument);
            return new THREE.Color().setHSL(fromInstrument / labelsData.InstrumentChoicesLabels.length, 1, 0.5);

        case 'key':
            const fromKey = labelIndexFinder(labelsData.KeyChoicesLabels, sphere.key);
            return new THREE.Color().setHSL(fromKey / labelsData.KeyChoicesLabels.length, 1, 0.5);

        case 'bpm':
            const MAX_BPM = 200; // Assuming a max BPM value
            const fromBPM = sphere.bpm;
            return new THREE.Color().setHSL(fromBPM / MAX_BPM, 1, 0.5);

        case 'danceability':
            const MAX_DANCEABILITY = 100; // Assuming a max danceability value
            const fromDanceability = sphere.danceability;
            return new THREE.Color().setHSL(fromDanceability / MAX_DANCEABILITY, 1, 0.5);

        case 'timbre':
            const fromTimbre = labelIndexFinder(labelsData.TimbreChoicesLabels, sphere.timbre);
            return new THREE.Color().setHSL(fromTimbre / labelsData.TimbreChoicesLabels.length, 1, 0.5);

        case 'scale':
            const fromScale = labelIndexFinder(labelsData.ScaleChoicesLabels, sphere.scale);
            return new THREE.Color().setHSL(fromScale / labelsData.ScaleChoicesLabels.length, 1, 0.5);

        case 'dynamicity':
            const MAX_DYNAMICS = 1; // Assuming a max dynamics value
            const fromDynamics = sphere.dynamicity;
            return new THREE.Color().setHSL(fromDynamics / MAX_DYNAMICS, 1, 0.5);

        case 'harmonicity':
            const MAX_HARMONICITY = 100; // Assuming a max harmonicity value
            const fromHarmonicity = sphere.harmonicity;
            return new THREE.Color().setHSL(fromHarmonicity / MAX_HARMONICITY, 1, 0.5);

        default:
            return new THREE.Color(0xfefefe); // Default color
    }
};