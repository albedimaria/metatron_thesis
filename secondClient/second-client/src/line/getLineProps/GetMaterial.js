
/*export const GetMaterial = (instrKnob) => {
    if (instrKnob <= 26) { // Strings and Mellow Woodwinds
        return { roughness: 0.2, metalness: 0.1, emissiveIntensity: 0.3 };
    } else if (instrKnob <= 44) { // Resonant Brass and Woodwinds
        return { roughness: 0.5, metalness: 0.6, emissiveIntensity: 0.5 };
    } else if (instrKnob <= 98) { // Keyboards and Harmonic
        return { roughness: 0.4, metalness: 0.2, emissiveIntensity: 0 };
    } else if (instrKnob <= 80) { // Percussive and Rhythmic
        return { roughness: 0.7, metalness: 0,  emissiveIntensity: 0.2 };
    } else { // Basses and Electronic
        return { roughness: 0.3, metalness: 0.4, emissiveIntensity: 0.6 };
    }
};*/

export const GetMaterial = (keyKnob) => {
    if (keyKnob <= 26) { // Strings and Mellow Woodwinds
        return { roughness: 0.2, metalness: 0.1, emissiveIntensity: 0.3 };
    } else if (keyKnob <= 44) { // Resonant Brass and Woodwinds
        return { roughness: 0.5, metalness: 0.6, emissiveIntensity: 0.5 };
    } else if (keyKnob <= 98) { // Keyboards and Harmonic
        return { roughness: 0.4, metalness: 0.2, emissiveIntensity: 0 };
    } else if (keyKnob <= 80) { // Percussive and Rhythmic
        return { roughness: 0.7, metalness: 0,  emissiveIntensity: 0.2 };
    } else { // Basses and Electronic
        return { roughness: 0.3, metalness: 0.4, emissiveIntensity: 0.6 };
    }
};