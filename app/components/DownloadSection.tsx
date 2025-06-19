import React from "react";
import arrow from "../assets/arrow.svg";

const downloads = [
  {
    title:
      "A Modular Platform for Differentiation of Human PSCs into All Major Ectodermal Lineages",
    subtitle: "Cell Stem Cell, September 2017",
    href: "#",
  },
  {
    title:
      "A human pluripotent stem cell–based platform to study SARS-CoV-2 tropism and model virus infection in human cells and organoids",
    subtitle: "Cell Stem Cell, July 2020",
    href: "#",
  },
  {
    title:
      "Identification of SARS-CoV-2 inhibitors using lung and colonic organoids",
    subtitle: "Nature, August 2020",
    href: "#",
  },
  {
    title: "An Immuno-cardiac Model for macrophage-mediated inflammation",
    subtitle: "Circulation research, 2021",
    href: "#",
  },
  {
    title: "Human vascularized macrophage–islet organoids",
    subtitle: "Cell Stem Cell, November 2024",
    href: "#",
  },
];

export default function DownloadSection() {
  return (
    <section className="w-full bg-white font-poppins">
      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-6 py-10 pb-20 gap-5">
        <h2 className="text-4xl md:text-5xl font-medium text-[#4B2A57] leading-tight">
          Built to Cure.
          <br />
          Designed for Collaboration.
        </h2>
        <p className="text-[#4B2A57] text-opacity-70">
          Our scientific team is actively publishing the science behind
          CellForge in top journals and conferences.
        </p>
        <div className="flex flex-col mt-10">
          {downloads.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              download
              className="flex items-center justify-between border-b border-[#EBE3ED] border-opacity-10 py-8 px-2 group hover:bg-[#F7F5F9] transition-colors"
            >
              <div>
                <div className="text-[#4F2C51] font-medium text-lg md:text-xl mb-6 leading-snug">
                  {item.title}
                </div>
                <div className="text-[#544F55] text-opacity-70 text-sm md:text-base mt-1">
                  {item.subtitle}
                </div>
              </div>
              <img
                src={arrow}
                alt="Download arrow"
                className="w-7 h-7 md:w-6 md:h-6 ml-4 mr-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
