// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./Menu.css"

// const SearchBar = ({ setFilteredGames }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&search=${searchQuery}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch games");
//       }
//       const data = await response.json();
//       setFilteredGames(data.results || []);
//     } catch (error) {
//       console.error("Error searching games:", error);
//     }
//   };

//   return (


  
//       <div className="flex justify-center mb-2 ">
//         <input
//           type="search"
//           placeholder="Search games"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border px-4 py-2 rounded text-black"
//           style={{ '::placeholder': { color: '#4B5563' } }} // Set placeholder color to gray-700
//         />
//         <button
//           className="bg-blue-300 hover:bg-blue-200/90 p-2 py-2 rounded border"
//           onClick={handleSearch}
//         >
//           <FaSearch />
//         </button>
//       </div>
    
    
    
    
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Menu.css";

const SearchBar = ({ setFilteredGames }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&search=${searchQuery}`
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
        style={{ '::placeholder': { color: '#4B5563' } }} // Set placeholder color to gray-700
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
