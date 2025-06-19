import React from "react";
import group1 from "../assets/Group.svg";
import group2 from "../assets/Group2.svg";
import group3 from "../assets/group3.svg";

const cards = [
  {
    step: "STEP 1",
    title: "Define target cells",
    text: (
      <ul className="list-disc pl-4 text-left">
        <li>Select from IORGANBIO's in-vivo Functional Human Cell Atlas</li>
        <li>Provide cells or cell characteristics</li>
      </ul>
    ),
    icon: group1,
    alt: "Define target cells icon",
  },
  {
    step: "STEP 2",
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
    step: "STEP 3",
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
    step: "STEP 4",
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
        <h2 className="text-3xl md:text-[60px] max-w-7xl font-medium text-[#4B2A4B] mb-4 font-poppins">
          CellForge Digitizes the Development and Manufacturing of Human Cells
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-4xl">
          A first-of-its-kind platform that merges AI prediction, biological
          sensing, and automated 3D incubation — turning complex cellular
          science into a programmable process.
        </p>
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
          {cards.map((card, idx) => (
            <div
              key={card.step}
              className="min-w-[300px] max-w-[320px] bg-[#F7F1F7] rounded-2xl p-6 flex flex-col items-center snap-start shadow-md md:min-w-[350px] md:max-w-[380px]"
            >
              <span className="text-xs text-[#7a5c8a] font-regular mb-2 tracking-widest">
                {card.step}
              </span>
              <h3 className="text-xl font-medium text-[#4B2A4B]  text-center h-[84px]">
                {card.title}
              </h3>
              <img
                src={card.icon}
                alt={card.alt}
                className="w-20 h-20 my-5 mb-10"
              />
              {card.text ? (
                <div className="text-[#6d5a7b] text-sm text-center w-full">
                  {card.text}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingCardsSection;
