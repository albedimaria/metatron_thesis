import {instrumentRangeMapping} from "../../functions/rescaler/helpers/instruments/InstrumentHelper";

const categoryTextures = {
    Strings:    'ambientCG.com/a/Bricks090',
    Woodwinds:  'ambientCG.com/a/Bricks090',
    Brass:      'ambientCG.com/a/Bricks090',
    Percussion: 'ambientCG.com/a/Bricks090',
    Electronic: 'ambientCG.com/a/Bricks090',
};

export const getTextureForInstrument = (instrKnob) => {

    // Mapping of instruments to categories (simplified from the detailed mapping provided earlier)

    const instrumentCategories  = {
        Strings: ["acousticguitar", "classicalguitar", "guitar", "harp", "cello", "viola", "violin", "acousticbassguitar", "doublebass"],
        Woodwinds: ["flute", "oboe", "clarinet", "saxophone"],
        Brass: ["trumpet", "trombone", "horn", "brass"],
        Percussion: ["drums", "percussion", "bongo", "bell", ],
        Electronic: ["synthesizer", "keyboard", "drummachine", "electricpiano", "electricguitar", "rhodes", "sampler", "computer", "organ", "accordion"]
    };


    // Determine the instrument category based on instrKnob value
    let instrumentCategory;
    Object.entries(instrumentCategories).forEach(([category, instruments]) => {
        instruments.forEach(instrument => {
            if (instrumentRangeMapping[instrument] && instrKnob >= instrumentRangeMapping[instrument][0] && instrKnob <= instrumentRangeMapping[instrument][1]) {
                instrumentCategory = category;
            }
        });
    });

    // Return the texture associated with the instrument category
    return categoryTextures[instrumentCategory] || 'ambientCG.com/a/Bricks090'; // Fallback to a default texture if no match
};
