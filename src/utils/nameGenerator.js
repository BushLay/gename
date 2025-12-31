import namesData from '../data/names.json';

/**
 * Generates a Japanese name based on gender and optional style.
 * @param {string} gender - 'male', 'female', or 'neutral'
 * @param {string} style - 'modern', 'traditional', 'anime', or 'all'
 * @param {number} count - Number of names to generate (default 1)
 * @returns {Array} Array of generated name objects
 */
export const generateNames = (gender = 'neutral', style = 'all', count = 1) => {
    const generated = [];

    // Filter given names by gender
    let givenList = namesData.givenNames[gender] || namesData.givenNames['neutral'];
    let surnameList = namesData.surnames;

    // Filter by style if not 'all'
    if (style !== 'all') {
        givenList = givenList.filter(name => name.tags && name.tags.includes(style));
        // Also filter surnames, or keep all surnames? Usually surnames are not as strictly styled, 
        // but some are more "anime-ish". Let's filter if possible, otherwise fallback to all.
        const styledSurnames = surnameList.filter(name => name.tags && name.tags.includes(style));
        if (styledSurnames.length > 0) {
            surnameList = styledSurnames;
        }
    }

    // Fallback if filtering resulted in empty list (should limit this case in real app by having enough data)
    if (givenList.length === 0) givenList = namesData.givenNames[gender];

    for (let i = 0; i < count; i++) {
        const randomSurname = surnameList[Math.floor(Math.random() * surnameList.length)];
        const randomGiven = givenList[Math.floor(Math.random() * givenList.length)];

        generated.push({
            kanji: `${randomSurname.kanji} ${randomGiven.kanji}`,
            kana: `${randomSurname.kana} ${randomGiven.kana}`,
            romaji: `${randomSurname.romaji} ${randomGiven.romaji}`,
            meaning: `Surname: ${randomSurname.meaning} | Name: ${randomGiven.meaning}`,
            gender,
            style
        });
    }

    return generated;
};
