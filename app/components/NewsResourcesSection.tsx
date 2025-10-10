import React from "react";
import { motion } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";
import IorganbioLogo from "../assets/Iorganbio-2.svg";

const newsArticles = [
  {
    id: 1,
    date: "October XX, 2025",
    label: "Press Release",
    title:
      "iOrganBio Emerges from Stealth with $2 Million Pre-Seed Financing and Launches CellForge, the First AI-Powered Digitized Cell Manufacturing Platform",
    image: IorganbioLogo,
    url: "https://placeholder-business-wire.com",
  },
];

const resourceCards = [
  {
    id: 1,
    date: "September 25, 2025",
    label: "Resource",
    title:
      "NIH establishes nation's first dedicated organoid development center to reduce reliance on animal modeling",
    url: "https://www.nih.gov/news-events/news-releases/nih-establishes-nations-first-dedicated-organoid-development-center-reduce-reliance-animal-modeling",
  },
  {
    id: 2,
    date: "April 10, 2025",
    label: "Resource",
    title:
      "FDA Announces Plan to Phase Out Animal Testing Requirement for Monoclonal Antibodies and Other Drugs",
    url: "https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs",
  },
  {
    id: 3,
    date: "May 27, 2025",
    label: "Resource",
    title:
      "The ISSCR Launches Consortium to Support Adoption of Stem Cell-Derived Disease Models for Drug Discovery and Development",
    url: "https://www.isscr.org/isscr-news/isscr-launches-consortium-to-support-adoption-of-stem-cell-derived-disease-models-for-drug-discovery-and-development",
  },
];

const NewsResourcesSection = () => {
  return (
    <section id="news" className="w-full bg-white py-16 md:py-24 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <AnimatedComponent animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-medium text-[#4B2A4B] mb-12">
            News and Resources
          </h2>
        </AnimatedComponent>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <AnimatedComponent
              key={article.id}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <div
                className={`flex flex-col md:flex-row gap-4 pb-6 border-b border-gray-200 ${
                  index === 0 ? "border-t border-gray-200 pt-6" : ""
                }`}
              >
                <div className="flex justify-center items-center border-2 border-gray-200 rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-32 rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500">{article.date}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-sm text-gray-500">{article.label}</p>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-[#4B2A4B] leading-tight mb-4 hover:text-pink-400 transition-colors">
                      {article.title}
                    </h3>
                  </a>

                  <div className="flex justify-end mt-3">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>

        {/* Resources Section */}
        <div className="grid grid-cols-1 gap-6">
          {resourceCards.map((resource, index) => (
            <AnimatedComponent
              key={resource.id}
              animation="fadeInUp"
              delay={0.4 + index * 0.1}
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#4B2A4B] p-6 rounded-lg hover:bg-[#5a355c] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm text-gray-300">{resource.date}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-sm text-gray-300">{resource.label}</p>
                  </div>
                  <h3 className="text-lg font-medium text-white leading-tight mb-4">
                    {resource.title}
                  </h3>

                  <div className="flex justify-end">
                    <svg
                      className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsResourcesSection;
