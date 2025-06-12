import { Link } from "react-router";
import bgImage from "../assets/BG_02.png";
import CellImage from "../assets/Component.svg";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-poppins"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <img
          src={CellImage}
          alt="Cell"
          className="w-150px md:w-120 drop-shadow-2xl"
        />
        <h1 className="text-white text-84px md:text-6xl font-medium text-center leading-tight mb-6 font-poppins">
          Engineering the Cells
          <br />
          of the Future
        </h1>
        <p className="text-gray-200 text-lg md:text-xl text-center max-w-4xl mb-8">
          iOrganBio's CellForge™ Platform transforms the way we create human
          cells—enabling scalable, reproducible, and intelligent cell
          manufacturing to cure chronic diseases.
        </p>
        <a
          href="#cellforge"
          className="px-8 py-3 border-b-2 border-gray-200 text-white text-base font-medium tracking-wide hover:border-indigo-400 transition"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("cellforge")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          EXPLORE CELLFORGE
        </a>
      </div>
    </div>
  );
};

export default Hero;
