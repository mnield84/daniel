import React from "react";
import CellAsset from "../assets/basophil-white-blood-cells-with-transparency-membrane-multinucleus-many-big-granule-isolated-white-background-3d-render 2.svg";

const FutureCellTherapiesSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full flex flex-col items-center justify-center pt-20 pb-70 bg-[#F7F3F8] font-poppins overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center justify-center w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#4B2A4B] text-4xl md:text-6xl font-medium text-center leading-tight mb-4 max-w-[1100px]">
            Built to Cure.
            <br />
            Designed for Collaboration.
          </h2>
        </div>
        <p className="text-[black] opacity-60 text-lg md:text-xl text-center max-w-4xl mb-10">
          Whether you're pioneering new treatments, advancing diagnostics, or
          investing in the next biotech platform —{" "}
          <strong>Let's Build the Future of Cell Therapies Together</strong>
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full bg-[#4B2A4B] text-white text-lg font-light shadow-md hover:bg-[#6d5a7b] transition"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center absolute left-0 right-0 bottom-0 pointer-events-none select-none">
        <img
          src={CellAsset}
          alt="Basophil White Blood Cell"
          className="w-full max-w-4xl mx-auto object-contain opacity-90"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default FutureCellTherapiesSection;
