import React from "react";
import "./Settings/Settings.css";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 sm:py-6 px-4 lg:px-8">
      <div className="flex">
        <div className="bg-black rounded-xl p-5 sm:p-6 w-full text-white">
          <h4 className="font-bold text-lg mb-4 uppercase text-white">
            Account settings
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="col-span-1 md:col-span-3 lg:col-span-4">
              <div className="bg-gray-800 rounded-lg p-4 ">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div>
                    <label className="inline-block cursor-pointer text-teal-400 hover:text-teal-300 text-sm">
                      Upload new photo
                      <input type="file" className="hidden" />
                    </label>
                    <button
                      type="button"
                      className="ml-3 text-xs text-gray-400 hover:text-gray-200"
                    >
                      Reset
                    </button>
                    <p className="text-[10px] text-gray-500 mt-1">
                      JPG, GIF or PNG. Max 5MB
                    </p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-md p-2 lg:p-2.5 text-sm lg:text-base"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-md p-2 lg:p-2.5 text-sm lg:text-base"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">
                      E-mail
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-md p-2 lg:p-2.5 text-sm lg:text-base"
                      placeholder="...@gmail.com"
                    />
                    <div className="text-amber-400 text-[10px] mt-1">
                      Your email is not confirmed. Please check your inbox.
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">
                      OTP
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-md p-2 lg:p-2.5 text-sm lg:text-base"
                      placeholder="Enter OTP"
                    />
                    <div className="text-amber-400 text-[10px] mt-1">
                      Please enter OTP to confirm account.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="list-none">
                  <li className="mb-2">
                    <Link
                      to="/settings"
                      className="block text-sm lg:text-base text-gray-300 hover:text-white"
                    >
                      General
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/changePassword"
                      className="block text-sm lg:text-base text-gray-300 hover:text-white"
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link
                      to="/socialLinks"
                      className="block text-sm lg:text-base text-gray-300 hover:text-white"
                    >
                      Social Links
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/notifications"
                      className="block text-sm lg:text-base text-gray-300 hover:text-white"
                    >
                      Notifications
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/billing"
                      className="block text-sm lg:text-base text-gray-300 hover:text-white"
                    >
                      Billing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-4">
              <button
                type="button"
                className="bg-teal-500 hover:bg-teal-600 text-white text-sm px-5 py-1.5 rounded-md transition"
              >
                Save
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="px-4 py-1.5 text-sm text-white/80 hover:text-white border border-white/30 rounded-md hover:bg-white/5 transition"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
