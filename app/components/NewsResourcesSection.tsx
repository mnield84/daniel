import React from "react";
import { motion } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";
import newsImage1 from "../assets/news/news-image-1.png";
import newsImage2 from "../assets/news/news-image-2.png";
import newsImage3 from "../assets/news/news-image-3.png";
import newsImage4 from "../assets/news/news-image-4.png";

const newsArticles = [
  {
    id: 1,
    date: "April 15, 2025",
    label: "Press Release",
    title:
      "iOrganBio Launches CellForge™ Platform to Transform Cell Manufacturing",
    image: newsImage1,
    url: "https://placeholder-news-1.com",
  },
  {
    id: 2,
    date: "May 2, 2025",
    label: "Resource",
    title:
      "Prof. Shuibing Chen Publishes Breakthrough Paper on Stem Cell Differentiation",
    image: newsImage2,
    url: "https://placeholder-news-2.com",
  },
  {
    id: 3,
    date: "June 10, 2025",
    label: "Media Coverage",
    title: "iOrganBio Secures First Strategic Pharma Collaboration",
    image: newsImage3,
    url: "https://placeholder-news-3.com",
  },
  {
    id: 4,
    date: "July 22, 2025",
    label: "Press Release",
    title:
      "iOrganBio Expands Advisory Board with Global Leaders in Biotechnology",
    image: newsImage4,
    url: "https://placeholder-news-4.com",
  },
];

const resourceCards = [
  {
    id: 1,
    label: "Read Resource",
    title:
      "FDA Announces Plan to Phase Out Animal Testing Requirement for Monoclonal Antibodies and Other Drugs",
    url: "https://placeholder-resource-1.com",
  },
  {
    id: 2,
    label: "Read Resource",
    title:
      "The ISSCR Launches Consortium to Support Adoption of Stem Cell-Derived Disease Models for Drug Discovery and Development (May 2025).",
    url: "https://placeholder-resource-2.com",
  },
];

const NewsResourcesSection = () => {
  return (
    <section id="news" className="w-full bg-white py-16 md:py-24 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <h4 className="text-gray-500 text-sm mb-3">
          (all content in this section is placeholder. Cleint to provide actual
          content)
        </h4>
        <AnimatedComponent animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-medium text-[#4B2A4B] mb-12">
            News and Resources
          </h2>
        </AnimatedComponent>

        {/* News Articles Grid */}
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
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500">{article.date}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-sm text-gray-500">{article.label}</p>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-[#4B2A4B] leading-tight mb-4">
                    {article.title}
                  </h3>

                  {/* Clickable Arrow Link */}
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
              <div className="bg-[#4B2A4B] p-6 rounded-lg hover:bg-[#5a355c] transition-colors group">
                <p className="text-sm text-gray-300 uppercase tracking-wide mb-3">
                  {resource.label}
                </p>
                <h3 className="text-lg font-medium text-white leading-tight mb-4">
                  {resource.title}
                </h3>

                <div className="flex justify-end">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
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
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsResourcesSection;
