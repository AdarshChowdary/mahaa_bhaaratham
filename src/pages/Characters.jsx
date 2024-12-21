import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import characters from "../data/characters";

const Characters = () => {
    const scrollRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const scrollSpeeds = [0.7, 0.4, 0.7, 0.4];
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

        return () => {
            scrollIntervals.forEach((interval) => clearInterval(interval));
        };
    }, []);

    const handleCharacterClick = (characterName) => {
        navigate(`/mahaabhaaratham/characters/${characterName.toLowerCase()}`);
    };

    return (
        <div className="w-full min-h-screen bg-[#1b4965] text-[#bee9e8]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center py-10 gap-5">
                <div className="heading-container text-center mb-8">
                    <h2 className="fancy-heading text-4xl font-bold">
                        Character Profiles
                    </h2>
                    <div className="heading-underline"></div>
                    <p className="text-lg mt-4">More characters coming soon.</p> {/* English text */}
                    <p className="text-lg mt-2">अधिक पात्र शीघ्र आ रहे हैं।</p> {/* Sanskrit text */}
                </div>
                <div className="my-masonry-grid">
                    {[...Array(4)].map((_, colIndex) => (
                        <div
                            key={colIndex}
                            ref={(el) => (scrollRefs.current[colIndex] = el)}
                            className="my-masonry-grid_column"
                        >
                            {characters.concat(characters).map((character, index) => (
                                <div 
                                    key={`${colIndex}-${index}`} 
                                    className="character-card"
                                    onClick={() => handleCharacterClick(character.name)}
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

export default Characters;