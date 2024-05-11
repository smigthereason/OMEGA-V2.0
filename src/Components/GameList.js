// import React, { useState, useEffect } from "react";
// import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
// import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
// import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import TextWithMarquee from "./TextWithMarquee";

// const API_KEY= process.env.REACT_APP_RAWG_API_KEY

// const GameList = ({ filteredGames }) => {
//   console.log("Games received in GameList:", filteredGames);
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await fetch(
//           `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2023-12-31&ordering=-added&page_size=200`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok.");
//         }
//         const data = await response.json();
//         setGames(data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchGames();
//   }, []);

//   const getPlatformIcon = (platformName) => {
//     switch (platformName.toLowerCase()) {
//       case "pc":
//         return <FaWindows size={24} />;
//       case "playstation 5":
//         return <SiPlaystation5 size={24} />;
//       case "playstation 4":
//         return <SiPlaystation4 size={24} />;
//       case "xbox series s/x":
//         return <FaXbox size={24} />;
//       case "nintendo switch":
//         return <BsNintendoSwitch size={24} />;
//       case "macos":
//         return <FaApple size={24} />;
//       case "android":
//         return <BsAndroid2 size={24} />;
//       case "linux":
//         return <FaLinux size={24} />;
//       default:
//         return null;
//     }
//   };
//   const renderRatingStars = (rating) => {
//     const roundedRating = Math.round(rating * 10) / 10; // Round off to 1 decimal place
//     const stars = [];
//     const fullStars = Math.floor(roundedRating);
//     const halfStar = roundedRating - fullStars > 0 ? 1 : 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={i} className="text-yellow-500" />);
//     }
//     if (halfStar === 1) {
//       stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
//     }

//     return (
//       <div className="flex">
//         {stars.map((star, index) => (
//           <div
//             key={index}
//             className="flex items-center text-center justify-between"
//           >
//             {star}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
    
//     <div className="grid grid-cols-4 gap-4">
//       {games.map((game) => (
//         <a
//           key={game.id}
//           className="bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden text-white border-2 border-gray-500"
//           href="/login"
//         >
//           <img
//             src={game.background_image}
//             alt={game.name}
//             className="w-full h-48 object-cover object-center px-4 py-4 rounded-xl"
//           />
//           <div className="p-4 flex flex-col justify-between items-center">
//             <div>
//               {/* <h2 className="text-xl font-semibold mb-2">{game.name}</h2> */}
//               <TextWithMarquee className="text-xl font-semibold mb-2">
//                 {game.name}
//               </TextWithMarquee>
//               <div className="flex items-center justify-center mb-2 gap-3">
//                 {game.platforms.map((platform) => {
//                   const platformIcon = getPlatformIcon(platform.platform.name);
//                   if (platformIcon) {
//                     return (
//                       <span key={platform.platform.id}>{platformIcon}</span>
//                     );
//                   }
//                   return null;
//                 })}
//               </div>
//               <div className="my-4">
//                 <p className="text-white">Genres:</p>
//                 <TextWithMarquee>
//                   {game.genres.map((genre) => genre.name).join(", ")}
//                 </TextWithMarquee>
//                 {/* <p className={`marquee-text ${isMarquee ? 'animate-marquee whitespace-nowrap' : ''}`}>{game.genres.map((genre) => genre.name).join(", ")}</p> */}
//               </div>
//             </div>
//             <p className="text-center text-white mb-2 ">
//               {renderRatingStars(game.rating)}
//             </p>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default GameList;

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
    <div className="grid grid-cols-4 gap-4">
      {games.map((game) => (
        <a key={game.id} className="game-card" href="/login">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-48 object-cover object-center px-4 py-4 rounded-xl"
            loading="lazy"
          />
          <div className="p-4">
            <TextWithMarquee className="text-xl font-semibold mb-2">
              {game.name}
            </TextWithMarquee>
            <div className="flex items-center justify-center mb-2 gap-3">
              {game.platforms.map((platform, index) => {
                const platformIcon = getPlatformIcon(platform.platform.name);
                return platformIcon && (
                  <span key={index}>{platformIcon}</span>
                );
              })}
            </div>
            <div className="my-4">
              <p className="text-white">Genres:</p>
              <TextWithMarquee>
                {game.genres.map((genre) => genre.name).join(", ")}
              </TextWithMarquee>
            </div>
            <p className="text-center text-white">
              {renderRatingStars(game.rating)}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GameList;
