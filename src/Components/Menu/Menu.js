// // // import React, { useState } from "react";
// // import "./Menu.css";
// // import { TiArrowBack } from "react-icons/ti";
// // import Genre from "./Genre";
// // import Platform from "./Platform";
// // import SearchBar from "./SearchBar";

// // const Menu = ({ isOpen, onClose }) => {
// //   const handleGenreSelect = (genre) => {
// //     console.log("Selected genre:", genre);
// //     // You can perform further actions with the selected genre here
// //   };

// //   const handlePlatformSelect = (platform) => {
// //     console.log("Selected platform:", platform);
// //     // You can perform further actions with the selected platform here
// //   };

// //   const handleSearchResults = (results) => {
// //     console.log("Filtered games:", results);
// //     // Perform actions with filtered games here, such as updating state
// //   };

// //   return (
// //     <>
// //       {isOpen && <div className="backdrop" onClick={onClose}></div>}
// //       <div className={`menu ${isOpen ? "open" : ""}`}>
// //         <div className="menu-header">
// //           <button onClick={onClose}>
// //             <TiArrowBack className="size-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-white" />
// //           </button>
// //         </div>
// //         <div className="menu-content">
// //           <SearchBar setFilteredGames={handleSearchResults} />
// //           <Genre onSelectGenre={handleGenreSelect} />
// //           <Platform onSelectPlatform={handlePlatformSelect}/>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Menu;

// // Menu.js
// import React, { useState } from "react";
// import "./Menu.css";
// import { TiArrowBack } from "react-icons/ti";
// import Genre from "./Genre";
// import Platform from "./Platform";
// import SearchBar from "./SearchBar";
// // import { useHistory } from "react-router-dom";

// const Menu = ({ isOpen, onClose }) => {
//   // const history = useHistory();

//   const handleGenreSelect = (genre) => {
//     console.log("Selected genre:", genre);
//     // You can perform further actions with the selected genre here
//   };

//   const handlePlatformSelect = (platform) => {
//     console.log("Selected platform:", platform);
//     // You can perform further actions with the selected platform here
//   };

//   const handleSearchResults = (results) => {
//     console.log("Filtered games:", results);
//     // Redirect to search results page
//     // history.push("/search-results");
//   };

//   return (
//     <>
//       {isOpen && <div className="backdrop" onClick={onClose}></div>}
//       <div className={`menu ${isOpen ? "open" : ""}`}>
//         <div className="menu-header">
//           <button onClick={onClose}>
//             <TiArrowBack className="size-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-white" />
//           </button>
//         </div>
//         <div className="menu-content">
//           <SearchBar setFilteredGames={handleSearchResults} />
//           <Genre onSelectGenre={handleGenreSelect} />
//           <Platform onSelectPlatform={handlePlatformSelect} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    // { name: "user", link: "/", icon: AiOutlineUser },
    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/settings", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div> */}
    </section>
  );
};

export default Menu;
