const AlphabetNavigation = ({ fullAlphabet, selectedLetter, groupedCharacters, onLetterClick }) => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
        {fullAlphabet.map((letter) => (
            <button
                key={letter}
                onClick={() => onLetterClick(letter)}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                    ${selectedLetter === letter 
                        ? 'bg-[#62b6cb] text-[#1b4965]' 
                        : 'border border-[#62b6cb] hover:bg-[#62b6cb] hover:text-[#1b4965]'
                    } 
                    ${!groupedCharacters[letter] ? 'opacity-50' : 'opacity-100'}
                    transition-colors duration-300`}
            >
                {letter}
            </button>
        ))}
    </div>
);

export default AlphabetNavigation