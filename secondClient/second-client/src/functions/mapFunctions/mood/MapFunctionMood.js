import triangularMapping from "../../rescaler/helpers/functions/triangularMapping";
import {useKnobsValues} from "../../../context/KnobContext";

function MapFunctionMood(){

    const { knobValues } = useKnobsValues()
    const { moodKnob } = knobValues
    const rescaleValue = (value, min, max, newMin, newMax) => {
        return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
    };

    const         cubeMood =  triangularMapping(moodKnob, 0, 20, 0, 1)
    const   octahedronMood =  triangularMapping(moodKnob, 40, 60, 0, 1)
    const  tetrahedronMood =  triangularMapping(moodKnob, 60, 80, 0, 1)
    const dodecahedronMood =  triangularMapping(moodKnob, 20, 40, 0, 1)
    const  icosahedronMood =  rescaleValue(moodKnob,80, 100, 0, 1 )


    return { cubeMood, octahedronMood, tetrahedronMood, icosahedronMood, dodecahedronMood }


}

export default MapFunctionMood