import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import diagram from "../assets/iOrganbio-Diagram.png";

const CellAtlasSection = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center font-poppins">
      <AnimatedComponent
        animation="fadeInUp"
        className="w-full px-4 sm:px-6 md:px-8 max-w-6xl"
      >
        <div className="w-full flex justify-center">
          <img
            src={diagram}
            alt="iOrganBio Cell Atlas Diagram"
            className="w-full max-w-6xl h-auto rounded-md shadow-md"
            loading="lazy"
          />
        </div>
      </AnimatedComponent>
    </section>
  );
};

export default CellAtlasSection;
