import { Link } from 'react-router-dom';

const CharacterList = ({ groupedCharacters, onCharacterClick }) => (
    <div className="space-y-8 px-4">
        {Object.keys(groupedCharacters).sort().map((letter) => (
            <div 
                key={letter} 
                id={`letter-${letter}`}
                className="text-left"
            >
                <h2 className="text-2xl font-bold text-[#62b6cb] mb-4">#{letter}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {groupedCharacters[letter]
                        .slice() // Create a shallow copy of the array
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort characters by name
                        .slice(0, 3) // Get first 4 sorted characters
                        .map((character) => (
                            <button
                                key={character.name}
                                onClick={() => onCharacterClick(character)}
                                className="text-left p-3 hover:bg-[#62b6cb] hover:text-[#1b4965] transition-colors duration-300"
                            >
                                {character.name}
                            </button>
                        ))}
                    {groupedCharacters[letter].length > 3 && (
                        <Link
                            to={`/mahaabhaaratham/characters/letter/${letter}`}
                            className="p-3 hover:bg-[#62b6cb] hover:text-[#1b4965] transition-colors duration-300 flex items-center"
                        >
                            View All ({groupedCharacters[letter].length})
                        </Link>
                    )}
                </div>
            </div>
        ))}
    </div>
);

export default CharacterList;
