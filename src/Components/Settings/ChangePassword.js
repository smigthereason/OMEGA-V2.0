import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo-no-background.png";

import VideoBackground from "./pass.mp4";

function ChangePassword() {
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

      <section className="video-section">
        <video
          src={VideoBackground}
          autoPlay
          loop
          muted
          className="video-background"
        />

        <div className="flex items-center justify-center bg-cover h-screen ">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden  px-8 pt-6 pb-8 mb-4">
            <Link
              to="/settings"
              className="flex justify-center py-6"
            >
              <img src={Logo} alt="Logo" className="h-12 sm:h-14 lg:h-16 w-auto transition ease-in-out hover:-translate-y-0.5 hover:scale-105 duration-300" />
            </Link>
            <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto w-full px-2 text-center">
              <div className="mb-4">
                <label htmlFor="currentPassword" className="block mb-1 text-sm lg:text-base text-white">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword || ""}
                  onChange={handleChange}
                  className="border p-2 lg:py-2.5 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block mb-1 text-sm lg:text-base text-white">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword || ""}
                  onChange={handleChange}
                  className="border p-2 lg:py-2.5 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmNewPassword" className="block mb-1 text-sm lg:text-base text-white">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword || ""}
                  onChange={handleChange}
                  className="border p-2 lg:py-2.5 w-full rounded-xl"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 lg:py-2.5 px-6 lg:px-8 rounded-md transition text-sm lg:text-base"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;


