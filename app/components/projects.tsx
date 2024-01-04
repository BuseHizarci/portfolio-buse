import React from "react";
import projectData from "../constants/data";

interface Project {
  title: string;
  link: string;
  imgUrl: string;
}

interface ProjectCardProps {
  title: string;
  link: string;
  imgUrl: string;
  number: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  imgUrl,
  number,
}) => {
  return (
    <a href={link} className="block shadow-2xl mb-8">
      <div className="relative overflow-hidden">
        <div className="h-40 md:h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-2 left-2 text-gray-50 font-bold text-lg md:text-xl bg-purple-700 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-2 left-2 text-gray-50 font-bold text-lg md:text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto bg-gray-800 text-center md:text-left py-8 md:py-20">
        <h1 className="text-3xl md:text-9xl font-bold text-white">Projects</h1>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-20 pb-16">
          {projectData.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
