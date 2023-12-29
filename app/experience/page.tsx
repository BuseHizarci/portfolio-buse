import React from "react";
import Particles from "../components/particles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Experience = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 relative">
      <Navbar />
      <Particles
        className="absolute inset-0 z-[-10] animate-fade-in bg-slate-800"
        quantity={900}
      />
      <ol className="container mx-auto relative border-s border-gray-700">
        <h2 className="text-3xl md:text-3xl lg:text-4xl text-center p-4 text-purple-700">
          {" "}
          W O R K E X P E R I E N C E
        </h2>
        <li className="mb-10 ms-4 pt-5">
          <time className="mb-1 text-xl font-normal leading-none 0 text-slate-300">
            Junior Front End Developer - Vision Direct
          </time>

          <h3 className="text-lg font-semibold text-slate-400 ">
            January 2021 - Present
          </h3>
          <p className="mb-4 text-base font-normal text-slate-500 ">
            <ul className="list-disc p-5 text-lg sm:text-2xl">
              <li>
                Developed and maintained responsive web pages and applications
                for global retail websites using HTML, CSS, and JavaScript,
                ReactJS. .
              </li>
              <li>
                {" "}
                Utilized ReactJS to build mobile-responsive web pages that
                reflect modern design and are compatible with all known devices{" "}
              </li>
              <li>
                Worked with UI/UX design wireframes to produce high-quality
                markup using HTML / CSS and ReactJS
              </li>
              <li>Manage A/B tests and implement to the website.</li>
              <li>Strong profession using Magento/Coremedia</li>
            </ul>
          </p>
          <a
            href="https://www.visiondirect.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-purple-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800"
          >
            Go to website{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>{" "}
        <li className="mb-10 ms-4 pt-5">
          <time className="mb-1 text-xl font-normal leading-none 0 text-slate-300">
            Junior Front End Developer - Takenow.co.uk
          </time>
          <h3 className="text-lg font-semibold text-slate-400 ">
            May 2021 - September 2021
          </h3>
          <p className="mb-4 text-base font-normal  text-slate-400">
            <ul className="list-disc p-5 text-lg sm:text-2xl">
              <li>
                <a
                  href="https://www.thegrillstation.uk"
                  target="_blank" // Open link in a new tab/window
                  rel="noopener noreferrer" // Security best practice for opening external links
                  className="text-slate-400 hover:underline " // Adjust styling as needed
                >
                  https://www.thegrillstation.uk
                </a>
              </li>
              <li>
                {" "}
                TakeNow is a website that provides delivery and post support for
                restaurants , running as a client-side app right now.{" "}
              </li>
              <li>
                Worked collaboratively with the development team to design,
                develop, and maintain responsive web pages and applications
                using HTML, CSS, and JavaScript.
              </li>
              <li>
                Contributed to the creation of a new, modern UI/UX design system
                for the company`s e-commerce platform using ReactJs.
              </li>
            </ul>
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=uk.co.takenow&hl=en_AU&pli=1"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-purple-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800"
          >
            Download App{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4 pt-5">
          <time className="mb-1 text-xl font-normal leading-none 0 text-slate-300">
            Coaching and Event Specilist - House of Human Coaching{" "}
          </time>
          <h3 className="text-lg font-semibold text-slate-400 ">
            January 2021 - Present
          </h3>
          <p className="mb-4 text-base font-normal text-slate-400">
            <ul className="list-disc p-5 text-lg sm:text-2xl">
              <li>
                Organized and be part of coaching programs for the corporates.
              </li>
              <li>
                Managed and oversaw the daily operations of BUBA Campus, a
                new-generation entrepreneurship campus and incubation center for
                startups, founded by the BUBA Business Angels Network and House
                of Human Coaching & Training.
              </li>
              <li>
                Worked closely with EnerjiSa Group and Johnson & Johnson to
                ensure the success of the organization and its members.
              </li>
            </ul>
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=uk.co.takenow&hl=en_AU&pli=1"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-purple-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800"
          >
            Go to Website{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      </ol>
      <Footer />{" "}
    </div>
  );
};

export default Experience;
