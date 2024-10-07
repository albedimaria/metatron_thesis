import { useEffect } from "react";
import GeometriesRanges from "../../mappingIfRanges/GeometriesRanges";
import MapFunctionBPM from "../../../functions/mapFunctions/bpm/MapFunctionBPM";
import MapFunctionDance from "../../../functions/mapFunctions/danceability/MapFunctionDance";
import MapFunctionMood from "../../../functions/mapFunctions/mood/MapFunctionMood";
import {useKnobsValues} from "../../../context/KnobContext";
import {useOpacities} from "../../../context/OpacityContext";

export const CubeSetter = () => {
    // Access opacity setters directly from the useGeometryState hook
    const {
       opacities
    } = useOpacities();

    const {
        setCubeOpacity
    } = opacities

    const { cubeBPMRange, cubeDanceRange, cubeMoodRange } = GeometriesRanges();
    const { cubeBPM } = MapFunctionBPM();
    const { cubeDance } = MapFunctionDance();
    const { cubeMood } = MapFunctionMood();


    useEffect(() => {
        // Assuming cubeBPM, cubeMood, and cubeDance return an opacity value directly,
        const activeOpacity = cubeBPMRange ? cubeBPM
            : cubeMoodRange ? cubeMood
                : cubeDanceRange ? cubeDance
                    : 0.1; // Default opacity if none of the ranges apply

        // Update opacities
        /*setAB_opacity(activeOpacity);*/
        /*setBC_opacity(activeOpacity);*/
        /*setCD_opacity(activeOpacity);*/
        /*setDE_opacity(activeOpacity);*/
        /*setEF_opacity(activeOpacity);*/
        /*setFA_opacity(activeOpacity);*/

        setCubeOpacity(activeOpacity)


    }, [cubeBPM, cubeDance, cubeMood]);

    return null;
};

/*export const CubeSetter = () => {
    const { updateOpacity } = useOpacities();
    const { cubeBPMRange, cubeDanceRange, cubeMoodRange } = GeometriesRanges();
    const { cubeBPM } = MapFunctionBPM();
    const { cubeDance } = MapFunctionDance();
    const { cubeMood } = MapFunctionMood();
    const { knobValues } = useKnobsValues();
    const { bpmKnob, moodKnob, danceKnob } = knobValues;

    useEffect(() => {
        // Determine which geometry range is active and update opacity accordingly
        let activeOpacity = 0.1; // Default opacity

        if (cubeBPMRange) {
            activeOpacity = cubeBPM;
        } else if (cubeMoodRange) {
            activeOpacity = cubeMood;
        } else if (cubeDanceRange) {
            activeOpacity = cubeDance;
        }


        // Update opacities for specific segments
        ['AB', 'BC', 'CD', 'DE', 'EF', 'FA'].forEach(segment => {
            updateOpacity(segment, activeOpacity);
        });



    }, [bpmKnob, moodKnob, danceKnob,]);

    return null;
};*/


/*export const CubeSetter = () => {
    const { cubeBPMRange, cubeDanceRange, cubeMoodRange } = GeometriesRanges();
    const { cubeBPM } = MapFunctionBPM();
    const { cubeDance } = MapFunctionDance();
    const { cubeMood } = MapFunctionMood();

    const { setOpacities } = useOpacity();

    const { knobValues } = useKnobsValues();
    const { moodKnob } = knobValues;

    useEffect(() => {
        let activeOpacity;
        const isMoodInitial = moodKnob === 0; // initial state

        if (cubeBPMRange) {
            activeOpacity = cubeBPM;
        } else if (cubeMoodRange && !isMoodInitial) {
            activeOpacity = cubeMood;
        } else if (cubeDanceRange) {
            activeOpacity = cubeDance;
        }

        if (activeOpacity !== undefined && Array.isArray(setOpacities)) {
            // Apply the active opacity to all related segments
            setOpacities.forEach(setOpacityFunction => {
                setOpacityFunction(activeOpacity);
            });
        }
    }, [cubeBPMRange, cubeDanceRange, cubeMoodRange, cubeBPM, cubeDance, cubeMood, moodKnob, setOpacities]);

    return null;
};*/


/*export const CubeSetter = () => {
    const { setOpacities } = useOpacity();
    const { cubeBPMRange, cubeDanceRange, cubeMoodRange } = GeometriesRanges();
    // Assume these functions return the calculated opacity
    const cubeBPM = MapFunctionBPM();
    const cubeDance = MapFunctionDance();
    const cubeMood = MapFunctionMood();
    const { knobValues } = useKnobsValues()
    const { moodKnob } = knobValues


    useEffect(() => {
        // Example logic to adjust opacity based on BPM range
        if (cubeBPMRange) {
            setOpacities(opacities => ({ ...opacities, AB: cubeBPM, BC: cubeDance /!*, more segments as needed *!/ }));
        }
        // Adjust for mood and danceability similarly
    }, [cubeBPMRange, cubeDanceRange, cubeMoodRange, cubeBPM, cubeDance, cubeMood, setOpacities]);

    return null; // This component does not render anything itself
};*/

/*export const CubeSetter = ({ setOpacityFunctions }) => {
    const { cubeBPMRange, cubeDanceRange, cubeMoodRange } = GeometriesRanges();
    const { cubeBPM } = MapFunctionBPM();
    const { cubeDance } = MapFunctionDance();
    const { cubeMood } = MapFunctionMood();

    // console.log(cubeBPMRange, cubeDanceRange, cubeMoodRange)

    const { knobValues } = useKnobsValues()
    const { moodKnob } = knobValues

    useEffect(() => {
        let activeOpacity;
        const isMoodInitial = moodKnob === 0 // initial state


        if (cubeBPMRange) {
            activeOpacity = cubeBPM;
        } else if (cubeMoodRange && !isMoodInitial) {
            activeOpacity = cubeMood;
        } else if (cubeDanceRange) {
            activeOpacity = cubeDance;
        }



        if (activeOpacity !== undefined) {
            setOpacityFunctions.forEach(setOpacity => {
                // console.log("Setting opacity for function:", setOpacity.name); // Debugging log
                setOpacity(activeOpacity);
            });
        }
    }, [cubeBPMRange, cubeDanceRange, cubeMoodRange, cubeBPM, cubeDance, cubeMood, moodKnob, setOpacityFunctions]);

    return null;
};*/
