import { useParams, useNavigate, useLocation } from "react-router-dom";

const CharacterDetails = () => {
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const character = location.state?.character || (() => {
        const stored = localStorage.getItem('mahabharathamCharacters');
        if (stored) {
            const characters = JSON.parse(stored);
            console.log('Using stored character data');
            return characters.find(char => char.name.toLowerCase() === name.toLowerCase());
        }
        return null;
    })();

    if (!character) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b4965] text-[#bee9e8]">
                <h2 className="text-2xl mb-4">Character not found</h2>
                <button 
                    onClick={() => navigate('/mahaabhaaratham/characters')}
                    className="hover-underline-animation"
                >
                    Back to Characters
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => navigate('/mahaabhaaratham/characters')}
                    className="hover-underline-animation mb-8"
                >
                    ← Back to Characters
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="character-image-container">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="rounded-lg w-full h-auto object-cover shadow-lg"
                            loading="lazy"
                            onError={(e) => {
                                console.error(`Failed to load image for ${character.name}`);
                                e.target.src = '/placeholder.jpg';
                            }}
                        />
                    </div>
                    
                    <div className="character-info">
                        <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
                        <div className="space-y-4">
                            <p className="text-lg text-[#62b6cb] font-extralight">
                                {character.description}
                            </p>
                            <div className="character-stats">
                                <h3 className="text-xl font-semibold mb-2">Details</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <p className="font-light text-base">
                                            <span className="font-medium">Parents: </span>
                                            {character.parents || 'N/A'}
                                        </p>
                                    </li>
                                    <li>
                                        {character.gender === "Male" ? (
                                            <p className="font-light text-base">
                                                <span className="font-medium">Wives: </span>
                                                {character.wives || 'N/A'}
                                            </p>
                                        ) : (
                                            <p className="font-light text-base">
                                                <span className="font-medium">Husband: </span>
                                                {character.husband || 'N/A'}
                                            </p>
                                        )}
                                    </li>
                                    <li>
                                        <p className="font-light text-base">
                                            <span className="font-medium">Children: </span>
                                            {character.children || 'N/A'}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;