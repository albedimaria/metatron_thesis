export const GetScale = (scaleKnob) => {
    // Ensure the dynamicKnob value is within the expected range
    const clampedScale = Math.max(0, Math.min(scaleKnob, 100));

    // Linearly map the value from 0-100 to minOutput-maxOutput
    return clampedScale < 99
};
