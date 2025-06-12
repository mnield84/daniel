import React from "react";

// Import partner logos
import fullstackedLogo from "../assets/partners/Fullstacked-Terasaki-Institute.png";
import firststarLogo from "../assets/partners/firststar.png";

const partners = [
  { src: fullstackedLogo, alt: "Fullstacked Terasaki Institute" },
  { src: firststarLogo, alt: "First Star" },
];

const PartnersSection = () => {
  return (
    <section
      id="partner"
      className="w-full py-16 bg-white flex flex-col items-center"
    >
      {/* Top border */}
      <div className="w-300 h-px bg-gray-200 mb-20 mt-2" />
      <h2 className="text-center text-gray-400 text-[18px] font-medium mb-12 tracking-wide uppercase">
        Collaborating with industry-leading research organizations
      </h2>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="flex flex-row justify-center gap-16 w-full items-center">
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
                height: index === 1 ? "150px" : "80px", // Make First Star logo larger
              }}
            />
          ))}
        </div>
      </div>
      {/* Bottom border */}
      <div className="w-300 h-px bg-gray-200 mt-20 mb-2" />
    </section>
  );
};

export default PartnersSection;
