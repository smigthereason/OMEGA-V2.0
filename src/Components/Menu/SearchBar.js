import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Menu.css";

const API_KEY= process.env.REACT_APP_RAWG_API_KEY


const SearchBar = ({ setFilteredGames }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=API_KEY&search=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }
      const data = await response.json();
      setFilteredGames(data.results || []);
    } catch (error) {
      console.error("Error searching games:", error);
    }
  };

  return (
    <div className="flex justify-center mb-2 ">
      <input
        type="search"
        placeholder="Search games"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border px-4 py-2 rounded text-black"
        style={{ '::placeholder': { color: '#4B5563' } }} 
      />
      <button
        className="bg-blue-300 hover:bg-blue-200/90 p-2 py-2 rounded border"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
