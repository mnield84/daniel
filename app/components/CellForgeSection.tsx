import React from "react";
import bgImage from "../assets/9090301_2178 [Converted]-01 1.png";
import cellsImage from "../assets/cells.png";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

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
        <AnimatedComponent animation="fadeIn" delay={0.1}>
          <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide uppercase mb-0 md:mb-0">
            WE ARE ENTERING THE AGE OF
            <br />
            PROGRAMMABLE BIOLOGY.
          </p>
        </AnimatedComponent>

        {/* Two-column content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
          {/* Left: Heading and intro */}
          <div className="flex-1">
            <AnimatedComponent animation="fadeInUp" delay={0.2}>
              <h2 className="text-[2rem] md:text-[2.5rem] font-medium text-[#4B2A4B] mb-6 leading-snug">
                <span className="font-bold">iOB’s</span> proprietary CellForge
                platform brings engineering precision to the complexity of
                cellular biology.
              </h2>
            </AnimatedComponent>
          </div>
          {/* Right: Bullet points */}
          <div className="flex-1">
            <StaggerContainer
              animation="fadeInUp"
              staggerDelay={0.15}
              className="flex flex-col gap-6 text-[#4B2A4B] text-base md:text-lg"
            >
              <div className="flex items-start gap-3">
                <p>
                  iOrganBio is transforming human cell production with
                  CellForge™, its AI-powered platform for consistent, scalable,
                  and intelligent manufacturing of cells and organoids for in
                  vitro modeling and cell therapies.
                </p>
                <p>
                  By applying engineering precision to biology, CellForge uses
                  AI and automation to guide cell development and make real-time
                  adjustments that keep production on track and aligned with
                  defined biological profiles.
                </p>
                <p>
                  This smart, closed-loop process provides the accuracy,
                  efficiency, and quality partners need to turn scientific ideas
                  into breakthroughs—accelerating disease modeling, regenerative
                  medicine, and drug development.
                </p>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CellForgeSection;
