import React from "react";
import cellIcon from "../assets/unique/cell.svg";
import bubbleIcon from "../assets/unique/bubble.svg";
import scopeIcon from "../assets/unique/scope.svg";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

const cards = [
  {
    icon: cellIcon,
    title: "Digitally Defined Cell Profile",
    desc: "Every batch meets a fully defined biological profile",
  },
  {
    icon: scopeIcon,
    title: "Reproducible",
    desc: "Every batch meets the desired profile",
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
    <section className="py-20 bg-white w-full font-poppins">
      <AnimatedComponent animation="fadeInUp" className="text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-[#47284D] mb-4">
          What Makes iOrganBio Unique
        </h2>
        <p className="text-center text-[#2A222A] mb-12 max-w-2xl mx-auto text-lg">
          No more black box biology. No more waiting 6 months for cell access.
          This is programmable cell manufacturing.
        </p>
      </AnimatedComponent>

      <div className="flex flex-col items-center gap-0 w-full">
        {/* Top row */}
        <StaggerContainer
          animation="scaleIn"
          staggerDelay={0.1}
          className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-6 mb-0 md:mb-[-40px] z-10 w-full"
        >
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="relative flex-none w-[410px] h-[443px]"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('/Hexa-svg.svg')",
                  backgroundSize: "410px 443px",
                }}
              />
              <div className="relative flex flex-col items-center justify-center h-full px-6 py-10">
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#47284D] shadow-lg ring-2 ring-[#E5D8F3] mb-4">
                  <img src={card.icon} alt="" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium text-center mb-2 text-[#2D1B2F] w-full">
                  {card.title}
                </h3>
                <p className="text-center text-[#3A2C3F] text-base h-[62px] w-full flex items-center justify-center px-8">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Bottom row, staggered */}
        <StaggerContainer
          animation="scaleIn"
          staggerDelay={0.1}
          className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-6 mt-0 w-full"
        >
          {cards.slice(3).map((card) => (
            <div
              key={card.title}
              className="relative flex-none w-[410px] h-[443px]"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('/Hexa-svg.svg')",
                  backgroundSize: "410px 443px",
                }}
              />
              <div className="relative flex flex-col items-center justify-center h-full px-6 py-10">
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#47284D] shadow-lg ring-2 ring-[#E5D8F3] mb-4">
                  <img src={card.icon} alt="" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-medium text-center mb-2 text-[#2D1B2F] w-full">
                  {card.title}
                </h3>
                <p className="text-center text-[#3A2C3F] text-base h-[62px] w-full flex items-center justify-center px-8">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
