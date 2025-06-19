import React from "react";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

// Import partner logos
import fullstackedLogo from "../assets/partners/terasaki.png";
import firststarLogo from "../assets/partners/first.png";
import indi from "../assets/partners/indi.png";
import alix from "../assets/partners/alix.png";

const partners = [
  { src: fullstackedLogo, alt: "Fullstacked Terasaki Institute" },
  { src: indi, alt: "INDI" },
  { src: firststarLogo, alt: "First Star" },
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
          Already Powering the World's Leading Biopharma
        </h2>
      </AnimatedComponent>

      <div className="flex flex-col gap-8 w-full items-center">
        <StaggerContainer
          animation="fadeInUp"
          staggerDelay={0.1}
          className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 w-full items-center"
        >
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="grayscale opacity-80 hover:opacity-100 transition duration-200"
              style={{
                objectFit: "contain",
                width: "auto",
                maxWidth: "300px",
                height: "80px",
              }}
            />
          ))}
        </StaggerContainer>
      </div>
      {/* Bottom border */}
      <div className="w-full max-w-[300px] sm:max-w-[700px] lg:max-w-[1000px] h-px bg-gray-200 mt-20 mb-2" />
    </section>
  );
};

export default PartnersSection;
