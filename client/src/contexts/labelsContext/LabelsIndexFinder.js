import React from 'react';

export function labelIndexFinder(availableClasses, target) {
    if (!Array.isArray(availableClasses)) {
        console.error('Expected an array for availableClasses:', availableClasses);
        return 0; // Return -1 or any other error indicator
    }
    return availableClasses.indexOf(target);
}
