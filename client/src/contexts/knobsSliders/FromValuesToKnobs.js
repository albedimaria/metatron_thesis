export function mapLabelsToValues(labels) {
    const step = 100 / (labels.length - 1);

    return labels.map((label, index) => ({
        label,
        value: step * index,
    }));
}

export function findLabelValue(labels, targetLabel) {
    const mappedValues = mapLabelsToValues(labels);

    const targetValue = mappedValues.find(({ label }) => label === targetLabel)?.value;

    if (targetValue !== undefined) {
        return targetValue;
    } else {
        // Handle the case when the target label is not found
        return null;
    }
}


export function mapValuesToLabels(labels) {
    const step = 100 / (labels.length - 1);

    return (value) => {
        const index = Math.round(value / step);
        return labels[index];
    };
}



