import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterAndGroupCharacters } from '@/utils/searchUtils';
import { handleLetterClick } from '@/utils/handleLetterClick';
import AlphabetNavigation from '@/components/AlphabetNavigation';
import SearchComponent from '@/components/SearchComponent';
import CharacterHeader from '@/components/CharacterHeader';
import RandomCharacter from '@/components/RandomCharacter';
import AlertNotification from '@/components/AlertNotification';
import CharacterList from '@/components/CharacterList';
import NoResults from '@/components/NoResults';
import ResolveUrl from '@/utils/ResolveUrl';

const Characters = () => {
    const [charactersData, setCharactersData] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [currentLetter, setCurrentLetter] = useState('');
    const [isShuffling, setIsShuffling] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fullAlphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(ResolveUrl('/api/mahaabhaarathaam/characters'));
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            if (data.success) {
                setCharactersData(data.data);
                console.log(data.data)
            }
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const groupedCharacters = filterAndGroupCharacters(charactersData, searchQuery);

    const handleCharacterClick = (character) => {
        navigate(`/mahaabhaaratham/characters/${character.name.toLowerCase()}`);
    };

    const handleRandomCharacter = async () => {
        if (charactersData.length === 0 || isShuffling) return;
        
        setIsShuffling(true);
        
        let shuffleCount = 0;
        const shuffleInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * charactersData.length);
            setSelectedLetter(charactersData[randomIndex].name[0].toUpperCase());
            shuffleCount++;
            
            if (shuffleCount >= 10) {
                clearInterval(shuffleInterval);
                const finalCharacter = charactersData[Math.floor(Math.random() * charactersData.length)];
                setIsShuffling(false);
                handleCharacterClick(finalCharacter);
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => navigate('/mahaabhaaratham')}
                    className="hover-underline-animation mb-8"
                >
                    ← Back to The MahaaBhaaratham
                </button>
                <div className="text-center mb-12">
                    <CharacterHeader />
                    
                    <SearchComponent 
                        searchQuery={searchQuery} 
                        onSearchChange={(e) => {
                            setSearchQuery(e.target.value);
                            setSelectedLetter(null);
                        }}
                        onClearSearch={() => setSearchQuery('')}
                    />

                    <RandomCharacter
                        onClick={handleRandomCharacter}
                        isShuffling={isShuffling}
                    />
                    
                    <AlertNotification
                        show={showAlert}
                        letter={currentLetter}
                        onClose={() => setShowAlert(false)}
                    />

                    <AlphabetNavigation 
                        fullAlphabet={fullAlphabet}
                        selectedLetter={selectedLetter}
                        groupedCharacters={groupedCharacters}
                        onLetterClick={(letter) => handleLetterClick(letter, groupedCharacters, setSelectedLetter, setShowAlert, setCurrentLetter)}
                    />

                    {isLoading ? (
                        <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#bee9e8]"></div>
                            </div>
                            <div className="max-w-4xl mx-auto px-4">
                                <p className="text-center">Loading characters...</p>
                            </div>
                        </div>
                    ) : (
                        Object.keys(groupedCharacters).length > 0 ? (
                            <CharacterList 
                                groupedCharacters={groupedCharacters}
                                onCharacterClick={handleCharacterClick}
                            />
                        ) : (
                            <NoResults />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Characters