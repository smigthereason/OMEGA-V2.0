import React from "react";
import Logo from "../Assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="bg-black sticky top-0 z-40 w-full">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-3 items-center px-3 sm:px-4 lg:px-8 py-2">
        {/* Left: Hamburger */}
        <div className="justify-self-start">
          <HiMenuAlt1
            className="cursor-pointer text-white text-3xl lg:text-4xl hover:text-teal-400 transition"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          />
        </div>

        {/* Center: Logo (perfectly centered on all sizes) */}
        <div className="justify-self-center">
          <Link to="/" className="flex items-center text-white">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto transition ease-in-out hover:-translate-y-0.5 hover:scale-105 duration-300"
            />
          </Link>
        </div>

        {/* Right: Auth links */}
        <div className="justify-self-end flex items-center gap-1 sm:gap-2 text-sm sm:text-base lg:text-lg">
          <Link
            to="/login"
            className="text-white py-1.5 px-3 sm:py-2 sm:px-5 lg:py-2.5 lg:px-6 rounded-md hover:bg-white/10 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white py-1.5 px-3 sm:py-2 sm:px-5 lg:py-2.5 lg:px-6 rounded-md bg-teal-500/90 hover:bg-teal-500 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
