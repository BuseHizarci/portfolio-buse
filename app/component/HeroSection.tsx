import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
          <div className="col-span-7 place-self-center">
            <h1 className="text-gray-600 font-extrabold text-4xl lg:text-6xl">
              Hello I'm Buse
            </h1>

            <p className=" text-gray-500 text-lg lg:text-xl pt-8 pb-8">
              I enjoy turning complex challenges into user-friendly solutions.
              Based in London, I'm a self-taught Front-End Developer with
              expertise in JavaScript, CSS3, HTML5, ReactJS, and Git.
            </p>

            <div>
              <button className=" bg-slate-800 px-6 py-3 mr-4 rounded-full hover:bg-slate-600 text-white">
                Download CV
              </button>
              <button className="  px-6 py-3  rounded-full bg-slate-600 text-white hover:bg-slate-500">
                Download CV
              </button>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-5 lg:col-start-8 pt-12 mt-4 lg:mt-0 place-self-center ">
            <Image
              src="/images/ImageBuse.jpeg"
              alt="image-buse"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
