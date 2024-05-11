// import React from 'react';

// const ChangePassword = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-800">
//       <div className="bg-black p-8 rounded-lg shadow-lg">
//         <h1 className="text-white text-2xl font-semibold mb-4">Change Password</h1>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="currentPassword" className="block text-white mb-1">Current Password</label>
//             <input
//               type="password"
//               id="currentPassword"
//               className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
//               placeholder="Enter your current password"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="newPassword" className="block text-white mb-1">New Password</label>
//             <input
//               type="password"
//               id="newPassword"
//               className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
//               placeholder="Enter your new password"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-white mb-1">Confirm New Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
//               placeholder="Confirm your new password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
//           >
//             Change Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;

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
    // Here you can add your logic to handle form submission
    // For example, you can send the form data to a backend API
    console.log(formData);
    // After successful signup, set isRegistered to true
    setIsRegistered(true);
  };

  // Redirect after successful registration
  if (isRegistered) {
    window.location.href = "/"; // Redirect to the home page
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
              to="/settings"
              className="flex items-center text-white ml-28 px-10 py-8 "
            >
              <img src={Logo} alt="Logo" className="h-14 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300" />
            </Link>{" "}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="current password" className="block mb-1">
                  Current Password
                </label>
                <input
                  type="text"
                  id="current password"
                  name="current password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="New Password" className="block mb-1">
                  New Password
                </label>
                <input
                  type="New Password"
                  id="New Password"
                  name="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Confirm New Password" className="block mb-1">
                Confirm New Password
                </label>
                <input
                  type="Confirm New Password"
                  id="Confirm New Password"
                  name="Confirm New Password"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              
              <button
                type="submit"
                className=" text-white text-center px-2 py-2 ml-28 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;


