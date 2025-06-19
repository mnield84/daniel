import { useState } from "react";
import { Link } from "react-router";
import IorganbioLogo from "../assets/Iorganbio.svg";
import MenuButtonIcon from "../assets/menu-button.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 py-12">
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
              className="hidden md:block text-pink-300 text-17px underline font-poppins decoration-2 decoration-pink-300 underline-offset-4 hover:text-pink-200 transition"
              style={{ paddingBottom: 2 }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Partner With Us
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
      {isMenuOpen && (
        <div className="md:hidden bg-black/80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-200 hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-200 hover:bg-white/10"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-200 hover:bg-white/10"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-200 hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
