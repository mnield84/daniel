import React from "react";
import Avatar3 from "../assets/team/Avatar3.png";
import Avatar4 from "../assets/team/Avatar4.png";
import Avatar5 from "../assets/team/Avatar5.png";
// Use real team photos
import Philippe from "../assets/team/philippe.jpg";
import Jenn from "../assets/team/jenn.jpg";
import Allison from "../assets/team/allison.jpg";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

const team = [
  {
    name: "Daniel Delubac, Ph.D",
    title: "Chief Executive Officer",
    image: Avatar3,
    linkedin: "https://www.linkedin.com/in/daniel-delubac/",
  },
  {
    name: "Prof. Shuibing Chen",
    title: "Senior Scientific Advisor",
    image: Avatar4,
    profile: "https://vivo.weill.cornell.edu/display/cwid-shc2034",
  },
  {
    name: "Prof. Xiling Shen",
    title: "Senior Scientific Advisor",
    image: Avatar5,
    profile:
      "https://terasaki.org/institute/research/investigators/xiling-shen-lab.html",
  },
  {
    name: "Jenn Buechel, MEng",
    title: "Chief Operating Officer",
    image: Jenn,
    linkedin: "https://www.linkedin.com/in/jennbuechel/",
  },
  {
    name: "Philippe Chemla, Ph.D",
    title: "Chief Business Officer",
    image: Philippe,
    linkedin: "https://www.linkedin.com/in/philippe-chemla-0b32835/",
  },
  {
    name: "Allison Ryan, Ph.D",
    title: "Vice President, Data Science",
    image: Allison,
    linkedin: "https://www.linkedin.com/in/allison-ryan-aa1ba81b/",
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="w-full py-20 pb-0 bg-white flex flex-col items-center font-poppins"
    >
      <div className="max-w-6xl w-full px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16 mb-10">
          <div className="flex-2">
            <AnimatedComponent animation="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-medium text-[#4B2A4B] text-left leading-tight">
                Meet Our Team
              </h2>
            </AnimatedComponent>
          </div>
          <div className="flex-1">
            <AnimatedComponent animation="fadeInUp" delay={0.2}>
              <p className="text-gray-500 text-base md:text-lg  max-w-2xl text-left">
                Scientists, engineers and company builders defining what's next
                in biotechnology.
              </p>
            </AnimatedComponent>
          </div>
        </div>
        {/* Simple grid: stack members in rows of 3 on desktop */}
        <StaggerContainer
          animation="fadeInUp"
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch pb-4 w-full"
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 flex flex-col w-full max-w-64 bg-white mx-auto"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-56 h-56 object-cover rounded-xl mb-6 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#4B2A4B] mb-1 text-center">
                {member.name}
              </h3>
              <div className="flex flex-2 items-center justify-center gap-2 mb-2">
                <p className="text-[black] opacity-70 text-[14px] font-medium text-center">
                  {member.title}
                </p>

                {/* LinkedIn or Profile Link */}
                {member.linkedin && (
                  <div className="flex-1">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0077B5] hover:bg-[#005885] transition-colors inline-block"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                )}

                {member.profile && (
                  <div className="flex-1">
                    <a
                      href={member.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#4B2A4B] hover:bg-[#5a355c] transition-colors"
                      aria-label={`${member.name} profile`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;
