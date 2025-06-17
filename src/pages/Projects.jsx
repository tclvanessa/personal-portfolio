import React from "react";
import Navigation from "../components/Navigation";
import { navigation } from "../constants";

const ProjectCard = ({
  title,
  description,
  technologies,
  codeLink,
  websiteLink,
}) => (
  <div
    className="bg-color-3 pt-3 px-5 pb-4 shadow-md hover:scale-105 transition-transform duration-200 flex flex-col"
    style={{ boxShadow: "10px 10px 5px rgba(0, 0, 0, 25%)" }}
  >
    <h2 className="text-xl font-spaceMono text-color-1">{title}</h2>
    <p className="mt-1 font-spaceMono text-base leading-normal flex-grow">
      {description}
    </p>
    <div className="mt-4 flex justify-between items-center">
      <div className="flex flex-wrap gap-2 flex-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-color-4 font-spaceMono text-color-5 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 font-spaceMono ml-4">
        {codeLink && (
          <a
            href={codeLink}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {websiteLink && (
          <a
            href={websiteLink}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Website
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Search Engine",
      description:
        "A search engine web crawler that crawls a website while running a web server, enabling users to search up a term and display the most relevant link containing that term.",
      technologies: ["Go", "HTML", "CSS"],
      codeLink: "https://github.com/tclvanessa/SearchEngine",
    },
    {
      title: "Hebrew Model Character Identification",
      description:
        "A machine learning model for identifying Hebrew characters in images by training the model to decode text from images with a single word.",
      technologies: ["Python"],
      codeLink:
        "https://github.com/tclvanessa/Hebrew-Model-Character-Identification",
    },
    {
      title: "Illinois Gerrymandering Analysis",
      description:
        "Used MCMC sampling with GerryChain to analyze redistricting fairness in Illinois by evaluating district plans with metrics like partisan bias, efficiency gap, and population balance.",
      technologies: ["Python"],
      codeLink:
        "https://github.com/tclvanessa/Gerrymandering-Analysis-on-Illinois",
    },
    {
      title: "Healthcare Form Agent",
      description:
        "An AI-powered automation tool using Playwright and LLMs to fill out medical forms based of a person's first and last name.",
      technologies: ["Typescript", "Node.js"],
      codeLink: "https://github.com/tclvanessa/healthcare-form-agent",
    },
    {
      title: "Duets.ai",
      description:
        "An AI-powered language application that automatically transcribes your Zoom session with a language coach and generates personalized feedback and exercises based on the session on your lesson dashboard.",
      technologies: ["Python"],
      websiteLink: "https://duets.ai/",
    },
    {
      title: "Restricted Grep",
      description:
        "A simplified, restricted version of grep (rgrep) supporting only a few regular operators to match pattern sets to identify specific files (e.g. . (period), + (plus sign), ? (question mark), \\ (backslash)).",
      technologies: ["C"],
      codeLink: "https://github.com/tclvanessa/Restricted-Grep",
    },
  ];

  return (
    <div className="min-h-screen bg-color-2 relative p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Logo/Title */}
      <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] leading-none font-dokdo text-color-1 relative md:absolute md:top-0 md:left-4 z-10 mb-6 md:mb-0">
        PROJECTS
      </h1>

      {/* Navigation */}
      <nav className="relative md:absolute md:top-6 md:right-6 z-10 mb-8 md:mb-0">
        <div className="relative w-full sm:w-[88vw] md:w-[40vw] h-[30vh] md:h-[40vh] max-w-[600px] max-h-[400px]">
          {navigation.map((item, index, array) => (
            <Navigation
              key={item.id}
              item={item}
              index={index}
              totalItems={array.length}
              layout="01"
            />
          ))}
        </div>
      </nav>

      {/* Projects Grid */}
      <div className="container mx-auto relative z-10 sm:mt-[1vh] md:mt-[6vh] lg:mt-[8vh] xl:mt-[16vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-10 xl:gap-x-20 sm:gap-y-6 md:gap-y-8 lg:gap-y-14 xl:gap-y-16 mx-0 sm:mx-8 md:mx-[0vw]">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
