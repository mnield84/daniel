import IorganbioLogo from "../assets/Iorganbio-2.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-poppins text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 pt-12 pb-4 flex md:flex-row md:justify-between md:items-start">
        {/* Left: Copyright */}
        <div className="mb-8 md:mb-0 md:w-1/3 text-black text-center">
          <p className="text-lg font-medium text-black">
            © 2025 iOrganBio, Inc.
            <br />
            All rights reserved.
          </p>
        </div>
        {/* Center: Contact Info */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex flex-col gap-2 text-lg font-medium text-black text-center">
          <span>contact@iorganbio.com</span>
          <span>
            701 W Main St. Inglewood,
            <br />
            Suite 200
            <br />
            Durham NC 27701
          </span>
        </div>
        {/* Right: Links */}
        <div className="md:w-1/3 flex flex-col gap-2 text-lg font-medium items-start md:items-end text-black text-center">
          <a
            href="#contact"
            className="hover:underline text-black inline-flex self-center text-center"
          >
            Contact
          </a>
          <a
            href="#partner"
            className="inline-flex self-center hover:underline text-black"
          >
            Partner with Us
          </a>
          <a
            href="#privacy"
            className="hover:underline inline-flex self-center text-black"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:underline  inline-flex self-center text-black"
          >
            Terms & Condition
          </a>
        </div>
      </div>
      {/* Logo and tagline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 pb- lg:px-8 pb-8 pt-8 flex flex-col">
        <img
          src={IorganbioLogo}
          alt="iORGANBIO Logo"
          className="w-full max-w-5xl m-auto"
        />
        <p className="text-xl md:text-2xl mr-30 font-medium mt-4 text-right text-black">
          Engineering the Future of Cell Therapies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
