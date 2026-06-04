import React from "react";

const Sponsor = () => {
  return (
    <div className="mt-4 bg-[#111] rounded-xl px-4 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
        {/* Side label: horizontal on mobile, vertical on md+ */}
        <div className="md:self-stretch flex md:items-center">
          <div className="hidden md:block border border-gray-600 text-white rounded-bl-xl rounded-tr-xl px-1 py-3">
            <p className="vertical-text rotate-180 text-sm lg:text-base tracking-[3px]">GRATITUDE</p>
          </div>
          <div className="md:hidden text-white text-xs font-semibold tracking-[3px] border border-gray-600 px-3 py-1 rounded">
            GRATITUDE
          </div>
        </div>

        <div className="text-white text-center md:text-left flex-1">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl italic font-medium leading-relaxed max-w-prose lg:max-w-none">
            We extend our deepest gratitude and appreciation to our esteemed sponsors who have played a pivotal role in the success and growth of Omega. Your unwavering support, commitment, and belief in our vision have been instrumental in propelling us forward. Through your generous contributions and strategic partnerships, we have been able to innovate, expand our reach, and achieve significant milestones. Your investment in our endeavors has not only benefited Omega but has also created a positive impact on our industry and community. Thank you for being an integral part of the Omega family and for your continued support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

