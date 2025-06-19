import React from "react";
import cellIcon from "../assets/unique/cell.svg";
import bubbleIcon from "../assets/unique/bubble.svg";
import scopeIcon from "../assets/unique/scope.svg";

const cards = [
  {
    icon: cellIcon,
    title: "Digitally Defined Cell Profile",
    desc: "Every batch meets a fully defined biological profile",
  },
  {
    icon: scopeIcon,
    title: "Reproducible",
    desc: "every batch meets the desired profile",
  },
  {
    icon: bubbleIcon,
    title: "Scalable",
    desc: "iOB can deliver desired cells at unprecedented volume",
  },
  {
    icon: cellIcon,
    title: "Generalizable",
    desc: "CellForge can access any cell or organoid type",
  },
  {
    icon: scopeIcon,
    title: "Adaptable",
    desc: "CellForge can use any cells as input",
  },
];

export default function UniqueSection() {
  return (
    <section className="bg-white w-full">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#47284D] mb-4">
        What Makes iOrganBio Unique
      </h2>
      <p className="text-center text-[#2A222A] mb-12 max-w-2xl mx-auto">
        No more black box biology. No more waiting 6 months for cell access.
        This is programmable cell manufacturing.
      </p>
      <div className="flex flex-col items-center gap-0">
        {/* Top row */}
        <div className="flex flex-row justify-center gap-6 mb-[-40px] z-10">
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="unique-hexagon flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-b from-[#F7F3FA] to-white border-8 border-[#4B2956] w-64 h-64 shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-[#E5D8F3] mb-4">
                <img src={card.icon} alt="" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#2D1B2F]">
                {card.title}
              </h3>
              <p className="text-center text-[#3A2C3F] text-base">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom row, staggered */}
        <div className="flex flex-row justify-center gap-6 mt-0">
          <div className="w-28" /> {/* Spacer for staggering */}
          {cards.slice(3).map((card) => (
            <div
              key={card.title}
              className="unique-hexagon flex flex-col items-center justify-center py-8 px-6 bg-gradient-to-b from-[#F7F3FA] to-white border-8 border-[#4B2956] w-64 h-64 shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-[#E5D8F3] mb-4">
                <img src={card.icon} alt="" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#2D1B2F]">
                {card.title}
              </h3>
              <p className="text-center text-[#3A2C3F] text-base">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
