import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

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

const Discount = () => {
  const [games, setGames] = useState([]);

  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating * 10) / 10; // Round off to 1 decimal place
    const stars = [];
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars > 0 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar === 1) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
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

  const calculateDiscount = (rating) => {
    const maxDiscount = 40;
    const minDiscount = 15;
    // Assuming rating ranges from 0 to 5
    const percentage = (rating / 5) * (maxDiscount - minDiscount) + minDiscount;
    return Math.round(percentage); // Round off the percentage
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&dates=2016-01-01,2022-12-31&ordering=-added&page_size=40&genres=sports,action,arcade,racing`,
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

  // Responsive grid of deal cards. Simplified for cross-screen reliability.
  // Limit items so the section doesn't become endless on desktop.
  const displayDeals = games.slice(0, 12);

  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-wide">
          HOT DEALS
        </h2>
        <div className="hidden sm:flex gap-2 text-teal-400">
          <span className="text-xs uppercase tracking-[2px]">Limited time</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {displayDeals.map((game) => (
          <div
            key={game.id}
            className="bg-[#111] p-3 sm:p-4 lg:p-5 rounded-xl shadow-md text-center flex flex-col border border-gray-800 hover:border-teal-600/50 transition"
          >
            <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-black">
              <img
                src={
                  game.background_image ||
                  (game.short_screenshots && game.short_screenshots[0]?.image)
                }
                alt={game.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/70 text-emerald-400 text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded">
                -{calculateDiscount(game.rating)}%
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white line-clamp-2 mb-1.5 uppercase tracking-wide leading-tight">
                {game.name}
              </h3>

              {/* Consistent height for console icons */}
              <div className="flex items-center justify-center mb-1.5 gap-1.5 flex-wrap min-h-[24px]">
                {game.platforms?.slice(0, 4).map((platform, idx) => {
                  const platformIcon = getPlatformIcon(platform.platform.name);
                  if (platformIcon) {
                    return (
                      <span
                        key={idx}
                        className="text-base lg:text-lg text-white"
                      >
                        {platformIcon}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Stars at center bottom (pushed above buttons) */}
              <div className="mt-auto mb-1 flex justify-center">
                {renderRatingStars(game.rating)}
              </div>

              {/* Equal sized buttons */}
              <div className="pt-1 grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="text-center text-[10px] sm:text-xs lg:text-sm bg-teal-400 hover:bg-teal-500 active:bg-teal-600 transition text-white py-1 px-2 sm:py-1.5 sm:px-3 rounded-md font-medium"
                >
                  PLAY NOW
                </Link>
                <Link
                  to="/signup"
                  className="text-center text-[10px] sm:text-xs lg:text-sm bg-white/90 hover:bg-white text-black py-1 px-2 sm:py-1.5 sm:px-3 rounded-md font-medium transition"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
