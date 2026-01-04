// Cache for data from public/data/
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
    // Transform array format to object format
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
 * Generates a Japanese name based on gender.
 * @param {string} gender - 'male', 'female', or 'neutral'
 * @param {number} count - Number of names to generate (default 1)
 * @returns {Promise<Array>} Array of generated name objects
 */
export const generateNames = async (gender = 'neutral', count = 1) => {
    const generated = [];

    // Load data from external JSON files
    const surnameList = await loadSurnames();

    // Load given names based on gender
    let givenList = [];
    if (gender === 'male') {
        givenList = await loadMaleNames();
    } else if (gender === 'female') {
        givenList = await loadFemaleNames();
    } else {
        // For neutral, combine both male and female names
        const maleNames = await loadMaleNames();
        const femaleNames = await loadFemaleNames();
        givenList = [...maleNames, ...femaleNames];
    }

    // Fallback check
    if (givenList.length === 0 || surnameList.length === 0) {
        console.error('Failed to load name data');
        return [];
    }

    for (let i = 0; i < count; i++) {
        const randomSurname = surnameList[Math.floor(Math.random() * surnameList.length)];
        const randomGiven = givenList[Math.floor(Math.random() * givenList.length)];

        generated.push({
            kanji: `${randomSurname.kanji} ${randomGiven.kanji}`,
            kana: `${randomSurname.kana} ${randomGiven.kana}`,
            romaji: `${randomSurname.romaji} ${randomGiven.romaji}`,
            gender
        });
    }

    return generated;
};

/**
 * Filter names based on query and match mode
 * @param {Array} nameList - List of name objects
 * @param {string} query - Search query
 * @param {string} matchMode - 'startsWith' or 'contains'
 * @returns {Array} Filtered names
 */
const filterNames = (nameList, query, matchMode) => {
    if (!query || query.trim() === '') return nameList;

    const normalizedQuery = query.toLowerCase().trim();

    return nameList.filter(name => {
        const matchFields = [name.kanji, name.kana, name.romaji.toLowerCase()];

        if (matchMode === 'startsWith') {
            return matchFields.some(field => field.startsWith(normalizedQuery) || field.startsWith(query));
        } else {
            return matchFields.some(field => field.includes(normalizedQuery) || field.includes(query));
        }
    });
};

/**
 * Generates Japanese names with optional filter conditions
 * @param {Object} options
 * @param {string} options.gender - 'male' or 'female'
 * @param {string} options.givenNameQuery - Filter query for given names
 * @param {string} options.givenNameMatchMode - 'startsWith' or 'contains'
 * @param {string} options.familyNameQuery - Filter query for family names
 * @param {string} options.familyNameMatchMode - 'startsWith' or 'contains'
 * @param {number} count - Number of names to generate (default 20)
 * @returns {Promise<Object>} Object containing generated names and filter info
 */
/**
 * Preload all name data into cache
 * Call this on app initialization to warm up the cache
 */
export const preloadNameData = async () => {
    await Promise.all([
        loadSurnames(),
        loadMaleNames(),
        loadFemaleNames()
    ]);
};

export const generateNamesWithFilter = async (options, count = 20) => {
    const {
        gender,
        givenNameQuery = '',
        givenNameMatchMode = 'startsWith',
        familyNameQuery = '',
        familyNameMatchMode = 'startsWith'
    } = options;

    // Load data
    const surnameList = await loadSurnames();
    let givenList = gender === 'female' ? await loadFemaleNames() : await loadMaleNames();

    // Apply filters
    const filteredSurnames = filterNames(surnameList, familyNameQuery, familyNameMatchMode);
    const filteredGivenNames = filterNames(givenList, givenNameQuery, givenNameMatchMode);

    // Check if we have enough names to generate
    if (filteredSurnames.length === 0 || filteredGivenNames.length === 0) {
        return {
            names: [],
            filterInfo: {
                matchedSurnames: filteredSurnames.length,
                matchedGivenNames: filteredGivenNames.length
            }
        };
    }

    const generated = [];
    for (let i = 0; i < count; i++) {
        const randomSurname = filteredSurnames[Math.floor(Math.random() * filteredSurnames.length)];
        const randomGiven = filteredGivenNames[Math.floor(Math.random() * filteredGivenNames.length)];

        generated.push({
            kanji: `${randomSurname.kanji} ${randomGiven.kanji}`,
            kana: `${randomSurname.kana} ${randomGiven.kana}`,
            romaji: `${randomSurname.romaji} ${randomGiven.romaji}`,
            gender
        });
    }

    return {
        names: generated,
        filterInfo: {
            matchedSurnames: filteredSurnames.length,
            matchedGivenNames: filteredGivenNames.length
        }
    };
};
