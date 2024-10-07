import React from "react";

const LabelDataExtractor = ({ explanation }) => {

    // MOOD
    const moodData = explanation["explanation"]["mood"];
    const moodClassesAvailable = moodData["available classes"];

    // INSTRUMENT
    const instrumentData = explanation["explanation"]["instrument"];
    const instrumentClassesAvailable = instrumentData["labels"];

    // KEY
    const keyData = explanation["explanation"]["key"];
    const keyClassesAvailable = keyData["available keys"];

    // SCALE
    const scaleClassesAvailable = ["minor", "major"]
    // console.log(scaleClassesAvailable)

    // COLORS
    const colorsData = explanation["explanation"]["color"];
    const colorsClassesAvailable = colorsData["list of colors"]


    // TIMBRE
    const timbreData = explanation["explanation"]["timbre"];
    const timbreClassesAvailable = timbreData["labels"];



    return {
        moodClassesAvailable,
        instrumentClassesAvailable,
        keyClassesAvailable,
        timbreClassesAvailable,
        scaleClassesAvailable,
        colorsClassesAvailable
    };
};

export default LabelDataExtractor;