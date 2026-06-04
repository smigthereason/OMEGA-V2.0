import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Notifications = () => {
  return (
    <div className="min-h-[60vh] bg-[#292929]">
      <div className="flex items-center gap-3 bg-black/70 p-4 text-white">
        <Link
          to="/settings"
          className="inline-flex w-9 h-9 items-center justify-center rounded hover:bg-white/10 transition"
          aria-label="Back to settings"
        >
          <RiArrowGoBackFill size={20} />
        </Link>
        <p className="uppercase tracking-wide text-sm">Notifications</p>
      </div>
      <div className="flex flex-col items-center justify-center h-64 text-white/60 text-center px-6">
        <p className="text-lg">Your notifications will appear here once you are logged in.</p>
      </div>
    </div>
  );
};

export default Notifications;
