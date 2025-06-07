import React from "react";
import Avatar3 from "../assets/team/Avatar3.png";
import Avatar4 from "../assets/team/Avatar4.png";
import Avatar5 from "../assets/team/Avatar5.png";

const team = [
  {
    name: "Dr. Daniel Delubac",
    title: "Chief Executive",
    image: Avatar3,
  },
  {
    name: "Prof. Jamie Lee",
    title: "Chief Scientist",
    image: Avatar4,
  },
  {
    name: "Dr. Riley Carter",
    title: "Chief Technologist",
    image: Avatar5,
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-5 bg-white flex flex-col items-center font-poppins">
      <div className="max-w-6xl w-full px-4 mx-auto">
        <div className="flex  md:flex-row md:items-center md:justify-between gap-8 md:gap-16 mb-10">
          <div className="flex-2">
            <h2 className="text-3xl md:text-5xl font-medium text-[#4B2A4B] text-left leading-tight">
              Backed by Scientists.
              <br />
              Built by Operators.
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-base md:text-lg  max-w-2xl text-left">
              A multidisciplinary team of engineers, scientists, and
              entrepreneurs leading the next chapter of biotechnology.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-center items-stretch overflow-x-auto pb-4 w-full">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 flex flex-col w-full max-w-64 bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-56 h-56 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-[#4B2A4B] mb-1">
                {member.name}
              </h3>
              <p className="text-[black] opacity-70 text-[16px] font-medium mb-2">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
