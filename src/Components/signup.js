import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo-no-background.png";

import VideoBackground from "../Assets/HF .mp4";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setIsRegistered(true);
  };

  if (isRegistered) {
    window.location.href = "/"; 
  }

  return (
    <>
      {/* <header><Link to="/">Home</Link></header> */}

      <section className="video-section">
        <video
          src={VideoBackground}
          autoPlay
          loop
          muted
          className="video-background"
        />

        <div className="flex items-center justify-center bg-cover h-screen ">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden  px-8 pt-6 pb-8 mb-4">
            <Link
              to="/"
              className="flex items-center text-white ml-28 px-10 py-8 "
            >
              <img src={Logo} alt="Logo" className="h-14 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300" />
            </Link>{" "}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.password}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <button
                type="submit"
                className="ml-36 text-white py-2 px-4 rounded hover:bg-gray-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;

