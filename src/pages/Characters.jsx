import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
    const scrollRefs = useRef([]);
    const navigate = useNavigate();
    const [charactersData, setCharactersData] = useState([]);
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        
        const storedCharacters = localStorage.getItem('mahabharathamCharacters');
        if (storedCharacters) {
            const parsedData = JSON.parse(storedCharacters);
            setCharactersData(parsedData);
            console.log('Using stored data:', parsedData);
        } else {
            fetchCharacters();
        }
        
        dataFetchedRef.current = true;
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/mahaabhaarathaam/characters');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            if (data.success) {
                setCharactersData(data.data);
                localStorage.setItem('mahabharathamCharacters', JSON.stringify(data.data));
                console.log('Fetched and stored new data:', data.data);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    const handleCharacterClick = (character) => {
        navigate(`/mahaabhaaratham/characters/${character.name.toLowerCase()}`, {
            state: { character }
        });
    };
    
    useEffect(() => {
        const scrollSpeeds = [0.75, 0.25, 0.75, 0.25];
        const scrollIntervals = scrollRefs.current.map((ref, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            return setInterval(() => {
                if (ref) {
                    ref.scrollTop += direction * scrollSpeeds[index];
                    if (ref.scrollTop === 0 && direction === -1) {
                        ref.scrollTop = ref.scrollHeight;
                    } else if (ref.scrollTop >= ref.scrollHeight && direction === 1) {
                        ref.scrollTop = 0;
                    }
                }
            }, 16);
        });

        return () => scrollIntervals.forEach(clearInterval);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#1b4965] text-[#bee9e8]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center py-10 gap-5">
                <div className="heading-container text-center mb-8">
                    <h2 className="fancy-heading text-4xl font-bold">Character Profiles</h2>
                    <div className="heading-underline"></div>
                    <p className="text-lg mt-4">More characters coming soon.</p>
                    <p className="text-lg mt-2">अधिक पात्र शीघ्र आ रहे हैं।</p>
                </div>
                <div className="my-masonry-grid">
                    {[...Array(4)].map((_, colIndex) => (
                        <div
                            key={colIndex}
                            ref={(el) => (scrollRefs.current[colIndex] = el)}
                            className="my-masonry-grid_column"
                        >
                            {charactersData.map((character, index) => (
                                <div 
                                    key={`${colIndex}-${index}`} 
                                    className="character-card"
                                    onClick={() => handleCharacterClick(character)}
                                >
                                    <div className="image-container">
                                        <img
                                            src={character.image}
                                            alt={character.name}
                                            className="character-image"
                                            style={{
                                                height: `${Math.floor(Math.random() * 100) + 150}px`,
                                            }}
                                        />
                                        <div className="image-overlay">
                                            <span className="character-name">{character.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Characters