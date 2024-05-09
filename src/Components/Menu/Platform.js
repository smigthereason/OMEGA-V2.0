// import React, { useState, useEffect } from "react";
// import { FaChevronCircleRight } from "react-icons/fa";
// import classNames from "classnames";

// const Platforms = ({ onSelectPlatform }) => {
//   const [platforms, setPlatforms] = useState([]);
//   const [showPlatforms, setShowPlatforms] = useState(false);

//   useEffect(() => {
//     const fetchPlatforms = async () => {
//       try {
//         const response = await fetch("https://api.rawg.io/api/platforms?key=6e2c3d10b67342d8a5dac993f10b5393");
//         if (!response.ok) {
//           throw new Error("Failed to fetch platforms");
//         }
//         const data = await response.json();
//         setPlatforms(data.results || []);
//       } catch (error) {
//         console.error("Error fetching platforms:", error);
//       }
//     };

//     fetchPlatforms();
//   }, []);

//   return (
//     <div className="platform-dropdown">
//     <h3
//         className={classNames(
//           "flex items-center cursor-pointer transition-transform duration-700 hover:text-xl hover:text-amber-500"

          
//         )}
//         onClick={() => setShowPlatforms(!showPlatforms)}
//       >
//         <FaChevronCircleRight
//           className={classNames("mr-2", {
//             "transform rotate-90": showPlatforms,
//             "transition-transform duration-300": true,
            
//           })}
//         />
//         Platforms
//       </h3>
//       {showPlatforms && (
//         <ul className="mt-2">
//           {platforms.map((platform) => (
//             <li
//               key={platform.id}
//               className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1"
//               onClick={() => onSelectPlatform(platform)}
//             >
//               {platform.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Platforms;
import React, { useState, useEffect } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import classNames from "classnames";

const Platform = ({ onSelectPlatform }) => {
  const [platforms, setPlatforms] = useState([]);
  const [showPlatforms, setShowPlatforms] = useState(false);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await fetch("https://api.rawg.io/api/platforms?key=6e2c3d10b67342d8a5dac993f10b5393");
        if (!response.ok) {
          throw new Error("Failed to fetch platforms");
        }
        const data = await response.json();
        setPlatforms(data.results || []);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      }
    };

    fetchPlatforms();
  }, []);

  return (
    <div className="platform-dropdown">
      <h3
        className={classNames(
          "flex items-center text-white cursor-pointer transition-transform duration-300 hover:text-xl hover:text-amber-500",
          
          
        )}
        onClick={() => setShowPlatforms(!showPlatforms)}
      >
        <FaChevronCircleRight
          className={classNames("mr-2", {
            "transform rotate-90": showPlatforms,
            "transition-transform duration-300": true,
            
          })}
        />
        Platforms
      </h3>
      {showPlatforms && (
        <ul className="mt-2">
          {platforms.map((platform) => (
            <li
              key={platform.id}
              className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1"
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Platform;



