import {useEffect} from "react";
import GeometriesRanges from "../../mappingIfRanges/GeometriesRanges";
import MapFunctionBPM from "../../../functions/mapFunctions/bpm/MapFunctionBPM";
import MapFunctionDance from "../../../functions/mapFunctions/danceability/MapFunctionDance";
import MapFunctionMood from "../../../functions/mapFunctions/mood/MapFunctionMood";
import {useOpacities} from "../../../context/OpacityContext";
import {useKnobsValues} from "../../../context/KnobContext";

export const OctahedronSetter = () => {

    const {
        opacities
    } = useOpacities();

    const {
        setBF_opacity,
        setBD_opacity,
        setFD_opacity,
        setOctaOpacity,

    } = opacities

    const { octahedronBPMRange, octahedronDanceRange, octahedronMoodRange } = GeometriesRanges();
    const { octahedronBPM } = MapFunctionBPM();
    const { octahedronDance } = MapFunctionDance();
    const { octahedronMood } = MapFunctionMood();


    useEffect(() => {
        // Assuming cubeBPM, cubeMood, and cubeDance return an opacity value directly,
        const activeOpacity = octahedronBPMRange ? octahedronBPM
            : octahedronMoodRange ? octahedronMood
                : octahedronDanceRange ? octahedronDance
                    : 0.1; // Default opacity if none of the ranges apply

        setBF_opacity(activeOpacity);
        setBD_opacity(activeOpacity);
        setFD_opacity(activeOpacity);
        setOctaOpacity(activeOpacity)


    }, [octahedronBPM, octahedronDance, octahedronMood,]);

    return null;
};

