export const AudioFileProcessor = (items, setDropStatus) => {

    let audioFiles = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].kind === 'file') {
            let file = items[i].getAsFile();
            if (isAudioFile(file)) {
                console.log('audio file:', file.name);
                audioFiles.push(file);
                // Process the audio files
            } else {
                console.log('rejected non-audio file:', file.name);
            }
        }
    }

    if (audioFiles.length > 0) {
        setDropStatus(
            <>
                <p>files processed successfully.</p>
                <p><small>drop another or close the window.</small></p>
            </>
        );
        // Further processing with audioFiles
    } else {
        setDropStatus('no audio files detected, please try again');
    }

};

const isAudioFile = (file) => {
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/aac'];
    return allowedTypes.includes(file.type);
};
