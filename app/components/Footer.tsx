import IorganbioLogo from "../assets/Iorganbio-2.svg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-gray-200 font-poppins text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 pt-12 pb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        <div className="md:w-1/3 text-black text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-medium text-black">
            © 2025 iOrganBio, Inc.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col gap-2 text-lg font-medium text-black text-center md:text-center mb-4 md:mb-0">
          <span>
            137 E Franklin St, Suite 300
            <br />
            Chapel Hill, NC 27514
          </span>
        </div>
        <div className="md:w-1/3 flex flex-col gap-2 text-lg font-medium items-center md:items-end text-black">
          <a
            href="#contact"
            className="hover:underline text-black inline-flex self-center md:self-end"
          >
            Contact
          </a>
          <a
            href="#partner"
            className="inline-flex self-center md:self-end hover:underline text-black"
          >
            Partner with Us
          </a>

          <a
            href="https://www.linkedin.com/jobs/iorganbio-jobs-worldwide?f_C=107422952&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-center md:self-end hover:underline text-black"
          >
            Careers
          </a>
          <div className="flex gap-4 self-center md:self-end">
            <a
              href="https://www.linkedin.com/company/iorganbio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#D745B2] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/iOrganBio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#D745B2] transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 pb-8 pt-8 flex flex-col gap-4 md:gap-2">
        <img
          src={IorganbioLogo}
          alt="iORGANBIO Logo"
          className="w-full max-w-5xl m-auto"
        />
        <p className="text-xl md:text-2xl font-medium mt-4 md:mt-2 text-center text-black">
          The Right Cells. Consistently. At Scale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
