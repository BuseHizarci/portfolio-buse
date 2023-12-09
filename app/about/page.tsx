"use client";
import React, { useTransition, useState } from "react";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();
  return (
    <section className="flex flex-col items-center p-8 md:p-24 bg-slate-800 dark:bg-gray-800 text-slate-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4">
          <img src="mrktfmk" alt="mrktfmk" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl ">About me</h2>
          <p className="text-sm md:text-lg lg:text-xl p-4 ">
            Hello, I'm Buse HIZARCI, a dedicated Front-End Developer based in
            London, UK, leveraging the power of Next.js, Tailwind CSS, and
            TypeScript. My journey in the tech world is characterized by a
            passion for creating seamless and engaging digital experiences,
            focusing on the latest technologies to bring ideas to life.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 text-slate-400 font-semibold hover:text-slate-300 border border-slate-400 rounded px-3">
              Skills
            </span>
            <span className="mr-3 text-slate-400 font-semibold hover:text-slate-300 border border-slate-400 rounded px-3">
              Skills
            </span>
            <span className="mr-3 text-slate-400 font-semibold hover:text-slate-300 border border-slate-400 rounded px-3">
              Skills
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Display this image for medium and larger screens */}
          <img src="mrktfmk" alt="mrktfmk" />
        </div>
      </div>
    </section>
  );
};

export default About;
