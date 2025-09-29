import IorganbioLogo from "../assets/Iorganbio-2.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-poppins text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 pt-12 pb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        <div className="md:w-1/3 text-black text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-medium text-black">
            © 2025 iOrganBio, Inc.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col gap-2 text-lg font-medium text-black text-center md:text-center mb-4 md:mb-0">
          <a
            href="mailto:contact@iorgan.bio"
            className="hover:underline text-black"
          >
            contact@iorgan.bio
          </a>
          <span>
            137 E Franklin St,
            <br />
            Suite 300
            <br />
            Chapel Hill NC 27714
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
            href="https://iorganbio.bamboohr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-center md:self-end hover:underline text-black"
          >
            Careers
          </a>
          <a
            href="https://www.linkedin.com/company/iorganbio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-center md:self-end hover:underline text-black"
          >
            LinkedIn
          </a>
          <div
            id="BambooHR"
            data-domain="iorganbio.bamboohr.com"
            data-version="1.0.0"
            data-departmentId=""
          ></div>
          <script
            src="https://iorganbio.bamboohr.com/js/embed.js"
            type="text/javascript"
            async
            defer
          ></script>
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
