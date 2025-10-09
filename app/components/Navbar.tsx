import { useState } from "react";
import { Link } from "react-router";
import IorganbioLogo from "../assets/Iorganbio.svg";
import MenuButtonIcon from "../assets/menu-button.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-20 bg-transparent font-poppins"
    >
      <div className="py-4 max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 sm:py-12">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="shrink-0 flex items-center">
              <img
                src={IorganbioLogo}
                alt="iORGANBIO Logo"
                className="w-[200px] md:w-auto h-8 filter brightness-0 invert"
              />
            </Link>
          </div>

          {/* Right side: Partner With Us and Menu button */}
          <div className="flex items-center space-x-6">
            <Link
              to="#partner"
              className="hidden md:block"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <button className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-4 rounded-full bg-[#D745B2] text-white text-lg font-regular focus:outline-none focus:ring-2 focus:ring-pink-300 hover:bg-[#3a2a3a] transition shadow-md">
                <span className="hidden md:inline text-white">
                  Partner With Us
                </span>
                <span className="md:hidden text-white">Partner</span>
              </button>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-4 rounded-full bg-white/10 text-white text-lg font-regular focus:outline-none focus:ring-2 focus:ring-pink-300 hover:bg-[#3a2a3a] transition shadow-md"
            >
              <img src={MenuButtonIcon} alt="Menu" className="h-4 w-3" />
              <span className="hidden md:inline ml-2 text-white">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/80 z-50"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Sliding menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute right-0 top-0 w-3/4 max-w-xs bg-black h-full shadow-lg z-60 flex flex-col items-start"
            >
              {/* Animated Logo with Ripple Effect */}
              <div className="relative w-full flex justify-start items-center h-18 mb-4">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative z-10"
                >
                  <img
                    src={IorganbioLogo}
                    alt="iORGANBIO Logo"
                    className="w-[160px] h-10 ml-4"
                  />
                </motion.div>
              </div>
              <div className="px-4 pt-2 pb-6 space-y-1 w-full">
                <button
                  className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>
                <a
                  href="#home"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </a>
                <a
                  href="#cellforge"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cellforge")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  About
                </a>
                <a
                  href="#cellforge"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cellforge")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  CellForge
                </a>
                <a
                  href="#cellatlas"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("cellatlas")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Cell Atlas
                </a>
                <a
                  href="#team"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("team")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Our Team
                </a>
                <a
                  href="#partner"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("partner")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Investors and Partners
                </a>
                <a
                  href="#news"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("news")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  News & Resources
                </a>
                <a
                  href="#download"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Publications
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Partnering
                </a>
                <a
                  href="#footer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-300 hover:bg-white/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("footer")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Careers
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
