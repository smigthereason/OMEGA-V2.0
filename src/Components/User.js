import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const User = ({ username, email, avatarUrl }) => {
  return (
    <div className="flex items-center justify-between border-black p-4 rounded-lg shadow-md text-white uppercase bg-black">
      <div className="flex flex-row">
        

        <Link
          to="/"
          className="text-white py-2 px-6 rounded-md mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <RiArrowGoBackFill size={24}/>
        </Link>
        
        <p className="mt-2">Please Log in to Proceed</p>
      </div>
      
    </div>
  );
};

export default User;
