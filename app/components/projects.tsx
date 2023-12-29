import React from "react";
import projectData from "../constants/data";

interface Project {
  title: string;
  link: string;
  imgUrl: string;
}

interface ProjectsProps {
  projects: Project[];
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
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-6 right-10 text-gray-50 font-bold text-xl bg-purple-700 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48  bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
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
