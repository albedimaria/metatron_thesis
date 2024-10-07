import triangularMapping, {triangularMappingLower} from "../../rescaler/helpers/functions/triangularMapping";
import {rescaleValue} from "../../rescaler/RescaleUtil";
import {useKnobsValues} from "../../../context/KnobContext";

function MapFunctionBPM(){

    const { knobValues } = useKnobsValues()
    const { bpmKnob } = knobValues

    const cubeBPM = triangularMappingLower(bpmKnob, 0, 20, 0.1, 0, 1);
    const octahedronBPM = triangularMapping(bpmKnob, 40, 60, 0, 1)
    const tetrahedronBPM = triangularMapping(bpmKnob, 60, 80, 0, 1)
    const icosahedronBPM = rescaleValue(bpmKnob,80, 100, 0, 1 )
    const dodecahedronBPM = triangularMapping(bpmKnob, 20, 40, 0, 1)

    return { cubeBPM, octahedronBPM, tetrahedronBPM, icosahedronBPM , dodecahedronBPM  }
}

export default MapFunctionBPM