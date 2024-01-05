"use client";
import React from "react";
import Image from "next/image";
import { RoughNotationGroup } from "react-rough-notation";
import { BoxAnimation } from "./BoxAnimations";
import { useRouter } from "next/navigation";
const HeroSection: React.FC = () => {
  const router = useRouter();

  const redirect = (url: string) => {
    router.push(url);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto   ">
      <div className="col-span-7 place-self-center  ">
        <h1 className="text-gray-600 font-bold sm:text-5xl text-3xl lg:text-5xl font-mono">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-800">
            Hello I`m
          </div>
        </h1>
        <RoughNotationGroup show={true}>
          <div className="lg:w-48 mt-5 w-40 lg:ml-0 ml-10">
            <BoxAnimation color="#10B981">
              <h3 className="sm:text-5xl text-3xl lg:text-5xl font-mono text-slate-600">
                Buse
              </h3>
            </BoxAnimation>
          </div>
        </RoughNotationGroup>
        <p className="text-gray-500 text-lg lg:text-xl pt-8 pb-8 font-mono">
          Front-end developer specializing in responsive web development using
          JavaScript ReactJS and NextJS.
          <br />
        </p>

        <div>
          <button
            onClick={() => redirect("/experience")}
            className="px-6 py-3 mr-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white hover:bg-gradient-to-br hover:from-violet-500 hover:to-blue-600"
          >
            See Experiences
          </button>
          <button
            onClick={() => redirect("/project")}
            className="px-6 py-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600"
          >
            See Projects
          </button>
        </div>
      </div>

      <div className=" lg:col-span-5 lg:col-start-8 pt-12 mt-4 lg:mt-0 place-self-center hidden md:block">
        <Image
          src="/images/buseimage2.png"
          alt="image-buse"
          width={300}
          height={200}
          className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
