import React from "react";
import Avatar3 from "../assets/team/Avatar3.png";
import Avatar4 from "../assets/team/Avatar4.png";
import Avatar5 from "../assets/team/Avatar5.png";
import Philippe from "../assets/team/Philippe.jpg";
import Jenn from "../assets/team/Jenn.jpg";
import AnimatedComponent, { StaggerContainer } from "./AnimatedComponent";

const team = [
  {
    name: "Dr. Daniel Delubac",
    title: "Chief Executive Officers",
    image: Avatar3,
  },
  {
    name: "Prof. Shuibing Chen",
    title: "Scientific Lead Officers",
    image: Avatar4,
  },
  {
    name: "Prof. Xiling Shen",
    title: "Technology Lead Officers",
    image: Avatar5,
  },
  {
    name: "Jenn Buechel",
    title: "Operations Lead",
    image: Jenn,
  },
  {
    name: "Philippe Chemla",
    title: "CSO",
    image: Philippe,
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-20 pb-0 bg-white flex flex-col items-center font-poppins">
      <div className="max-w-6xl w-full px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16 mb-10">
          <div className="flex-2">
            <AnimatedComponent animation="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-medium text-[#4B2A4B] text-left leading-tight">
                Meet our <br />
                Founding Team
              </h2>
            </AnimatedComponent>
          </div>
          <div className="flex-1">
            <AnimatedComponent animation="fadeInUp" delay={0.2}>
              <p className="text-gray-500 text-base md:text-lg  max-w-2xl text-left">
                A multidisciplinary team of engineers, scientists, and
                entrepreneurs leading the next chapter of biotechnology.
              </p>
            </AnimatedComponent>
          </div>
        </div>
        <StaggerContainer
          animation="fadeInUp"
          staggerDelay={0.15}
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch pb-4 w-full"
        >
          {team.map((member, idx) => (
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
              <p className="text-[black] opacity-70 text-[16px] font-medium mb-2 text-center">
                {member.title}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;
