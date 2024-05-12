import React, { useState } from 'react';

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
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
    // Here you can send the socialLinks data to your backend or handle it as needed
    console.log(socialLinks);
    alert('Social links saved successfully!');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-5">Social Links</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 ">
          <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
            Facebook Profile
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            placeholder="Enter your Facebook profile URL"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
            Twitter Profile
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleChange}
            placeholder="Enter your Twitter profile URL"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
            Instagram Profile
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            placeholder="Enter your Instagram profile URL"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SocialLinks;
