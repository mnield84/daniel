import React from "react";

// Import all partner logos
import image from "../assets/partners/image.png";
import image3 from "../assets/partners/image 3.png";
import image4 from "../assets/partners/image4.png";
import image5 from "../assets/partners/image5.png";
import image6 from "../assets/partners/image6.png";
import image7 from "../assets/partners/image7.png";
import image9 from "../assets/partners/image9.png";
import image10 from "../assets/partners/image10.png";
import image11 from "../assets/partners/image11.png";

const partners = [
  { src: image, alt: "Partner 1" },
  { src: image3, alt: "Partner 2" },
  { src: image4, alt: "Partner 3" },
  { src: image5, alt: "Partner 4" },
  { src: image6, alt: "Partner 5" },
  { src: image7, alt: "Partner 6" },
  { src: image9, alt: "Partner 7" },
  { src: image10, alt: "Partner 8" },
  { src: image11, alt: "Partner 9" },
];

const PartnersSection = () => {
  // For 5 on top, 4 on bottom
  const row1 = partners.slice(0, 5);
  const row2 = partners.slice(5, 9);

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      {/* Top border */}
      <div className="w-300 h-px bg-gray-200 mb-20 mt-2" />
      <h2 className="text-center text-gray-400 text-[18px] font-medium mb-12 tracking-wide uppercase">
        Already powering the world's leading biopharma
      </h2>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="flex flex-row justify-center gap-12 w-full">
          {row1.map((partner, idx) => (
            <img
              key={idx}
              src={partner.src}
              alt={partner.alt}
              className="max-h-15 grayscale opacity-80 hover:opacity-100 transition duration-200"
              style={{ objectFit: "contain", width: "auto", maxWidth: "140px" }}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-12 w-full">
          {row2.map((partner, idx) => (
            <img
              key={5 + idx}
              src={partner.src}
              alt={partner.alt}
              className="max-h-15 grayscale opacity-80 hover:opacity-100 transition duration-200"
              style={{ objectFit: "contain", width: "auto", maxWidth: "140px" }}
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
