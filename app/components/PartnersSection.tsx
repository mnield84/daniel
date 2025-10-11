import React from "react";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

// Import partner logos
import fullstackedLogo from "../assets/partners/Fullstacked-Terasaki-Institute.png";
import firststarLogo from "../assets/partners/first_star.png";
import indi from "../assets/partners/IndieBiologoOutlinedLogo.png";
import alix from "../assets/partners/Alix.png";
import secondstarLogo from "../assets/partners/2ndF.png";
import capeFearBiosciencesLogo from "../assets/partners/CapeFearBiocapital.png";

const partners = [
  { src: firststarLogo, alt: "First Star", height: "30px" },
  { src: indi, alt: "INDI", height: "40.5px" },
  {
    src: capeFearBiosciencesLogo,
    alt: "Cape Fear Biosciences",
    height: "40px",
  },
  { src: secondstarLogo, alt: "2nd Star", height: "48.75px" },
  {
    src: fullstackedLogo,
    alt: "Fullstacked Terasaki Institute",
    height: "50.5px",
  },
  { src: alix, alt: "Alix", height: "40px" },
];

const PartnersSection = () => {
  return (
    <section id="partner" className="w-full py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4 py-8 md:py-16 border-t border-b border-gray-200 flex flex-col items-center">
        <AnimatedComponent animation="fadeInUp">
          <h2 className="text-center text-gray-400 text-[18px] font-medium mb-12 tracking-wide uppercase">
            OUR INVESTORS AND PARTNERS
          </h2>
        </AnimatedComponent>

        <StaggerContainer
          animation="fadeInUp"
          staggerDelay={0.1}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.src}
                alt={partner.alt}
                className="grayscale opacity-80 hover:opacity-100 transition duration-200 object-contain"
                style={{
                  height: partner.height,
                  width: "auto",
                }}
              />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PartnersSection;
