import React from "react";
import SponsorLogo1 from "../Assets/Xbox.jpeg";
import SponsorLogo2 from "../Assets/Clip Art Ps4 Icon.png";
import SponsorLogo3 from "../Assets/Mastercard PNG.jpeg";
import SponsorLogo4 from "../Assets/Paypal Logo.jpeg";

const Sponsor = () => {
  return (
    <div className="container mx-auto mt-4 bg-black rounded-lg">
      <div className="flex gap-5">
        <div className="flex-row text-white text-center border border-current rounded-bl-xl rounded-tr-xl">
          <p className="vertical-text rotate-180 px-1 py-1 text-center mt-12">GRATITUDE</p>
        </div>
        <div className="w-1/2 pr-4  text-white ">
          <p className="text-lg  font-semibold mb-4">
            We extend our deepest gratitude and appreciation to our esteemed sponsors who have played a pivotal role in the success and growth of Omega. Your unwavering support, commitment, and belief in our vision have been instrumental in propelling us forward. Through your generous contributions and strategic partnerships, we have been able to innovate, expand our reach, and achieve significant milestones. Your investment in our endeavors has not only benefited Omega but has also created a positive impact on our industry and community. Thank you for being an integral part of the Omega family and for your continued support.
          </p>
        </div>
        <div className="w-1/2">
          <div className="overflow-hidden h-40">
            <div className="flex items-center justify-between animate-marquee">
              <img src={SponsorLogo1} alt="Sponsor Logo 1" className="h-16 mr-4" />
              <img src={SponsorLogo2} alt="Sponsor Logo 2" className="h-16 mr-4" />
              <img src={SponsorLogo3} alt="Sponsor Logo 3" className="h-16 mr-4" />
              <img src={SponsorLogo4} alt="Sponsor Logo 4" className="h-16 mr-4" />
              {/* Add more sponsor logos here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

