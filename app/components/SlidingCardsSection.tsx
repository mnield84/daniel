import React from "react";
import cellSvg from "../assets/fi_2286243.svg";

const cards = [
  {
    step: "STEP 1",
    title: "Define the Target Cell",
    text: "A specific therapeutic cell type, like pancreatic beta cells or retinal cells. CellForge starts with a clear biological outcome.",
  },
  {
    step: "STEP 2",
    title: "Measure Starting Cells",
    text: 'Cell state is measured in real-time using advanced profiling tools. This helps establish a precise biological "starting point."',
  },
  {
    step: "STEP 3",
    title: "AI Predicts Transformation",
    text: 'Our proprietary AI maps the best chemical and environmental "path" to guide cells from start to target state — using millions of data points.',
  },
  {
    step: "STEP 4",
    title: "Execute in Smart Incubators",
    text: "The protocol is executed in automated, AI-guided incubators — where chemical and environmental signals are adjusted in real time.",
  },
];

const SlidingCardsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-[64px] max-w-5xl font-medium text-[#4B2A4B] mb-4 font-poppins">
          CellForge Digitizes the Development of Human Cells
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
              className="min-w-[300px] max-w-[320px] bg-[#F7F1F7] rounded-2xl p-6 flex flex-col items-center snap-start shadow-md"
            >
              <span className="text-xs text-[#7a5c8a] font-semibold mb-2 tracking-widest">
                {card.step}
              </span>
              <h3 className="text-xl font-semibold text-[#4B2A4B] mb-4 text-center">
                {card.title}
              </h3>
              <img src={cellSvg} alt="Cells" className="w-20 h-20 mb-4" />
              <p className="text-[#6d5a7b] text-sm text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingCardsSection;
