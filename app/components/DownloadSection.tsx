import React from "react";
import arrow from "../assets/arrow.svg";

const downloads = [
  {
    title: "ChemperturbSeq paper June 24 2025",
    subtitle: "Shuibing, June 24 2025",
    href: "https://www.cell.com/cell-stem-cell/abstract/S1934-5909(25)00224-3",
  },
  {
    title:
      "Induced organoids derived from patients with ulcerative colitis recapitulate colitic reactivity",
    subtitle: "Nature Communications, January 2021",
    href: "https://www.nature.com/articles/s41467-020-20351-5",
  },
  {
    title:
      "Colonic organoids derived from human induced pluripotent stem cells for modeling colorectal cancer and drug testing",
    subtitle: "Nature Medicine, June 2017",
    href: "https://www.nature.com/articles/nm.4355",
  },
  {
    title:
      "A Modular Platform for Differentiation of Human PSCs into All Major Ectodermal Lineages",
    subtitle: "Cell Stem Cell, September 2017",
    href: "https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(17)30333-8",
  },
  {
    title:
      "A human pluripotent stem cell–based platform to study SARS-CoV-2 tropism and model virus infection in human cells and organoids",
    subtitle: "Cell Stem Cell, July 2020",
    href: "https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(20)30282-4",
  },
  {
    title:
      "Identification of SARS-CoV-2 inhibitors using lung and colonic organoids",
    subtitle: "Nature, August 2020",
    href: "https://www.nature.com/articles/s41586-020-2901-9",
  },
  {
    title: "An Immuno-cardiac Model for macrophage-mediated inflammation",
    subtitle: "Circulation research, 2021",
    href: "https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.121.319060",
  },
  {
    title: "Human vascularized macrophage–islet organoids",
    subtitle: "Cell Stem Cell, November 2024",
    href: "https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(24)00293-5",
  },
];

export default function DownloadSection() {
  return (
    <section className="w-full bg-white font-poppins">
      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-6 py-10 pb-20 gap-5">
        <h2 className="text-4xl md:text-5xl font-medium text-[#4B2A57] leading-tight">
          Backed by pivotal, peer-reviewed scientific research
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
              target="_blank"
              rel="noopener noreferrer"
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
