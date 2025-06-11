import React from "react";
import bgImage from "../assets/Rectangle-11.png";
import PaperIcon from "../assets/paper.svg";

const subjects = [
  "General Inquiry",
  "Partnership",
  "Research Collaboration",
  "Media",
  "Other",
];

const ContactSection = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center font-poppins overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-20 gap-12">
        {/* Left: Heading & Text */}
        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
          Let's Collaborate on the Future
          <br />
          of Cell Therapies
        </h2>
        <div className="flex gap-[300px]">
          <div className="flex-1 flex flex-col text-white max-w-xl max-w-[410px]">
            <p className="text-lg opacity-80">
              Whether you're building a new therapy, researching disease models,
              or scaling biomanufacturing — our team would love to connect.
            </p>
          </div>
          <div className="flex-1">
            {/* Right: Form */}
            <form
              className="flex-1 bg-transparent flex flex-col gap-6 max-w-xl"
              action="https://formsubmit.co/contact@iorganbio.com"
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullname"
                  className="text-white text-base font-medium"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60"
                  placeholder=""
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-white text-base font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60"
                  placeholder=""
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-white text-base font-medium"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white appearance-none"
                  defaultValue=""
                  name="subject"
                >
                  <option value="" disabled hidden>
                    Select a subject
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s} className="text-black">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-white text-base font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60 resize-none"
                  placeholder=""
                  name="message"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="flex flex-col items-center justify-center bg-pink-200 hover:bg-pink-300 transition w-32 h-32 rounded-full shadow-lg group focus:outline-none"
                >
                  <img
                    src={PaperIcon}
                    alt="Send"
                    className="w-8 h-8 mb-2 group-hover:scale-110 transition"
                  />
                  <span className="text-[#4C294E] text-[16px] font-medium">
                    Send
                    <br />
                    Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
