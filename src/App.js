import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import VideoBackground from "./Assets/Home .mp4";
import GameList from "./Components/GameList";
import Menu from "./Components/Menu/Menu";
import Discount from "./Components/Discount";
import Team from "./Components/Team";
import Sponsors from "./Components/Sponsors";
import "./App.css";

import Footer from "./Components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredGames] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className="App min-h-screen bg-[#292929]">
      <Navbar onMenuToggle={toggleMenu} />

      <div className="flex min-h-[calc(100vh-80px)] relative">
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />

        <div className="flex-1 min-w-0">
          {/* Full-bleed video hero with title only - clean, no overflowing grid */}
          <section className="video-section relative h-[60vh] min-h-[380px] md:h-[65vh] lg:h-[70vh]">
            <video
              src={VideoBackground}
              autoPlay
              loop
              muted
              playsInline
              className="video-background"
            />
            <div className="content-overlay text-white relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-7xl font-semibold tracking-[3px] drop-shadow-lg">
                LATEST RELEASES
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-white/80 max-w-md">
                Discover the newest titles from the world of Omega
              </p>
            </div>
          </section>

          {/* Dedicated Latest Releases grid section - solid background, proper flow */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 max-w-screen-2xl mx-auto pt-8 pb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-wide mb-4">Explore the latest titles</h2>
            <GameList games={filteredGames} />
          </section>

          <section className="discount-section px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 max-w-screen-2xl mx-auto">
            <Discount />
          </section>

          <div className="content-overlay text-white px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 max-w-screen-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center py-6 md:py-9 font-semibold tracking-wide">MEET THE OMEGA TEAM</h1>

            <div className="team-section">
              <Team />
            </div>
          </div>

          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
            <Sponsors />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
