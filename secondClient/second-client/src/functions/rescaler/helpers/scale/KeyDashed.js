import {useData} from "../../../../data/backendData/DataContext";
import LabelDataExtractor from "../../../../data/label extractor/LabelDataExtractor";

export const KeyDashed = (scaleKnob) => {
    const { explanation } = useData();

    const {
        scaleClassesAvailable
    } = LabelDataExtractor({ explanation });

    return true
};
