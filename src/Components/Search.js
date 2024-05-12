import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";



const API_KEY= process.env.REACT_APP_RAWG_API_KEY


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState("random");
  const [defaultResults, setDefaultResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error("Error searching games:", error);
      }
    }, 500);
        setSearchTimeout(timeout);
  };

  useEffect(() => {
    if (sortOption === "random") {
      fetchRandomGames();
    } else {
      sortSearchResults();
    }
  }, [sortOption, searchResults]);

  const fetchRandomGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-01,2024-01-31&ordering=-added&page_size=30`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch random games");
      }
      const data = await response.json();
      setDefaultResults(data.results || []);
    } catch (error) {
      console.error("Error fetching random games:", error);
    }
  };

  const sortSearchResults = () => {
    let sortedResults = [...searchResults];
    switch (sortOption) {
      case "released":
        sortedResults.sort(
          (a, b) => new Date(b.released) - new Date(a.released)
        );
        break;
      case "genre":
        sortedResults.sort((a, b) =>
          a.genres[0]?.name.localeCompare(b.genres[0]?.name)
        );
        break;
      case "rating":
        sortedResults.sort((a, b) => b.rating - a.rating);
        break;
      case "platforms":
        sortedResults.sort((a, b) =>
          a.platforms[0]?.platform.name.localeCompare(
            b.platforms[0]?.platform.name
          )
        );
        break;
      default:
        break;
    }
    setSearchResults(sortedResults);
  };

  const getPlatformIcon = (platformName) => {
    switch (platformName.toLowerCase()) {
      case "pc":
        return <FaWindows size={24} />;
      case "playstation 5":
        return <SiPlaystation5 size={24} />;
      case "playstation 4":
        return <SiPlaystation4 size={24} />;
      case "xbox series s/x":
        return <FaXbox size={24} />;
      case "nintendo switch":
        return <BsNintendoSwitch size={24} />;
      case "macos":
        return <FaApple size={24} />;
      case "android":
        return <BsAndroid2 size={24} />;
      case "linux":
        return <FaLinux size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="container bg-black   ">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-96"
          placeholder="Search for games..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch();
          }}
        />
        <button
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => {
            handleSearch();
            setDefaultResults([]);
          }}
        >
          Search
        </button>

        <div className="flex justify-center mb-4">
        <label className="mr-2 ">Sort Search Results By:</label>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 mt-2 focus:outline-none focus:ring focus:border-blue-300"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="random">Random</option>
          <option value="released">Released</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
        
        </select>
      </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 w-auto">
        {(searchQuery && searchResults.length > 0
          ? searchResults
          : defaultResults
        ).map((game) => (
          <div
            key={game.id}
            className="border border-gray-300 p-4 rounded-md  text-center text-white"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="mt-2 h-50 w-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-2 mb-2">{game.name}</h3>
            <div className="flex justify-center mb-2">
              {game.platforms &&
                game.platforms.map((platform) => (
                  <span
                    key={platform.platform.id}
                    className="flex items-center justify-center mb-2 ml-1 gap-3"
                  >
                    {getPlatformIcon(platform.platform.name)}
                  </span>
                ))}
            </div>
            <p className="text-sm text-gray-600">
              Release Date:{game.released}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
