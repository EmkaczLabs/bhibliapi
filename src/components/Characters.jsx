import React, { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://ghibliapi.vercel.app/people");
      if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`);
      }
      const data = await response.json();
      
      // Make sure we have all the required fields to display
      const processedData = data.map(character => ({
        ...character,
        gender: character.gender || "Unknown",
        eye_color: character.eye_color || "Unknown",
        hair_color: character.hair_color || "Unknown"
      }));
      
      setCharacters(processedData);
      setError(null);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setError("Failed to load characters. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="characters-container">
      <header className="app-header">
        <h1>Studio Ghibli Characters</h1>
      </header>

      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading characters...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <div className="error-icon">!</div>
          <p>{error}</p>
          <button className="retry-button" onClick={fetchCharacters}>
            Try Again
          </button>
        </div>
      )}

      <div className="characters-grid">
        {characters.map((character) => (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            gender={character.gender}
            eye_color={character.eye_color}
            hair_color={character.hair_color}
          />
        ))}
      </div>

    </div>
  );
}

export default Characters;