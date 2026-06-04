import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const User = () => {
  return (
    <div className="min-h-[60vh] bg-[#292929]">
      <div className="flex items-center gap-3 bg-black/70 p-4 text-white">
        <Link
          to="/"
          className="inline-flex w-9 h-9 items-center justify-center rounded hover:bg-white/10 transition"
          aria-label="Back"
        >
          <RiArrowGoBackFill size={20} />
        </Link>
        <p className="uppercase tracking-wide text-sm">Profile</p>
      </div>
      <div className="flex flex-col items-center justify-center h-64 text-white/70 text-center px-4">
        <p className="text-lg">Please log in to view your profile.</p>
      </div>
    </div>
  );
};

export default User;
