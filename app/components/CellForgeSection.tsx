import React from "react";
import bgImage from "../assets/9090301_2178 [Converted]-01 1.png";

const CellForgeSection = () => {
  return (
    <section
      className="relative w-full py-20 px-4 flex items-center justify-center min-h-[60vh] font-poppins"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
      }}
      id="cellforge"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-left">
        <p className="text-sm md:text-base text-gray-500 mb-8 font-medium tracking-wide uppercase">
          WE ARE ENTERING THE AGE OF
          <br />
          PROGRAMMABLE BIOLOGY.
        </p>
        <h2 className="text-3xl md:text-40px font-medium text-[#4B2A4B] mb-6 leading-snug">
          iOrganBio's CellForge™ Platform brings engineering precision to the
          most complex systems in the universe — human cells. Using AI-guided
          protocols, deep cellular data, and smart incubators, enabling
          targeted, consistent, and scalable cell production to support the next
          generation of clinical breakthroughs.
        </h2>
      </div>
    </section>
  );
};

export default CellForgeSection;
