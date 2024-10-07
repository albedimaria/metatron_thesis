export const moodMapping = {
    "": [0, 0],
    "action": [70, 74], "adventure": [75, 79], "advertising": [80, 84], "background": [5, 9],
    "ballad": [10, 14], "calm": [0, 4], "children": [15, 19], "christmas": [20, 24],
    "commercial": [25, 29], "cool": [30, 34], "corporate": [35, 39], "dark": [85, 89],
    "deep": [90, 94], "documentary": [95, 99], "drama": [100, 100], "dramatic": [55, 59],
    "dream": [60, 64], "emotional": [65, 69], "energetic": [45, 49], "epic": [50, 54],
    "fast": [40, 44], "film": [40, 44], "fun": [50, 54], "funny": [55, 59],
    "game": [60, 64], "groovy": [65, 69], "happy": [10, 14], "heavy": [70, 74],
    "holiday": [75, 79], "hopeful": [80, 84], "inspiring": [85, 89], "love": [90, 94],
    "meditative": [15, 19], "melancholic": [95, 99], "melodic": [95, 99], "motivational": [50, 54],
    "movie": [40, 44], "nature": [20, 24], "party": [45, 49], "positive": [30, 34],
    "powerful": [75, 79], "relaxing": [5, 9], "retro": [55, 59], "romantic": [85, 89],
    "sad": [90, 94], "sexy": [65, 69], "slow": [1, 4], "soft": [5, 9],
    "soundscape": [10, 14], "space": [70, 74], "sport": [45, 49], "summer": [30, 34],
    "trailer": [75, 79], "travel": [35, 39], "upbeat": [40, 44], "uplifting": [50, 54]
};

export const getMoodValue = (moodLabel) => {
    // Default neutral value for mood
    const DEFAULT_MOOD_VALUE = 0; // Example value, adjust as needed

    // Check for the initial or undefined state
    if (!moodLabel || typeof moodLabel !== 'string' || moodLabel === '...') {
        return DEFAULT_MOOD_VALUE;
    }

    const moodRange = moodMapping[moodLabel.toLowerCase()];
    if (moodRange) {
        const midpoint = (moodRange[0] + moodRange[1]) / 2;
        return midpoint;
    } else {
        console.error("Mood not found:", moodLabel);
        return DEFAULT_MOOD_VALUE;
    }
};


