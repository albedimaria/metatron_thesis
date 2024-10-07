export const getLabelContent = (option, sphereData) => {
    switch (option) {
        case 'bpm':
            return `bpm: ${sphereData.bpm}`;
        case 'mood':
            return `mood: ${sphereData.mood}`;
        case 'danceability':
            return `dance: ${sphereData.danceability}`;
        case 'instrument':
            return `instr: ${sphereData.instrument}`;
        case 'key':
            return `key: ${sphereData.key}`;
        case 'color':
            return `color: ${sphereData.color}`;
        case 'timbre':
            return `timbre: ${sphereData.timbre}`;
        case 'scale':
            return `scale: ${sphereData.scale}`;
        case 'harmonicity':
            return `harmo: ${sphereData.harmonicity}`;
        case 'dynamicity':
            return `dynamicity: ${sphereData.dynamicity}`;
        default:
            return '';
    }
};
