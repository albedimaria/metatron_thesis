import {findLabelValue} from "../FromValuesToKnobs";
import {useData} from "../../data/backendData/DataContext";
import LabelDataExtractor from "../../data/label extractor/LabelDataExtractor";
import {getMoodValue} from "./helpers/mood/MoodHelper";
import {rescaleValue} from "./RescaleUtil";
import {getInstrumentValue} from "./helpers/instruments/InstrumentHelper";
import {useVariables} from "../../context/VariablesContext";
import {useNewFeatures} from "../../context/NewFeaturesContext";

function Rescaler(){

    const { explanation } = useData()

    const {
        keyClassesAvailable,
        timbreClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable
    } =
        LabelDataExtractor({ explanation });

    const { contextValue } = useVariables()
    const {
        tempoGeomNew,
        danceGeomNew,
        moodGeomNew,
        instrGeomNew,
        keyGeomNew,
        scaleGeomNew,
        colorGeomNew,
        timbreGeomNew,
        harmonicityGeomNew,
        dynamicsGeomNew
    } = contextValue

    const {
        textureGeomNew,
        reverbGeomNew,
        clarityGeomNew,
        textureClassesAvailable,
        reverbClassesAvailable,
        clarityClassesAvailable,
        dynamicClassesAvailable
    } = useNewFeatures();


    const bpm_rescaled = rescaleValue(tempoGeomNew, 20, 200, 0, 100);
    const dance_rescaled = rescaleValue(danceGeomNew, 0,100, 0, 100);
    const mood_rescaled = getMoodValue(moodGeomNew)
    const instr_rescaled = getInstrumentValue(instrGeomNew)
    const key_rescaled = findLabelValue(keyClassesAvailable, keyGeomNew)
    const scale_rescaled = findLabelValue(scaleClassesAvailable, scaleGeomNew)

    const timbre_rescaled = findLabelValue(timbreClassesAvailable, timbreGeomNew)
    const harmonicity_rescaled = rescaleValue(harmonicityGeomNew, 0, 100, 0, 100)
    const dynamics_rescaled = rescaleValue(dynamicsGeomNew, 0, 1, 0, 100)

    const color_rescaled = findLabelValue(colorsClassesAvailable, colorGeomNew)

    // New feature rescaling with idle state handling
    const texture_rescaled = textureGeomNew === "" ? 0 : findLabelValue(textureClassesAvailable, textureGeomNew);
    const reverb_rescaled = reverbGeomNew === "" ? 0 : findLabelValue(reverbClassesAvailable, reverbGeomNew);
    const clarity_rescaled = clarityGeomNew === "" ? 0 : findLabelValue(clarityClassesAvailable, clarityGeomNew);


    return {
        bpm_rescaled,
        dance_rescaled,
        mood_rescaled,
        instr_rescaled,
        key_rescaled,
        scale_rescaled,
        timbre_rescaled,
        harmonicity_rescaled,
        dynamics_rescaled,
        color_rescaled,
        texture_rescaled,
        reverb_rescaled,
        clarity_rescaled
    };

}

export default Rescaler