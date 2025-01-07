import { Shuffle } from 'lucide-react';

const RandomCharacter = ({ onClick, isShuffling }) => (
    <button
        onClick={onClick}
        disabled={isShuffling}
        className={`mb-8 px-6 py-3 bg-[#62b6cb] text-[#1b4965]
            flex items-center gap-2 mx-auto hover:bg-[#bee9e8] transition-all
            ${isShuffling ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
    >
        <Shuffle className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} />
        {isShuffling ? 'Selecting Random Character...' : 'Random Character'}
    </button>
);

export default RandomCharacter;