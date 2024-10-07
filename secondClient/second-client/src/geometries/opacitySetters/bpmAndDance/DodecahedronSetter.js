import {useEffect} from "react";
import GeometriesRanges from "../../mappingIfRanges/GeometriesRanges";
import MapFunctionBPM from "../../../functions/mapFunctions/bpm/MapFunctionBPM";
import MapFunctionDance from "../../../functions/mapFunctions/danceability/MapFunctionDance";
import MapFunctionMood from "../../../functions/mapFunctions/mood/MapFunctionMood";
import {useOpacities} from "../../../context/OpacityContext";

export const DodecahedronSetter = () => {
    // Access opacity setters directly from the useGeometryState hook
    const {
        opacities
    } = useOpacities();

    const {
        setP_stP_nd_opacity,
        setP_ndQ_st_opacity,
        setQ_stQ_nd_opacity,
        setQ_ndR_st_opacity,
        setR_stR_nd_opacity,
        setR_ndS_st_opacity,
        setS_stS_nd_opacity,
        setS_ndT_st_opacity,
        setT_stT_nd_opacity,
        setT_ndU_st_opacity,
        setU_stU_nd_opacity,
        setU_ndP_st_opacity,
        setP_rdQ_st_opacity,
        setP_rdU_nd_opacity,
        setR_rdS_st_opacity,
        setR_rdQ_nd_opacity,
        setT_rdU_st_opacity,
        setT_rdS_nd_opacity,
        setT_rdO_opacity,
        setP_rdO_opacity,
        setR_rdO_opacity,
    } = opacities

    const { dodecahedronBPMRange, dodecahedronDanceRange, dodecahedronMoodRange } = GeometriesRanges();
    const { dodecahedronBPM } = MapFunctionBPM();
    const { dodecahedronDance } = MapFunctionDance();
    const { dodecahedronMood } = MapFunctionMood();


    useEffect(() => {

        const activeOpacity = dodecahedronBPMRange ? dodecahedronBPM
            : dodecahedronMoodRange ? dodecahedronMood
                : dodecahedronDanceRange ? dodecahedronDance
                    : 0.1; // Default opacity if none of the ranges apply

        // Update opacities
        setP_stP_nd_opacity(activeOpacity);
        setP_ndQ_st_opacity(activeOpacity);
        setQ_stQ_nd_opacity(activeOpacity);
        setQ_ndR_st_opacity(activeOpacity);
        setR_stR_nd_opacity(activeOpacity);
        setR_ndS_st_opacity(activeOpacity);
        setS_stS_nd_opacity(activeOpacity);
        setS_ndT_st_opacity(activeOpacity);
        setT_stT_nd_opacity(activeOpacity);
        setT_ndU_st_opacity(activeOpacity);
        setU_stU_nd_opacity(activeOpacity);
        setU_ndP_st_opacity(activeOpacity);
        setP_rdQ_st_opacity(activeOpacity);
        setP_rdU_nd_opacity(activeOpacity);
        setR_rdS_st_opacity(activeOpacity);
        setR_rdQ_nd_opacity(activeOpacity);
        setT_rdU_st_opacity(activeOpacity);
        setT_rdS_nd_opacity(activeOpacity);

        setT_rdO_opacity(activeOpacity)
        setP_rdO_opacity(activeOpacity)
        setR_rdO_opacity(activeOpacity)

    }, [dodecahedronBPM, dodecahedronDance, dodecahedronMood]);

    // Since CubeSetter doesn't render anything itself, it can return null
    return null;
};

/*
export const DodecahedronSetter = () => {

    const { updateOpacity } = useOpacities();
    const {
        cubeBPMRange, cubeDanceRange,
        dodecahedronBPMRange, dodecahedronDanceRange, dodecahedronMoodRange,
        octahedronBPMRange, octahedronDanceRange,
        tetrahedronBPMRange, tetrahedronDanceRange,
        icosahedronBPMRange, icosahedronDanceRange } = GeometriesRanges()

    const { cubeBPM, tetrahedronBPM, octahedronBPM, icosahedronBPM, dodecahedronBPM} = MapFunctionBPM()
    const { cubeDance, octahedronDance, tetrahedronDance, icosahedronDance, dodecahedronDance } = MapFunctionDance()
    const { cubeMood, octahedronMood, tetrahedronMood, icosahedronMood, dodecahedronMood } = MapFunctionMood()
    const { knobValues } = useKnobsValues();
    const { bpmKnob, moodKnob, danceKnob } = knobValues;


    useEffect(() => {
        // Determine which geometry range is active and update opacity accordingly
        let activeOpacity; // Default opacity

        if (dodecahedronBPMRange) {
            activeOpacity = dodecahedronBPM;
        } else if (dodecahedronMoodRange) {
            activeOpacity = dodecahedronMood;
        } else if (dodecahedronDanceRange) {
            activeOpacity = dodecahedronDance;
        }


        // Update opacities for specific segments
        [
            'P_stP_nd',
            'P_ndQ_st',
            'Q_stQ_nd',
            'Q_ndR_st',
            'R_stR_nd',
            'R_ndS_st',
            'S_stS_nd',
            'S_ndT_st',
            'T_stT_nd',
            'T_ndU_st',
            'U_stU_nd',
            'U_ndP_st',
            'P_rdQ_st',
            'P_rdU_nd',
            'R_rdS_st',
            'R_rdQ_nd',
            'T_rdU_st',
            'T_rdS_nd',
            'P_rdQ_st',
            'P_rdU_nd',
            'P_rdO',
            'R_rdS_st',
            'R_rdQ_nd',
            'R_rdO',
            'T_rdU_st',
            'T_rdS_nd',
            'T_rdO',

        ].forEach(segment => {
            updateOpacity(segment, activeOpacity);
        });



    }, [bpmKnob, moodKnob, danceKnob]);

    return null;
};
*/


