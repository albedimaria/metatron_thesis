export function mapLabelsToValues(labels) {
    const MAX_VALUE = 100
    const step = MAX_VALUE / (labels.length - 1);

    return labels.map((label, index) => ({
        label,
        value: step * index,
    }));
}

export function findLabelValue(labels, targetLabel) {
    // Return a default value if targetLabel is undefined
    if (!targetLabel) {
        // console.log("Target label is undefined. Returning default value.");
        return 0; // or any other default value you deem appropriate
    }

    const mappedValues = mapLabelsToValues(labels);
    const targetValue = mappedValues.find(({ label }) => label === targetLabel)?.value;

    return targetValue !== undefined ? targetValue : 0; // Return default value if not found
}



export function mapValuesToLabels(labels) {
    const step = 100 / (labels.length - 1);

    return (value) => {
        const index = Math.round(value / step);
        return labels[index];
    };
}





