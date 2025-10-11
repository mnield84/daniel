import React from "react";
import cellIcon from "../assets/unique/cell.svg";
import digitalIcon from "../assets/unique/digital.svg";
import genIcon from "../assets/unique/gener.svg";
import scalableIcon from "../assets/unique/sca.svg";
import adaptIcon from "../assets/unique/adapt.svg";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

const cards = [
  {
    icon: digitalIcon,
    title: "Definability",
    desc: "Establishing exact target characteristics through a digitally defined cell profile.",
  },
  {
    icon: cellIcon,
    title: "Reproducibility",
    desc: "Achieving consistent target profiles to reduce batch-to-batch variability.",
  },
  {
    icon: scalableIcon,
    title: "Scalability",
    desc: "Expanding from small-scale experiments to high-volume production for clinical and commercial needs.",
  },
  {
    icon: genIcon,
    title: "Generalizability",
    desc: "Developing diverse cell types to broaden access to advanced models and therapies.",
  },
  {
    icon: adaptIcon,
    title: "Adaptability",
    desc: "Using multiple cell sources to enable rapid adjustment to new applications.",
    customIconSize: true,
  },
];

export default function UniqueSection() {
  return (
    <section className="py-12 md:py-20 bg-white w-full font-poppins px-4 sm:px-6 md:px-8">
      <AnimatedComponent animation="fadeInUp" className="text-center">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-[#4B2A4B] mb-4">
            CellForge™: Accelerating Breakthroughs Through AI-Powered Cell
            Manufacturing
          </h2>
          <p className="text-center text-[#2A222A] mb-12 max-w-2xl mx-auto text-lg">
            You have bold ideas. We have the cells to match your pace.
            CellForge™ uses AI-powered manufacturing to produce reliable,
            ready-to-use cells when you need them so your projects never wait on
            production.
          </p>
        </div>
      </AnimatedComponent>

      <div className="flex flex-col items-center gap-0 w-full">
        {/* Top row */}
        <StaggerContainer
          animation="scaleIn"
          staggerDelay={0.1}
          className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-6 mb-6 md:mb-[-40px] z-10 w-full max-w-[1300px]"
        >
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="relative flex-none w-[314px] h-[340px] md:w-[410px] md:h-[443px]"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                style={{
                  backgroundImage: "url('/Hexa-svg.svg')",
                  backgroundSize: "100% 100%",
                }}
              />
              <div className="relative flex flex-col items-center justify-start h-full px-6 py-10">
                <div className="flex flex-col items-center  md:mt-[20%] mb-4">
                  <div className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[#47284D] shadow-lg ring-2 ring-[#E5D8F3] mb-[10px]">
                    <img
                      src={card.icon}
                      alt=""
                      className={
                        card.customIconSize
                          ? "md:w-14 md:h-14 w-10 h-10"
                          : "md:w-10 md:h-10 w-7 h-7"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center text-[#2D1B2F]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[16px] text-center text-[#3A2C3F] px-8">
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
          className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-6 mt-0 w-full max-w-[860px]"
        >
          {cards.slice(3).map((card) => (
            <div
              key={card.title}
              className="relative flex-none w-[314px] h-[340px] md:w-[410px] md:h-[443px]"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                style={{
                  backgroundImage: "url('/Hexa-svg.svg')",
                  backgroundSize: "100% 100%",
                }}
              />
              <div className="relative flex flex-col items-center justify-center h-full px-6 py-10">
                <div className="flex flex-col items-center mb-4">
                  <div className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[#47284D] shadow-lg ring-2 ring-[#E5D8F3] mb-[10px]">
                    <img
                      src={card.icon}
                      alt=""
                      className={
                        card.customIconSize
                          ? "md:w-14 md:h-14 w-10 h-10"
                          : "md:w-10 md:h-10 w-7 h-7"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center text-[#2D1B2F]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[16px] text-center text-[#3A2C3F] px-8">
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
