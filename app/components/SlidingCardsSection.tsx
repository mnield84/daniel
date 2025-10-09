import React from "react";
import group1 from "../assets/Group.svg";
import group2 from "../assets/Group2.svg";
import group3 from "../assets/group3.svg";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

const cards = [
  {
    step: "STEP 1",
    title: "Define target cells",
    text: (
      <ul className="list-disc pl-4 text-left">
        <li>Select from IORGANBIO's in-vivo Functional Human CellAtlas</li>
        <li>Provide cells or cell characteristics</li>
      </ul>
    ),
    icon: group1,
    alt: "Define target cells icon",
  },
  {
    title: "Characterize biological state of starting cells",
    text: (
      <ul className="list-disc pl-4 text-left">
        <li>Genomics</li>
        <li>Transcriptomics</li>
        <li>Proteomics</li>
      </ul>
    ),
    icon: group2,
    alt: "Characterize starting cells icon",
  },
  {
    step: "STEP 2",
    title: "AI-agent guides differentiation towards target cell state",
    text: (
      <ul className="list-disc pl-4 text-left">
        <li>Continuous feedback loop</li>
        <li>Fully automated 3D incubators</li>
      </ul>
    ),
    icon: group3,
    alt: "AI guides differentiation icon",
  },
  {
    step: "STEP 3",
    title: "Delivery of cell product to partner specification",
    text: (
      <ul className="list-disc pl-4 text-left">
        <li>
          Full process data and endpoint package demonstrating match to target
          profile
        </li>
      </ul>
    ),
    icon: group1,
    alt: "AI guides differentiation icon",
  },
];

const SlidingCardsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedComponent
          animation="fadeInUp"
          delay={0.1}
          duration={0.8}
          threshold={0.05}
        >
          <h2 className="text-3xl md:text-[60px] max-w-7xl font-medium text-[#4B2A4B] mb-4 font-poppins">
            CellForge™ Digitizes the Development and Manufacturing of Human
            Cells
          </h2>
        </AnimatedComponent>

        <AnimatedComponent
          animation="fadeInUp"
          delay={0.2}
          duration={0.8}
          threshold={0.05}
        >
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-4xl">
            A first-of-its-kind platform that merges AI prediction, biological
            sensing, and automated 3D incubation — turning complex cellular
            science into a programmable process.
          </p>
        </AnimatedComponent>

        <StaggerContainer
          animation="scaleIn"
          staggerDelay={0.15}
          threshold={0.05}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory items-stretch"
        >
          <div
            key="step1-2"
            className="min-w-[300px] max-w-[320px] bg-[#F7F1F7] rounded-2xl p-6 flex flex-col snap-start shadow-md md:min-w-[350px] md:max-w-[380px] h-full"
          >
            {/* STEP 1 (top half) */}
            <div className="relative w-full flex-1 flex flex-col">
              <span className="text-xs text-[#7a5c8a] font-regular mb-2 tracking-widest block">
                {cards[0].step}
              </span>
              <h3 className="text-xl font-medium text-[#4B2A4B] mb-3">
                {cards[0].title}
              </h3>
              <img
                src={cards[0].icon}
                alt={cards[0].alt}
                className="w-14 h-14 absolute top-0 right-0 opacity-90"
              />
              <div className="text-[#6d5a7b] text-sm">{cards[0].text}</div>
            </div>

            {/* STEP 2 (bottom half) */}
            <div className="grid grid-cols-[auto,1fr] gap-4 items-start w-full flex-1 border-t border-[#E2D6E2] pt-6 mt-6">
              <div className="flex justify-between">
                <img
                  src={cards[1].icon}
                  alt={cards[1].alt}
                  className="w-12 h-12 mt-1"
                />
                <div className="flex flex-col max-w-[200px]">
                  <span className="text-xs text-[#7a5c8a] tracking-widest block">
                    {cards[1].step}
                  </span>
                  <h4 className="text-lg font-medium text-[#4B2A4B] mb-3">
                    {cards[1].title}
                  </h4>
                </div>
              </div>

              <div>
                <div className="text-[#6d5a7b] text-sm">{cards[1].text}</div>
              </div>
            </div>
          </div>

          {/* Render the remaining slides (STEP 3, STEP 4, ...) */}
          {cards.slice(2).map((card) => (
            <div
              key={card.step}
              className="min-w-[300px] max-w-[320px] bg-[#F7F1F7] rounded-2xl p-6 flex flex-col items-center snap-start shadow-md md:min-w-[350px] md:max-w-[380px] flex-1 h-full"
            >
              <span className="text-xs text-[#7a5c8a] font-regular mb-2 tracking-widest text-left w-full">
                {card.step}
              </span>
              <h3 className="text-xl text-left font-medium text-[#4B2A4B] text-center mb-4 flex-shrink-0">
                {card.title}
              </h3>
              <img
                src={card.icon}
                alt={card.alt}
                className="w-20 h-20 my-5 mb-10 flex-shrink-0"
              />
              {card.text ? (
                <div className="text-[#6d5a7b] text-sm text-center w-full flex-1 flex items-end">
                  {card.text}
                </div>
              ) : null}
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SlidingCardsSection;
