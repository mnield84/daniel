import React from "react";

// Import partner logo
import fullstackedLogo from "../assets/partners/Fullstacked-Terasaki-Institute.png";

const partners = [
  { src: fullstackedLogo, alt: "Fullstacked Terasaki Institute" },
];

const PartnersSection = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      {/* Top border */}
      <div className="w-300 h-px bg-gray-200 mb-20 mt-2" />
      <h2 className="text-center text-gray-400 text-[18px] font-medium mb-12 tracking-wide uppercase">
        Collaborating with industry-leading research organizations
      </h2>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="flex flex-row justify-center w-full">
          <img
            src={partners[0].src}
            alt={partners[0].alt}
            className="max-h-15 grayscale opacity-80 hover:opacity-100 transition duration-200"
            style={{ objectFit: "contain", width: "auto", maxWidth: "300px" }}
          />
        </div>
      </div>
      {/* Bottom border */}
      <div className="w-300 h-px bg-gray-200 mt-20 mb-2" />
    </section>
  );
};

export default PartnersSection;
