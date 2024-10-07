import triangularMapping from "../../rescaler/helpers/functions/triangularMapping";
import {useKnobsValues} from "../../../context/KnobContext";

function MapFunctionDance(){

    const { knobValues } = useKnobsValues()
    const { danceKnob } = knobValues

    const rescaleValue = (value, min, max, newMin, newMax) => {
        return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
    };

    // Check if dance_rescaled is within the expected range
    if (danceKnob < 0 || danceKnob > 100) {
        console.warn('dance_rescaled is out of range:', danceKnob);
        // Handle the out-of-range value appropriately
    }



    // console.log("Dance Rescaled Value:", dance_rescaled);

    const       cubeDance =         triangularMapping(danceKnob, 0, 20, 0, 1)
    const octahedronDance =   triangularMapping(danceKnob, 40, 60, 0, 1)
    const tetrahedronDance =  triangularMapping(danceKnob, 60, 80, 0, 1)
    const icosahedronDance =  rescaleValue(danceKnob,80, 100, 0, 1 )
    const dodecahedronDance = triangularMapping(danceKnob, 20, 40, 0, 1)

    return { cubeDance, octahedronDance, tetrahedronDance, icosahedronDance, dodecahedronDance }
}

export default MapFunctionDance