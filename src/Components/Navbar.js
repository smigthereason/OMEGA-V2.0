import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu/Menu";

const Navbar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black w-auto">
      <div className="container flex items-center justify-between mx-3">
        <div className="flex items-center px-2 py-2">
          <HiMenuAlt1
            className="cursor-pointer text-white text-3xl"
            onClick={onMenuToggle}
          />
        </div>

        <Link to="/" className="flex items-center text-white ml-60 px-2 py-2">
          <img src={Logo} alt="Logo" className="h-20 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300" />
        </Link>

        <div className="flex items-center">
          <Link
            to="/login"
            className="text-white py-2 px-6 rounded-md mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white py-2 px-6 rounded-md  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;

