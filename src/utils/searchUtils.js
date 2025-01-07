export const filterAndGroupCharacters = (characters, searchQuery) => {
    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.reduce((acc, char) => {
        const firstLetter = char.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(char);
        return acc;
    }, {});
};

export const filterCharacters = (characters, searchQuery) => {
    return characters.filter(char => 
        char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
};