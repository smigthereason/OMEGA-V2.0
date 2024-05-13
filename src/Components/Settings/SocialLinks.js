import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(socialLinks);
    alert("Social links saved successfully!");
  };

  return (
    <div className="bg-black rounded-lg p-6 w-full pt-10 justify-center h-screen ">
      <h1 className="font-bold text-lg mb-4 uppercase text-white text-center">
        Social Links
      </h1>
      <form onSubmit={handleSubmit} className=" max-w-md mx-auto text-center ">
        <div className="mb-4 justify-center text-center">
          <label
            htmlFor="facebook"
            className="block text-sm font-lg text-white font-bold ml-2 pt-2 "
          >
            Facebook Profile
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            placeholder="Enter your Facebook profile URL"
            className="mt-1 ml-24 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="twitter"
            className="block text-sm font-lg text-white font-bold ml-2 "
          >
            Twitter Profile
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleChange}
            placeholder="Enter your Twitter profile URL"
            className="mt-1 ml-24 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instagram"
            className="block text-sm font-lg text-white font-bold ml-2 pt-2 "
          >
            Instagram Profile
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            placeholder="Enter your Instagram profile URL"
            className="mt-1 ml-24 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Save
        </button>
        <Link to="/settings">
          <button
            type="button"
            className="btn-default ml-2 text-white transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SocialLinks;
