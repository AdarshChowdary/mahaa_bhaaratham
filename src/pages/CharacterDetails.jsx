import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CharacterHeader from "@/components/CharacterHeader";
import ResolveUrl from "@/utils/ResolveUrl";
import { Image as ImageIcon } from "lucide-react";

const CharacterDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(ResolveUrl(`/api/mahaabhaarathaam/characters/${name}`));
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                const data = await response.json();
                setCharacter(data.success ? data.data : null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacterDetails();
    }, [name]);

    const renderContent = () => {
        if (error || (!loading && !character)) {
            return (
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl mb-4">Character not found</h2>
                </div>
            );
        }

        if (loading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#bee9e8]"></div>
                    <p className="ml-4">Loading character details...</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="character-image-container">
                    {character.image ? (
                        <img
                            src={character.image}
                            alt={character.name}
                            className="rounded-lg w-full h-auto object-cover shadow-lg"
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'block';
                            }}
                        />
                    ) : null}
                    <ImageIcon 
                        size={64} 
                        className="text-[#bee9e8] hidden"
                        style={{ display: character.image ? 'none' : 'block' }}
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
                                            <span className="font-medium">Husband(s): </span>
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
        );
    };

    return (
        <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => navigate('/mahaabhaaratham/characters')}
                    className="hover-underline-animation mb-8"
                >
                    ← Back to Characters
                </button>

                <div className="text-center mb-8">
                    <CharacterHeader />
                </div>
                
                {renderContent()}
            </div>
        </div>
    );
};

export default CharacterDetails;