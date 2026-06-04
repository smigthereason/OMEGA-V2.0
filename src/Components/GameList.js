import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import TextWithMarquee from "./TextWithMarquee";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const GameList = ({ filteredGames }) => {
  console.log("Games received in GameList:", filteredGames);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2023-12-31&ordering=-added&page_size=200`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGames();
  }, []);

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
    const roundedRating = Math.round(rating * 10) / 10; 
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

  // Limit to a reasonable number for the landing page grid (full list is available in Search)
  const displayGames = games.slice(0, 18);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
      {displayGames.map((game) => (
        <a
          key={game.id}
          className="bg-[#1f1f1f] bg-opacity-70 backdrop-blur shadow-lg rounded-xl overflow-hidden text-white border border-gray-700 hover:border-teal-500/60 transition flex flex-col"
          href="/login"
        >
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
          />
          <div className="p-3 lg:p-4 flex flex-col flex-1">
            <TextWithMarquee className="text-sm sm:text-base lg:text-lg font-semibold leading-tight mb-1.5 block">
              {game.name}
            </TextWithMarquee>

            {/* Consistent height for icons + genres so layout doesn't shift with varying # of platforms */}
            <div className="min-h-[52px] flex flex-col justify-center mb-1">
              <div className="flex items-center justify-center mb-1 gap-2 flex-wrap min-h-[24px]">
                {game.platforms?.map((platform) => {
                  const platformIcon = getPlatformIcon(platform.platform.name);
                  if (platformIcon) {
                    return (
                      <span key={platform.platform.id} className="text-lg lg:text-xl">{platformIcon}</span>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="text-xs lg:text-sm text-gray-400">
                <span className="block mb-0.5 text-[10px] lg:text-xs uppercase tracking-widest">Genres</span>
                <TextWithMarquee className="text-xs lg:text-sm">
                  {game.genres?.slice(0, 3).map((genre) => genre.name).join(", ")}
                </TextWithMarquee>
              </div>
            </div>

            {/* Stars pushed to center bottom of the card */}
            <div className="mt-auto pt-1 text-center">
              {renderRatingStars(game.rating)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};


export default GameList;
