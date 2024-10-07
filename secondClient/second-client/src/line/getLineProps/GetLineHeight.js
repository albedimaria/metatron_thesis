export const GetLineHeight = (dynamicKnob, minOutput, maxOutput) => {
    // Ensure the dynamicKnob value is within the expected range
    const clampedDynamicKnob = Math.max(0, Math.min(dynamicKnob, 100));

    // Calculate the scale factor
    const scaleFactor = (maxOutput - minOutput) / 100;

    // Linearly map the value from 0-100 to minOutput-maxOutput
    return minOutput + clampedDynamicKnob * scaleFactor;
};
