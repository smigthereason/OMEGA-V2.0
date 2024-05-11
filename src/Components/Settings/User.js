import React from 'react';

const User = ({ username, email, avatarUrl }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={`${username}'s Avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-white text-lg font-semibold">{username}</h2>
          <p className="text-gray-400">{email}</p>
        </div>
      </div>
      {/* Additional options or actions can be added here */}
    </div>
  );
};

export default User;
