import React from 'react';

const CharacterHeader = () => (
    <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#bee9e8] mb-2">
            The MahaaBhaaratham Characters
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#62b6cb] to-transparent"></div>
            <span className="text-[#62b6cb] font-light text-lg">महाभारतम् के पात्र</span>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#62b6cb] to-transparent"></div>
        </div>
    </div>
);

export default CharacterHeader;