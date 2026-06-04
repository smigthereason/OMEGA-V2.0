import React from "react";
import TeamMember1 from "../Assets/tm-4.png";
import TeamMember2 from "../Assets/tm-6.png";
import TeamMember3 from "../Assets/tm-5.png";
import TeamMember4 from "../Assets/tm-2.png";
import TeamMember5 from "../Assets/tm-7.png";
import TeamMember6 from "../Assets/tm-8.png";


const Team = () => {
  const teamMembers = [
    { name: "Victor Maina", jobTitle: "Chief Executive Officer (CEO)", image: TeamMember1 },
    { name: "Sylvia Chebet", jobTitle: "Chief Marketing Officer (CMO)", image: TeamMember3 },
    { name: "William Ndirangu", jobTitle: "Chief Technology Officer (CTO)", image: TeamMember2 },
    { name: "Stephy Kamau", jobTitle: "Chief Creative Officer (CCO)", image: TeamMember4 },
    { name: "Uwes Ahabab", jobTitle: "Chief Financial Officer (CFO)", image: TeamMember5},
    { name: "Beatrice Wambui", jobTitle: "Chief Operations Officer (COO)", image: TeamMember6 },
    
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-[#111] border border-gray-800 rounded-xl shadow p-3 sm:p-4 lg:p-5 text-center transition hover:-translate-y-0.5 hover:border-teal-500/40 duration-300 flex flex-col"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full aspect-[4/3] object-cover bg-gray-900 mb-3 rounded-lg"
          />
          <h3 className="text-sm sm:text-base lg:text-lg uppercase font-semibold text-white tracking-wide">{member.name}</h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-0.5 mb-3 flex-1">{member.jobTitle}</p>
          <button className="mt-auto w-full bg-teal-400 hover:bg-teal-500 active:bg-teal-600 text-white text-sm lg:text-base py-1.5 lg:py-2 rounded-md transition">
            Contact
          </button>
        </div>
      ))}
    </div>
  );
};

export default Team;


