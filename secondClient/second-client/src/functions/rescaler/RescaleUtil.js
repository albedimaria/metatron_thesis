export const rescaleValue = (value, min, max, newMin, newMax) => {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
};