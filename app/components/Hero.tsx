import { Link } from "react-router";
import mobileBg from "../assets/Rectangle-50.png";
import AnimatedComponent from "./AnimatedComponent";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center md:items-end justify-center md:justify-end overflow-hidden font-poppins">
      {/* Bottom Solid Purple Background */}
      <div className="absolute inset-0 w-full h-full bg-[#230B37] z-0" />

      {/* Video Background with 30% Opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-10"
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

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50"
        style={{
          background:
            "linear-gradient(0deg, #1B0D1C 0%, rgba(176, 209, 220, 0) 100%)",
        }}
      />

      <div className="relative z-18 flex flex-col items-center md:items-start justify-center w-full px-4 md:pb-25 md:px-8 max-w-7xl mx-auto">
        <AnimatedComponent
          animation="fadeInUp"
          delay={0.2}
          duration={0.8}
          className="w-full"
        >
          <h1 className="text-white text-4xl md:text-[84px] font-medium text-left leading-tight mb-6 md:mb-8">
            Supplying the Cells to Improve the Human Condition
          </h1>
        </AnimatedComponent>

        <AnimatedComponent
          animation="fadeInUp"
          delay={0.4}
          duration={0.8}
          className="w-full"
        >
          <p className="text-gray-200 text-base md:text-xl text-left max-w-3xl md:max-w-[444px]">
            iOrganBio's CellForge™ Platform transforms the way we create human
            cells—enabling scalable, reproducible, and intelligent cell
            manufacturing for in-vitro modeling and cell therapies.
          </p>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Hero;
