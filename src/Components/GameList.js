import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt  } from "react-icons/fa";

const GameList = ({filteredGames}) => {
  console.log("Games received in GameList:", filteredGames)
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&dates=2021-01-01,2023-12-31&ordering=-added&page_size=200"
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
        return <FaWindows />;
      case "playstation 5":
        return <SiPlaystation5 />;
      case "playstation 4":
        return <SiPlaystation4 />;
      case "xbox series s/x":
        return <FaXbox />;
      case "nintendo switch":
        return <BsNintendoSwitch />;
      case "macos":
        return <FaApple />;
      case "android" :
        return <BsAndroid2 />;
      case "linux":
        return <FaLinux />;
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
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar === 1) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
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
    <div className="grid grid-cols-1 ps-4 pr-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden text-white"
        >
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-48 object-cover object-center px-4 py-4 rounded-xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <div className="flex items-center mb-2">
              <span className="text-white mr-2">Platforms:</span>
              {game.platforms.map((platform) => (
                <span key={platform.platform.id} className="flex h-4 w-6">
                  {getPlatformIcon(platform.platform.name)}
                </span>
              ))}
            </div>
            <p className=" text-white mb-2">
              Genres: {game.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-white mb-2 ">
              Rating: {renderRatingStars(game.rating)}
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;

