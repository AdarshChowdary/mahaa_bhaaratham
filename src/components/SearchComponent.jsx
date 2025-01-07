import React from 'react';
import { Search, X } from 'lucide-react';

const SearchComponent = ({ searchQuery, onSearchChange, onClearSearch }) => {
    return (
        <div className="mb-8 relative w-full max-w-sm mx-auto flex items-center">
            <Search className="w-5 h-5 absolute left-2 text-[#62b6cb] pointer-events-none" />
            <input
                type="text"
                id="character-search"
                name="character-search"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={onSearchChange}
                className="bg-transparent border border-[#62b6cb] px-8 py-2 w-full placeholder:text-[#62b6cb] text-[#bee9e8] focus:outline-none focus:ring-2 focus:ring-[#62b6cb] transition-all duration-300"
            />
            {searchQuery && (
                <button 
                    onClick={onClearSearch}
                    aria-label="Clear search"
                    className="absolute right-2 text-[#62b6cb] hover:text-[#bee9e8] focus:outline-none transition-colors duration-300"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default SearchComponent;
