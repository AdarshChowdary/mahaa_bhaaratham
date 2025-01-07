import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { filterCharacters } from '@/utils/searchUtils';
import CharacterHeader from '../components/CharacterHeader';
import SearchComponent from '@/components/SearchComponent';
import ResolveUrl from '@/utils/ResolveUrl';

const LetterGroupView = () => {
    const { letter } = useParams();
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchCharacters();
    }, [letter]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(ResolveUrl('/api/mahaabhaarathaam/characters'));
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            if (data.success) {
                const letterCharacters = data.data
                    .filter(char => char.name[0].toUpperCase() === letter.toUpperCase())
                    .sort((a, b) => a.name.localeCompare(b.name));
                setCharacters(letterCharacters);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    const filteredCharacters = filterCharacters(characters, searchQuery);

    return (
        <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
            <div className="max-w-4xl mx-auto px-4">
                <button 
                    onClick={() => navigate('/mahaabhaaratham/characters')}
                    className="hover-underline-animation mb-4"
                >
                    ← Back to Characters
                </button>

                <div className='text-center'>
                    <CharacterHeader/>
                    
                    <div className="mt-6 mb-8">
                        <SearchComponent 
                            searchQuery={searchQuery} 
                            onSearchChange={(e) => setSearchQuery(e.target.value)}
                            onClearSearch={() => setSearchQuery('')}
                        />
                    </div>
                </div>

                {loading ? 
                    <div className="min-h-screen bg-[#1b4965] text-[#bee9e8] py-10">
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#bee9e8]"></div>
                        </div>
                        <div className="max-w-4xl mx-auto px-4">
                            <p className="text-center">Loading characters...</p>
                        </div>
                    </div>   
                    :
                    <>
                    <h1 className="text-2xl font-bold mb-8">
                        Characters Starting With '{letter}'
                        <span className="text-[#62b6cb] text-lg ml-2">
                            ({filteredCharacters.length} of {characters.length} characters)
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {filteredCharacters.map((character) => (
                            <Link
                            key={character.name}
                            to={`/mahaabhaaratham/characters/${character.name.toLowerCase()}`}
                            className="p-4 border border-[#62b6cb] hover:bg-[#62b6cb] hover:text-[#1b4965] 
                            transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg">{character.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredCharacters.length === 0 && (
                        <p className="text-center text-lg text-[#62b6cb]">
                            {searchQuery 
                                ? `No characters found matching '${searchQuery}'` 
                                : `No characters found starting with '${letter}'`
                            }
                        </p>
                    )}
                </>
                }
            </div>
        </div>
    );
};

export default LetterGroupView;