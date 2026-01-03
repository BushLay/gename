// Cache for loaded data
let surnamesCache = null;
let maleNamesCache = null;
let femaleNamesCache = null;

/**
 * Load data from public/data JSON files
 * Data format: [[kanji, kana, romaji], ...]
 */
const loadJsonData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.map(item => ({
        kanji: item[0],
        kana: item[1],
        romaji: item[2]
    }));
};

const loadSurnames = async () => {
    if (surnamesCache) return surnamesCache;
    try {
        surnamesCache = await loadJsonData('/data/surnames.json');
        return surnamesCache;
    } catch (error) {
        console.error('Failed to load surnames:', error);
        return [];
    }
};

const loadMaleNames = async () => {
    if (maleNamesCache) return maleNamesCache;
    try {
        maleNamesCache = await loadJsonData('/data/male_names.json');
        return maleNamesCache;
    } catch (error) {
        console.error('Failed to load male names:', error);
        return [];
    }
};

const loadFemaleNames = async () => {
    if (femaleNamesCache) return femaleNamesCache;
    try {
        femaleNamesCache = await loadJsonData('/data/female_names.json');
        return femaleNamesCache;
    } catch (error) {
        console.error('Failed to load female names:', error);
        return [];
    }
};

/**
 * Search names by query (matches kanji, kana, or romaji)
 * @param {Array} nameList - List of name objects
 * @param {string} query - Search query
 * @param {number} limit - Maximum results to return
 * @returns {Array} Matching names
 */
const searchInList = (nameList, query, limit = 50) => {
    if (!query || query.trim() === '') return [];

    const normalizedQuery = query.toLowerCase().trim();

    return nameList
        .filter(name =>
            name.kanji.includes(query) ||
            name.kana.includes(query) ||
            name.romaji.toLowerCase().includes(normalizedQuery)
        )
        .slice(0, limit);
};

/**
 * Search surnames
 * @param {string} query - Search query
 * @returns {Promise<Array>} Matching surnames
 */
export const searchSurnames = async (query) => {
    const surnames = await loadSurnames();
    return searchInList(surnames, query);
};

/**
 * Search given names by gender
 * @param {string} query - Search query
 * @param {string} gender - 'male', 'female', or 'all'
 * @returns {Promise<Array>} Matching given names with gender info
 */
export const searchGivenNames = async (query, gender = 'all') => {
    let results = [];

    if (gender === 'male' || gender === 'all') {
        const maleNames = await loadMaleNames();
        const maleResults = searchInList(maleNames, query).map(name => ({
            ...name,
            gender: 'male'
        }));
        results = results.concat(maleResults);
    }

    if (gender === 'female' || gender === 'all') {
        const femaleNames = await loadFemaleNames();
        const femaleResults = searchInList(femaleNames, query).map(name => ({
            ...name,
            gender: 'female'
        }));
        results = results.concat(femaleResults);
    }

    // Limit total results
    return results.slice(0, 50);
};
