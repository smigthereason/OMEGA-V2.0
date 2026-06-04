import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import VideoBackground from "../Assets/Spider.mp4";
import { Link } from 'react-router-dom';
import LoginAudio from '../Assets/Metro Boomin, NAV, A Boogie wit da Hoodie, Swae Lee - Calling.mp3'

const Login = () => {
  const [audio] = useState(new Audio(LoginAudio)); 

  
  const handleLogoClick = () => {
    audio.pause(); 
    audio.currentTime = 0; // Reset audio to start
  };

  return (
    <>
      <section className="video-section">
        <video
          src={VideoBackground}
          autoPlay
          loop
          muted
          className="video-background"
        />
        <div className="flex items-center justify-center bg-cover h-screen ">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-transparent bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden  px-8 pt-6 pb-8 mb-4">
            <Link
              to="/"
              className="flex justify-center py-6"
              onClick={handleLogoClick}
            >
              <img src={Logo} alt="Logo" className="h-12 sm:h-14 lg:h-16 w-auto transition ease-in-out hover:-translate-y-0.5 hover:scale-105 duration-300" />
            </Link>
            <form className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto w-full px-2 text-center">
              <div className="mb-4">
                <label
                  className="block text-white text-sm lg:text-base font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 lg:py-2.5 px-3 leading-tight"
                  id="username"
                  type="text"
                  placeholder="Your Username"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm lg:text-base font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 lg:py-2.5 px-3 leading-tight"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 lg:py-2.5 px-8 lg:px-10 rounded-md transition text-sm lg:text-base"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <p className="text-center mt-4 text-xs lg:text-sm text-gray-400">
                Don't have an account? <Link to="/signup" className="underline hover:text-white">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

