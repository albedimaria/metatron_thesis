import {useKnobsValues} from "../../context/KnobContext";

const GeometriesRanges = () => {
    const { knobValues } = useKnobsValues();
    const { bpmKnob, danceKnob, moodKnob } = knobValues;

    // Cube ranges
    const cubeBPMRange = bpmKnob >= 0 && bpmKnob <= 20;
    const cubeDanceRange = danceKnob >= 0 && danceKnob <= 20;
    const cubeMoodRange = moodKnob >= 0 && moodKnob <= 20;

    // Dodecahedron ranges
    const dodecahedronBPMRange = bpmKnob >= 20 && bpmKnob <= 40;
    const dodecahedronDanceRange = danceKnob >= 20 && danceKnob <= 40;
    const dodecahedronMoodRange = moodKnob >= 20 && moodKnob <= 40;

    // Octahedron ranges
    const octahedronBPMRange = bpmKnob >= 40 && bpmKnob <= 60;
    const octahedronDanceRange = danceKnob >= 40 && danceKnob <= 60;
    const octahedronMoodRange = moodKnob >= 40 && moodKnob <= 60;

    // Tetrahedron ranges
    const tetrahedronBPMRange = bpmKnob >= 60 && bpmKnob <= 80;
    const tetrahedronDanceRange = danceKnob >= 60 && danceKnob <= 80;
    const tetrahedronMoodRange = moodKnob >= 60 && moodKnob <= 80;

    // Icosahedron ranges
    const icosahedronBPMRange = bpmKnob >= 80 && bpmKnob <= 100;
    const icosahedronDanceRange = danceKnob >= 80 && danceKnob <= 100;
    const icosahedronMoodRange = moodKnob >= 80 && moodKnob <= 100;

    return {
        cubeBPMRange, cubeDanceRange, cubeMoodRange,
        dodecahedronBPMRange, dodecahedronDanceRange, dodecahedronMoodRange,
        octahedronBPMRange, octahedronDanceRange, octahedronMoodRange,
        tetrahedronBPMRange, tetrahedronDanceRange, tetrahedronMoodRange,
        icosahedronBPMRange, icosahedronDanceRange, icosahedronMoodRange
    };
};

export default GeometriesRanges;

