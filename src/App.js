// import React, { useState } from "react";
// import Navbar from "./Components/Navbar";
// import VideoBackground from "./Assets/4k.mp4";
// import GameList from "./Components/GameList";
// import Discount from "./Components/Discount";
// import Sponsors from "./Components/Sponsors";
// import "./App.css"; // Import CSS for styling

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className="App">
//       <Navbar onMenuToggle={toggleMenu} />
//       <div className={`content-wrapper ${isMenuOpen ? "pushed" : ""}`}>
//         <section className="video-section">
//           <video
//             src={VideoBackground}
//             autoPlay
//             loop
//             muted
//             className="video-background"
//           />
//           <div className="content-overlay text-white">
//             <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
//             <div className="game-list-section">
//               <GameList />
//             </div>
//             <div className="discount-section">
//               <Discount />
//             </div>

//             <Sponsors />
//           </div>
//         </section>
//       </div>
//       {/* Render the Menu component */}
//       {/* <Menu isOpen={isMenuOpen} onClose={toggleMenu} /> */}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import VideoBackground from "./Assets/Home .mp4";
import GameList from "./Components/GameList";
import Menu from "./Components/Menu/Menu";
import Discount from "./Components/Discount";
import Sponsors from "./Components/Sponsors";
import "./App.css"; // Import CSS for styling
import SearchBar from "./Components/Menu/SearchBar";
import Footer from "./Components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle search
  const handleSearch = async (searchQuery) => {
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
    <div className="App">
      {/* <Nav /> */}
      <Navbar onMenuToggle={toggleMenu} />
      <div className="flex">
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      {/* <div className={`content-wrapper ${isMenuOpen ? "pushed" : ""}`}> */}
      <div className="flex-1">
        <section className="video-section">
          <video
            src={VideoBackground}
            autoPlay
            loop
            muted
            className="video-background"
          />
          <div className="content-overlay text-white">
            <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
            {/* Pass handleSearch function to SearchBar */}
            {/* <SearchBar onSearch={handleSearch} />*/}
            {/* Pass filteredGames to GameList */}
            <div className="game-list-section px-4">
              <GameList games={filteredGames} />
            </div>
          </div>
        </section>
        <section className="discount-section">
          <Discount />
        </section>

         <div>
          <div className="h-screen"></div>
          <Footer />
        </div>

        {/* <Sponsors /> */}
      </div>
      </div>
    </div>
  );
};

export default App;
