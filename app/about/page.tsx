"use client";
import React, { useTransition, useState } from "react";
import TabBotton from "../components/TabBotton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}
const About = () => {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-3 p-3 lg:text-lg pb-7">
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
        <ul className="list-disc pl-3 p-3 lg:text-lg pb-7">
          <li className="mb-4">
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              Bachelor`s Degree
            </time>
            <h3 className="text-lg font-semibold text-slate-500">
              Economics / 2015 - 2020
            </h3>{" "}
          </li>

          <li>
            <time className="mb-1 pb-3 text-xl font-normal leading-none text-gray-400 dark:text-slate-100">
              ICF Accredited Coaching Program
            </time>
            <h3 className="text-lg font-semibold text-slate-500">
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
            <h3 className="text-lg font-semibold text-slate-500">
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
            <h3 className="text-lg font-semibold text-slate-500">
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
    //   {
    //     title: "Certifications",
    //     id: "certifications",
    //     content: (
    //       <ul>
    //         {" "}
    //         <li>HTML5</li>
    //         <li>CSS , SCSS , Tailwind , Bootstrap , Figma</li>
    //         <li>JavaScript , TypeScript</li>
    //         <li> ReactJs , NextJs</li>
    //         <li>GIT , GitHub , Bitbucket</li>
    //         <li> Jira , SDLC , Agile , Kanban , Scrum </li>
    //       </ul>
    //     ),
    //   },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
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
              Hello, I`m Buse HIZARCI, a dedicated Front-End Developer based in
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

              {/* <TabBotton
                selectTab={() => handleTabChange("certification")}
                active={tab === "certification"}
              >
                {" "}
                Certification
              </TabBotton> */}
            </div>

            <div>
              <div className="p-5 ">
                {" "}
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </div>
            </div>
          </div>
        </div>
        <Spacer />
        <Footer />
      </section>
    </>
  );
};

export default About;
