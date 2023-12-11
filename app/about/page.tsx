"use client";
import React, { useTransition, useState } from "react";
import TabBotton from "../components/TabBotton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-3 p-3 lg:text-lg pb-5">
          <li>HTML5</li>
          <li>CSS , SCSS , Tailwind , Bootstrap , Figma</li>
          <li>JavaScript , TypeScript</li>
          <li> ReactJs , NextJs</li>
          <li>GIT , GitHub , Bitbucket</li>
          <li> Jira , SDLC , Agile , Kanban , Scrum </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-3 p-3 lg:text-lg pb-5">
          <li className="mb-4">
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              Bachelor's Degree{" "}
            </time>
            <h3 className="text-lg font-semibold dark:text-purple-600 dark:text-white">
              Economics / 2015 - 2020{" "}
            </h3>{" "}
          </li>

          <li>
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              ICF Accredited Coaching Program{" "}
            </time>
            <h3 className="text-lg font-semibold dark:text-purple-600 dark:text-white">
              Coaching Program / 2019{" "}
            </h3>
            <h2 className="pb-4">
              Accredited coach recognized by the International Coaching
              Federation (ICF), bringing a unique blend of coaching expertise
              and technical skills.
            </h2>{" "}
          </li>
          <li>
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              Front-end Bootcamp{" "}
            </time>
            <h3 className="text-lg  font-semibold dark:text-purple-600 dark:text-white">
              Scrimba Bootcamp
            </h3>
            <h2 className="pb-4">
              Scrimba is an online learning platform that offers interactive
              coding tutorials.
            </h2>{" "}
          </li>
          <li>
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              React Front-end Bootcamp{" "}
            </time>
            <h3 className="text-lg font-semibold dark:text-purple-600 dark:text-white">
              Techpro Education
            </h3>
            <h2>
              Live online classes with experienced instructors. From HTML to
              ReactJs intense bootcamp.
            </h2>{" "}
          </li>
        </ul>
      ),
    },
    // {
    //   title: "Experience",
    //   id: "experience",
    //   content: (
    //     <ul>
    //       {" "}
    //       <li>HTML5</li>
    //       <li>CSS , SCSS , Tailwind , Bootstrap , Figma</li>
    //       <li>JavaScript , TypeScript</li>
    //       <li> ReactJs , NextJs</li>
    //       <li>GIT , GitHub , Bitbucket</li>
    //       <li> Jira , SDLC , Agile , Kanban , Scrum </li>
    //     </ul>
    //   ),
    // },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul>
          {" "}
          <li>HTML5</li>
          <li>CSS , SCSS , Tailwind , Bootstrap , Figma</li>
          <li>JavaScript , TypeScript</li>
          <li> ReactJs , NextJs</li>
          <li>GIT , GitHub , Bitbucket</li>
          <li> Jira , SDLC , Agile , Kanban , Scrum </li>
        </ul>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className=" items-center p-8 md:p-20 bg-slate-800 text-slate-400">
        <Navbar />
        <div className="container mx-auto grid grid-cols-1 gap-8 w-full mt-7">
          <div className="mt-4 md:md-0 text-left flex flex-col h-full ">
            <h2 className="text-3xl md:text-3xl lg:text-4xl text-center p-4 pb-9">
              {" "}
              A B O U T M E{" "}
            </h2>
            <p className="text-lg md:text-lg lg:text-2xl p-1">
              Hello, I'm Buse HIZARCI, a dedicated Front-End Developer based in
              London, UK, leveraging the power of{" "}
              <span className="font-medium text-teal-300 hover:text-purple-700 focus-visible:text-teal-300">
                React.js,{" "}
              </span>
              <span className="font-medium text-teal-300 hover:text-purple-700 focus-visible:text-teal-300">
                Next.js,{" "}
              </span>
              <span className="font-medium text-teal-300 hover:text-purple-700 focus-visible:text-teal-300">
                TypeScript,{" "}
              </span>
              <span className="font-medium text-teal-300 hover:text-purple-700 focus-visible:text-teal-300">
                Tailwind.{" "}
              </span>
              My journey in the tech world is characterized by a passion for
              creating seamless and engaging digital experiences, focusing on
              the latest technologies to bring ideas to life. My experience
              encompasses Agile methodologies, A/B testing, and proficient use
              of Git/Github. At TakeNow.co.uk, I actively contributed to the
              creation of a new UI/UX design system using ReactJs, underscoring
              my commitment to staying abreast of industry trends
            </p>
            <div
              className="flex flex-row mt-8 mb-5  justfify-between gap-4 md:gap-6 lg:gap-14   
        "
            >
              <TabBotton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabBotton>
              <TabBotton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabBotton>

              <TabBotton
                selectTab={() => handleTabChange("certification")}
                active={tab === "certification"}
              >
                {" "}
                Certification
              </TabBotton>
            </div>
            <div>
              <div className="p-5 ">
                {" "}
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </div>
            </div>
          </div>
        </div>
        <ol className="container mx-auto relative border-s border-purple-200 dark:border-gray-700  ">
          <h2 className="text-3xl md:text-3xl lg:text-4xl text-center p-4">
            {" "}
            W O R K E X P E R I E N C E
          </h2>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              Junior Front End Developer
            </time>
            <h3 className="text-lg font-semibold dark:text-white dark:text-purple-700">
              January 2021 - Present
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="list-disc p-5 text-lg sm:text-2xl">
                <li>
                  Developed and maintained responsive web pages and applications
                  for global retail websites using HTML, CSS, and JavaScript,
                  ReactJS. .
                </li>
                <li>
                  {" "}
                  Utilized ReactJS to build mobile-responsive web pages that
                  reflect modern design and are compatible with all known
                  devices{" "}
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
              href="www.visiondirect.co.uk"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 dark:bg-purple-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              Junior Front End Developer
            </time>
            <h3 className="text-lg font-semibold dark:text-pruple-600 dark:text-white">
              May 2021 - September 2021
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="list-disc p-5 text-lg sm:text-2xl">
                <li>
                  https://www.citydoner.de/ : Provide special restaurant
                  websites
                </li>
                <li>
                  {" "}
                  TakeNow is a website that provides delivery and post support
                  for restaurants , running as a client-side app right now.{" "}
                </li>
                <li>
                  Worked collaboratively with the development team to design,
                  develop, and maintain responsive web pages and applications
                  using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Contributed to the creation of a new, modern UI/UX design
                  system for the company's e-commerce platform using ReactJs.
                </li>
              </ul>
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=uk.co.takenow&hl=en_AU&pli=1"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:bg-violet-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              Coaching and Event Specilist - House of Human Coaching{" "}
            </time>
            <h3 className="text-lg font-semibold dark:text-purple-600 dark:text-white">
              January 2021 - Present
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="list-disc p-5 text-lg sm:text-2xl">
                <li>
                  Organized and be part of coaching programs for the corporates.
                </li>
                <li>
                  Managed and oversaw the daily operations of BUBA Campus, a
                  new-generation entrepreneurship campus and incubation center
                  for startups, founded by the BUBA Business Angels Network and
                  House of Human Coaching & Training.
                </li>
                <li>
                  Worked closely with EnerjiSa Group and Johnson & Johnson to
                  ensure the success of the organization and its members.
                </li>
              </ul>
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=uk.co.takenow&hl=en_AU&pli=1"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:bg-purple-700 border border-slate-900 rounded-lg hover:bg-purple-700 hover:text-slate-800  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
        <Footer />
      </section>
    </>
  );
};

export default About;
