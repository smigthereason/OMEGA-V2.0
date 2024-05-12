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
    
    console.log(socialLinks);
    alert('Social links saved successfully!');
  };

  return (
    <div className="container mx-auto mt-10 h-96 bg-black rounded-lg">
      <h1 className="text-3xl font-semibold text-white mb-5 ml-10 py-4 px-4">Social Links</h1>
      <form onSubmit={handleSubmit} className=" bg-slate-700 rounded-lg max-w-md mx-auto ml-8">
        <div className="mb-4 ">
          <label htmlFor="facebook" className="block text-sm font-lg text-black ml-2 pt-2 ">
            Facebook Profile
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            placeholder="Enter your Facebook profile URL"
            className="mt-1 ml-2 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="twitter" className="block text-sm font-lg text-black ml-2 ">
            Twitter Profile
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleChange}
            placeholder="Enter your Twitter profile URL"
            className="mt-1 ml-2 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instagram" className="block text-sm font-lg text-black ml-2 pt-2 ">
            Instagram Profile
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            placeholder="Enter your Instagram profile URL"
            className="mt-1 ml-2 p-2 block w-64 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SocialLinks;
