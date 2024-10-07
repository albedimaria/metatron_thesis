import React from "react";
import Vertices from "../../vertices/Vertices";
import AnimatedRing from "../animatedRing/AnimatedRing";
import {useKnobsValues} from "../../context/KnobContext";

function GeomKnobsIn() {
    const { A, B, C, D, E, F } = Vertices();

    const { knobValues } = useKnobsValues();
    const {
        timbreKnob,
        dynamicKnob,
        colorKnob,
        textureKnob,  // New knob for texture (complexity)
        reverbKnob,   // New knob for reverb (space)
        clarityKnob   // New knob for clarity
    } = knobValues;

    const knobData = [
        { vertex: A, value: timbreKnob,  label: "timbre",       name: "timbre"    },
        { vertex: E, value: dynamicKnob, label: "dynamicity",   name: "dynamic"   },
        { vertex: C, value: colorKnob,   label: "color",        name: "color"     },
        { vertex: D, value: textureKnob, label: "texture",      name: "texture"   },  // New texture knob
        { vertex: B, value: reverbKnob,  label: "reverb",       name: "reverb"    },  // New reverb knob
        { vertex: F, value: clarityKnob, label: "clarity",      name: "clarity"   }   // New clarity knob
    ];

    const outerRadius = 2.82;
    const innerRadius = outerRadius - 0.17;

    return (
        <>
            {knobData.map(({ vertex, value, label, name }, index) => (
                <AnimatedRing
                    key={index}
                    vertex={vertex}
                    value={value}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    label={label}
                    knobName={`${name}Knob`} // Assign a unique name for each knob
                    originComponent={"knobsIn"}
                />
            ))}
        </>
    );
}

export default GeomKnobsIn;


/*
import Vertices from "../../vertices/Vertices";
import AnimatedRing from "../animatedRing/AnimatedRing";
import React from "react";
import {useKnobsValues} from "../../KnobProvider";

function GeomKnobsIn() {
    const { A, B, C, D, E, F } = Vertices();

    const { knobValues } = useKnobsValues()
    const {
        timbreKnob,
        harmoKnob,
        dynamicKnob,
        colorKnob,
        } = knobValues

    const knobData = [
        { vertex: A, value: timbreKnob,  label: "timbre",       name: "timbre"    },
        { vertex: B, value: harmoKnob,   label: "harmonicity",  name: "harmo"     },
        { vertex: C, value: dynamicKnob, label: "dynamicity",   name: "dynamic"   },
        { vertex: D, value: colorKnob,   label: "color",        name: "color"     },
        { vertex: E, value: colorKnob,   label: "color",        name: "temp"      },
        { vertex: F, value: colorKnob,   label: "color",        name: "temp2"     }
    ];

    const outerRadius = 2.75
    const innerRadius = outerRadius - 0.15;

    return (
        <>
            {knobData.map(({ vertex, value, label, name }, index) => (
                <AnimatedRing
                    key={index}
                    vertex={vertex}
                    // value={value}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    // label={label}
                    knobName={`${name}Knob`} // Assign a unique name for each knob
                    originComponent={"knobsIn"}
                />
            ))}
        </>
    );
}

export default GeomKnobsIn;

*/
