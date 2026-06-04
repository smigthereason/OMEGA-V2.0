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
    <div className="bg-black rounded-lg p-6 w-full pt-10 justify-center min-h-[60vh] ">
      <h1 className="font-bold text-lg lg:text-xl mb-6 uppercase text-white text-center">
        Social Links
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md lg:max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-white mb-1"
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
            className="p-2 lg:py-2.5 block w-full border-gray-600 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm lg:text-base"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-white mb-1"
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
            className="p-2 lg:py-2.5 block w-full border-gray-600 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm lg:text-base"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instagram"
            className="block text-sm font-medium text-white mb-1"
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
            className="p-2 lg:py-2.5 block w-full border-gray-600 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm lg:text-base"
          />
        </div>

        <div className="flex justify-center flex-wrap gap-2 pt-2">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-1.5 lg:py-2 lg:px-6 rounded-md transition text-sm lg:text-base"
          >
            Save
          </button>
          <Link to="/settings">
            <button
              type="button"
              className="px-4 py-1.5 text-sm text-white/80 hover:text-white border border-white/30 rounded-md hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SocialLinks;
