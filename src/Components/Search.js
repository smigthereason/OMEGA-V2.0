import React, { useState } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&search=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error("Error searching games:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-96"
          placeholder="Search for games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((game) => (
          <div key={game.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{game.name}</h3>
            <p className="text-sm text-gray-600">{game.released}</p>
            <img src={game.background_image} alt={game.name} className="mt-2 h-32 w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
