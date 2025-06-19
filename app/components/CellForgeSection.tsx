import React from "react";
import bgImage from "../assets/9090301_2178 [Converted]-01 1.png";
import cellsImage from "../assets/cells.png";

const CellForgeSection = () => {
  return (
    <section
      className="relative w-full py-16 px-4 flex items-center justify-center min-h-[60vh] font-poppins bg-white"
      id="cellforge"
    >
      {/* Top-right decorative image */}
      <img
        src={cellsImage}
        alt="Cells decorative"
        className="w-32 h-32 md:block absolute top-0 right-0 sm:w-64 sm:h-64 opacity-50 pointer-events-none z-0"
        style={{ maxWidth: "320px", maxHeight: "320px" }}
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Intro paragraph full width */}
        <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide uppercase mb-0 md:mb-0">
          WE ARE ENTERING THE AGE OF
          <br />
          PROGRAMMABLE BIOLOGY.
        </p>
        {/* Two-column content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
          {/* Left: Heading and intro */}
          <div className="flex-1">
            <h2 className="text-[2rem] md:text-[2.5rem] font-medium text-[#4B2A4B] mb-6 leading-snug">
              <span className="font-bold">IORGANBIO's</span> proprietary
              CellForge™ platform brings engineering precision to the complexity
              of cellular biology.
            </h2>
          </div>
          {/* Right: Bullet points */}
          <div className="flex-1 flex flex-col gap-6 text-[#4B2A4B] text-base md:text-lg">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{ color: "#4B2A4B" }}>
                ◆
              </span>
              <span>
                Powered by advanced AI algorithms, CellForge integrates the
                genetic background and molecular state of both starting and
                target cell populations to dynamically tailor cell culture
                conditions and differentiation protocols.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{ color: "#4B2A4B" }}>
                ◆
              </span>
              <span>
                Cell manufacturing is performed in an AI-guided 3D incubator
                system allowing quasi-continuous transcriptomics readouts,
                enabling real-time feedback and automated process optimization.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-xl" style={{ color: "#4B2A4B" }}>
                ◆
              </span>
              <span>
                This closed-loop system provides adaptive control throughout the
                differentiation process, ensuring unprecedented reproducibility,
                scalability, and predictability in generating highly specialized
                cell types, tissues, and organoids.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CellForgeSection;
