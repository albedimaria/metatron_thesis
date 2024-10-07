const triangularMapping = (inputValue, x_min, x_max, y_min, y_max) => {

    if (inputValue < x_min || inputValue > x_max) {
        return null; // Handle values outside the input range
    } else if (inputValue <= (x_min + x_max) / 2) {
        return (
            (inputValue - x_min) / ((x_max - x_min) / 2) * (y_max - y_min) + y_min
        );
    } else {
        return (
            y_max -
            ((inputValue - (x_min + x_max) / 2) /
                ((x_max - x_min) / 2) *
                (y_max - y_min))
        );
    }
};

export default triangularMapping

export const triangularMappingLower = (inputValue, x_min, x_max, y_min_start, y_min, y_max) => {
    if (inputValue < x_min || inputValue > x_max) {
        return null; // Handle values outside the input range
    }

    const midPoint = (x_min + x_max) / 2;

    if (inputValue <= midPoint) {
        // Mapping for the first half of the triangle
        return (
            (inputValue - x_min) / (midPoint - x_min) * (y_max - y_min_start) + y_min_start
        );
    } else {
        // Mapping for the second half of the triangle
        return (
            y_max - ((inputValue - midPoint) / (x_max - midPoint) * (y_max - y_min)) + y_min
        );
    }
};

