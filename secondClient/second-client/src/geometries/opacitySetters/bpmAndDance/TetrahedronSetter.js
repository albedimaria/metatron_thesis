import {useEffect} from "react";
import GeometriesRanges from "../../mappingIfRanges/GeometriesRanges";
import MapFunctionBPM from "../../../functions/mapFunctions/bpm/MapFunctionBPM";
import MapFunctionDance from "../../../functions/mapFunctions/danceability/MapFunctionDance";
import MapFunctionMood from "../../../functions/mapFunctions/mood/MapFunctionMood";
import {useOpacities} from "../../../context/OpacityContext";

export const TetrahedronSetter = () => {
    // Access opacity setters directly from the useGeometryState hook
    const {
        opacities
    } = useOpacities();

    const {
        setFO_opacity,
        setDO_opacity,
        setBO_opacity,
        setTetraOpacity,
        setSU_opacity,
        setQS_opacity,
        setQU_opacity,
        setAE_opacity,
        setCE_opacity,
        setAC_opacity,
    } = opacities

    const { tetrahedronBPMRange, tetrahedronDanceRange, tetrahedronMoodRange } = GeometriesRanges();
    const { tetrahedronBPM } = MapFunctionBPM();
    const { tetrahedronDance } = MapFunctionDance();
    const { tetrahedronMood } = MapFunctionMood();

    useEffect(() => {
        // Assuming cubeBPM, cubeMood, and cubeDance return an opacity value directly,
        const activeOpacity = tetrahedronBPMRange ? tetrahedronBPM
            : tetrahedronMoodRange ? tetrahedronMood
                : tetrahedronDanceRange ? tetrahedronDance
                    : 0.1 // Default opacity if none of the ranges apply

        setTetraOpacity(activeOpacity)
        setFO_opacity(activeOpacity);
        setDO_opacity(activeOpacity);
        setBO_opacity(activeOpacity);
        setSU_opacity(activeOpacity);
        setQS_opacity(activeOpacity);
        setQU_opacity(activeOpacity);
        setAE_opacity(activeOpacity);
        setCE_opacity(activeOpacity);
        setAC_opacity(activeOpacity);

    }, [tetrahedronBPM,        tetrahedronDance,        tetrahedronMood, ]);

    return null;
};
