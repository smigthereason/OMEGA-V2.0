import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

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
      <div className="flex justify-center">
        {stars.map((star, index) => (
          <div key={index} className="flex items-center">
            {star}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#292929] pb-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 pt-4">
        {/* Top bar: back + search + sort */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">

          <Link
            to="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 transition shrink-0"
            aria-label="Back to home"
          >
            <RiArrowGoBackFill size={22} />
          </Link>

          <div className="flex-1 flex flex-col sm:flex-row gap-2">
            <div className="flex flex-1">
              <input
                type="text"
                className="flex-1 border border-gray-600 px-4 py-2 lg:py-2.5 rounded-l-md text-sm lg:text-base"
                placeholder="Search for games..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch();
                }}
              />
              <button
                className="px-4 rounded-r-md bg-teal-600 hover:bg-teal-500 text-white transition flex items-center justify-center"
                onClick={() => {
                  handleSearch();
                  setDefaultResults([]);
                }}
                aria-label="Search"
              >
                <BsSearch size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm lg:text-base">
              <label className="text-white/80 whitespace-nowrap">Sort:</label>
              <select
                className="border border-gray-600 rounded-md px-3 py-1.5 lg:py-2"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="random">Random</option>
                <option value="released">Released</option>
                <option value="genre">Genre</option>
                <option value="rating">Rating</option>
                <option value="platforms">Platform</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-5">
          {(searchQuery && searchResults.length > 0
            ? searchResults
            : defaultResults
          ).map((game) => (
            <div
              key={game.id}
              className="border border-gray-700 bg-[#1a1a1a] p-3 lg:p-4 rounded-xl text-center text-white flex flex-col"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="mt-1 h-32 sm:h-36 lg:h-40 w-full object-cover rounded-lg"
              />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-2 mb-1 line-clamp-1">{game.name}</h3>

              {/* Consistent height for console icons */}
              <div className="flex justify-center mb-1 gap-2 flex-wrap min-h-[24px]">
                {game.platforms?.map((platform) => (
                  <span
                    key={platform.platform.id}
                    className="flex items-center justify-center text-lg lg:text-xl"
                  >
                    {getPlatformIcon(platform.platform.name)}
                  </span>
                ))}
              </div>

              {/* Stars at center bottom */}
              <div className="mt-auto mb-1 flex justify-center">
                {renderRatingStars(game.rating)}
              </div>

              <p className="text-[10px] lg:text-xs text-gray-400">
                {game.released ? `Released: ${game.released}` : "Release date N/A"}
              </p>
            </div>
          ))}
        </div>

        {(!searchQuery || (searchQuery && searchResults.length === 0)) && defaultResults.length === 0 && (
          <p className="text-center text-gray-400 mt-8 text-sm">Start typing to search or view random games.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
