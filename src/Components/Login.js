import React from "react";
import Logo from "../Assets/logo-no-background.png";
import VideoBackground from "../Assets/Spider.mp4";
import { Link } from 'react-router-dom';

const Login = () => {
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
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-transparent bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden  px-8 pt-6 pb-8 mb-4">
            <Link
              to="/"
              className="flex items-center text-white ml-28 px-10 py-8 "
            >
              <img src={Logo} alt="Logo" className="h-14 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300" />
            </Link>{" "}
            <form>
              <div className="mb-4">
                <label
                  className="block text-white  text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Your Username"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-center">
                <button
                  className="ml-40  text-white font-bold py-2 px-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

