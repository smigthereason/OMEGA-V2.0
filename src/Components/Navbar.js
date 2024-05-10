import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu/Menu";

const Navbar = ({onMenuToggle}) => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
         <div className="flex items-center justify-between px-4 py-4 ">
          <HiMenuAlt1
            className="cursor-pointer size-12  flex items-center justify-center text-white"
            onClick={onMenuToggle} // Add onClick event to open/close menu
          />
        </div>

        {/* <div className="flex items-center justify-between px-10 py-8 z-50 "> */}
          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center text-white ml-28 px-10 py-8 ">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </Link>
          
        {/* </div> */}

        {/* Login and Sign Up buttons */}
        <div className="flex items-center">
          <Link
            to="/login"
            className=" text-white py-2 px-6 rounded-md mr-4 hover:bg-gray-300/90 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className=" text-white py-2 px-6 rounded-md hover:bg-gray-300/90 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {/* Render the Menu component */}fd
      {/* {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />} */}
    </nav>
  );
};

export default Navbar;
