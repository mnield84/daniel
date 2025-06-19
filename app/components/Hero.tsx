import { Link } from "react-router";
import mobileBg from "../assets/Rectangle-50.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center md:items-end justify-center md:justify-end overflow-hidden font-poppins">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://dl.dropboxusercontent.com/scl/fi/zq2s4dghtpqzozj2q8l5c/video-bg.mov?rlkey=fytkiklb4mcpsyq1ox7lu9r97&st=qhbc5iu2"
          type="video/mp4"
        />
      </video>

      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full block md:hidden"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Purple Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#4B256A] opacity-50 md:opacity-80 z-10" />

      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full px-4 md:pb-25 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-white text-4xl md:text-[84px] font-medium text-left leading-tight mb-6 md:mb-8">
          Supplying the Cells to Improve the Human Condition
        </h1>
        <p className="text-gray-200 text-base md:text-xl text-left max-w-3xl md:max-w-[444px]">
          iOrganBio's CellForge™ Platform transforms the way we create human
          cells—enabling scalable, reproducible, and intelligent cell
          manufacturing for in-vitro modeling and cell therapies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
