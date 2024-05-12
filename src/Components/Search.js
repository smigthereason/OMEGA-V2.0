import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";




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
  }
  //  [sortOption, searchResults]
);

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

  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating * 10) / 10; // Round off to 1 decimal place
    const stars = [];
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars > 0 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (halfStar === 1) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
  
    return (
      <div className="flex">
        {stars.map((star, index) => (
          <div key={index} className="flex items-center text-center justify-between">
            {star}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-black">
    <div className="container mt-4 ml-6 mr-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-96 mt-2 mb-2"
          placeholder="Search for games..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch();
          }}
        />
        <button
          className="ml-4 px-6 py-2  text-white rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={() => {
            handleSearch();
            setDefaultResults([]);
          }}
        >
          <BsSearch size={24} />
        </button>

        <div className="flex justify-center mb-4">
        <label className="mr-2 mt-4 ml-2 text-white ">Sort By:</label>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 mt-3 focus:outline-none focus:ring focus:border-blue-300"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
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
              className="mt-2 h-40 w-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-2 mb-2">{game.name}</h3>
            <div className="flex justify-center mb-2">
              {game.platforms &&
                game.platforms.map((platform) => (
                  <span
                    key={platform.platform.id}
                    className="flex items-center justify-center mb-2 ml-2 gap-3"
                  >
                    {getPlatformIcon(platform.platform.name)}
                  </span>
                ))}
            </div>
            <p className="text-center text-white ml-40 mb-2 ">
              {renderRatingStars(game.rating)}
            </p>

            <p className="text-sm text-gray-600">
              Release Date:{game.released}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchPage;
