export const handleLetterClick = (letter, groupedCharacters, setSelectedLetter, setShowAlert, setCurrentLetter) => {
    setSelectedLetter(letter);

    const hasCharacters = groupedCharacters[letter]?.length > 0;
    
    if (!hasCharacters) {
        setCurrentLetter(letter);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        return;
    }

    document.getElementById(`letter-${letter}`)?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
};