import {useEffect} from "react";
import GeometriesRanges from "../../mappingIfRanges/GeometriesRanges";
import MapFunctionBPM from "../../../functions/mapFunctions/bpm/MapFunctionBPM";
import MapFunctionDance from "../../../functions/mapFunctions/danceability/MapFunctionDance";
import MapFunctionMood from "../../../functions/mapFunctions/mood/MapFunctionMood";
import {useOpacities} from "../../../context/OpacityContext";
import {useKnobsValues} from "../../../context/KnobContext";

export const IcosahedronSetter = () => {

    const { opacities } = useOpacities();
    const {
        setBQ_opacity,
        setFU_opacity,
        setSU_opacity,
        setQS_opacity,
        setQU_opacity,
        setDS_opacity,
        setCD_opacity,
        setDE_opacity,
        setFA_opacity,
        setAB_opacity,
        setBC_opacity,
        setEF_opacity,
        setAC_opacity,
        setAE_opacity,
        setCE_opacity,
    } = opacities

    const {
        cubeBPMRange, cubeDanceRange,
        dodecahedronBPMRange, dodecahedronDanceRange, dodecahedronMoodRange,
        octahedronBPMRange, octahedronDanceRange,
        tetrahedronBPMRange, tetrahedronDanceRange,
        icosahedronBPMRange, icosahedronDanceRange, icosahedronMoodRange } = GeometriesRanges()

    const { cubeBPM, tetrahedronBPM, octahedronBPM, icosahedronBPM, dodecahedronBPM} = MapFunctionBPM()
    const { cubeDance, octahedronDance, tetrahedronDance, icosahedronDance, dodecahedronDance } = MapFunctionDance()
    const { cubeMood, octahedronMood, tetrahedronMood, icosahedronMood, dodecahedronMood } = MapFunctionMood()



    useEffect(() => {
        // Determine which geometry range is active and update opacity accordingly
        const activeOpacity = icosahedronBPMRange ? icosahedronBPM
            : icosahedronMoodRange ? icosahedronMood
                : icosahedronDanceRange ? icosahedronDance
                    : 0.1; // Default opacity if none of the ranges apply


        // Update opacities for specific segments

        setBQ_opacity(activeOpacity);
        setFU_opacity(activeOpacity);
        setSU_opacity(activeOpacity);
        setQS_opacity(activeOpacity);
        setQU_opacity(activeOpacity);
        setDS_opacity(activeOpacity);
        setCD_opacity(activeOpacity);
        setDE_opacity(activeOpacity);
        setFA_opacity(activeOpacity);
        setAB_opacity(activeOpacity);
        setBC_opacity(activeOpacity);
        setEF_opacity(activeOpacity);
        setAC_opacity(activeOpacity);
        setAE_opacity(activeOpacity);
        setCE_opacity(activeOpacity);




    }, [icosahedronBPM, icosahedronMood, icosahedronDance]);

    return null;
};
