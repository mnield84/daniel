import React from "react";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

// Import partner logos
import fullstackedLogo from "../assets/partners/TerasakiInst.png";
import firststarLogo from "../assets/partners/First-star.png";
import indi from "../assets/partners/indiebio.png";
import alix from "../assets/partners/Alix.png";
import secondstarLogo from "../assets/partners/2ndF.png";
import capeFearBiosciencesLogo from "../assets/partners/CapeFearBiocapital.png";

const partners = [
  { src: secondstarLogo, alt: "2nd Star" },
  { src: firststarLogo, alt: "First Star" },
  { src: capeFearBiosciencesLogo, alt: "Cape Fear Biosciences" },
  { src: indi, alt: "INDI" },
  { src: fullstackedLogo, alt: "Fullstacked Terasaki Institute" },
  { src: alix, alt: "Alix" },
];

const PartnersSection = () => {
  return (
    <section
      id="partner"
      className="w-full py-16 bg-white flex flex-col items-center"
    >
      {/* Top border */}
      <div className="w-full max-w-[300px] sm:max-w-[700px] lg:max-w-[1000px] h-px bg-gray-200 mb-20 mt-2" />

      <AnimatedComponent animation="fadeInUp">
        <h2 className="text-center text-gray-400 text-[18px] font-medium mb-12 tracking-wide uppercase">
          OUR INVESTORS AND PARTNERS
        </h2>
      </AnimatedComponent>

      <div className="flex flex-col gap-8 w-full items-center">
        <StaggerContainer
          animation="fadeInUp"
          staggerDelay={0.1}
          className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 w-full items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-16 sm:h-20 w-[180px] sm:w-[220px] flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="grayscale opacity-80 hover:opacity-100 transition duration-200 max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </StaggerContainer>
      </div>
      {/* Bottom border */}
      <div className="w-full max-w-[300px] sm:max-w-[700px] lg:max-w-[1000px] h-px bg-gray-200 mt-20 mb-2" />
    </section>
  );
};

export default PartnersSection;
