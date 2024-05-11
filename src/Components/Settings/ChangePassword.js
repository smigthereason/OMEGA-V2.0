import React from 'react';

const ChangePassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-semibold mb-4">Change Password</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-white mb-1">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
              placeholder="Enter your current password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-white mb-1">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-white mb-1">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 rounded-md bg-slate-800 border border-gray-500 text-white"
              placeholder="Confirm your new password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
