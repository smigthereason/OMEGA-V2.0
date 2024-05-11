// import React, { useState } from "react";
// import Logo from "../Assets/logo-no-background.png";
// import { Link } from "react-router-dom";
// import { HiMenuAlt1 } from "react-icons/hi";
// import Menu from "./Menu/Menu";

// const Navbar = ({ onMenuToggle, onAudioControl }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black w-auto">
//       <div className="container flex items-center justify-between mx-3">
//         <div className="flex items-center px-2 py-2">
//           <HiMenuAlt1
//             className="cursor-pointer text-white text-3xl"
//             onClick={onMenuToggle}
//           />
//         </div>

//         <Link
//           to="/"
//           className="flex items-center text-white ml-60 px-2 py-2"
          
//         >
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-20 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
//           />
//         </Link>

//         <div className="flex items-center">
//           <Link
//             to="/login"
//             className="text-white py-2 px-6 rounded-md mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="text-white py-2 px-6 rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//       {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import LoginAudio from "../Assets/Metro Boomin, NAV, A Boogie wit da Hoodie, Swae Lee - Calling.mp3"; // Import the audio file
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu/Menu";

const Navbar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [audio] = useState(new Audio(LoginAudio)); // Create an audio object in state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


console.log(audio); // Add this line to check the audio object

const handleLoginClick = () => {
  console.log("Login clicked");
  audio.play();
};

const handleLogoClick = () => {
  console.log("Logo clicked");
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
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

        <Link
          to="/"
          className="flex items-center text-white ml-60 px-2 py-2"
          onClick={handleLogoClick} // Add onClick event to stop audio when logo is clicked
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-20 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </Link>

        <div className="flex items-center">
          <Link
            to="/login"
            className="text-white py-2 px-6 rounded-md mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={handleLoginClick} // Add onClick event to play audio when Log in is clicked
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white py-2 px-6 rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
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
