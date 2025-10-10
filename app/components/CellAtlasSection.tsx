import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import diagram from "../assets/iOrganbioDiagram.svg";

const CellAtlasSection = () => {
  return (
    <section
      id="cellatlas"
      className="w-full py-16 bg-white flex flex-col items-center font-poppins"
    >
      <AnimatedComponent
        animation="fadeInUp"
        className="w-full px-4 sm:px-6 md:px-8 max-w-6xl"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#4B2A4B] mb-4">
            CellAtlas™, Digital Profiles of In-vivo Cells and Tissues
          </h2>
          <p className="text-lg text-[#4B2A4B] leading-relaxed max-w-4xl mx-auto">
            A searchable database to explore adult human biology, benchmark
            in-vitro cell products against, and design cell products for
            manufacturing.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={diagram}
            alt="iOrganBio Cell Atlas Diagram"
            className="w-full max-w-6xl h-auto"
            loading="lazy"
          />
        </div>
      </AnimatedComponent>
    </section>
  );
};

export default CellAtlasSection;
