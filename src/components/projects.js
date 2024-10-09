// projects.js
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects_data } from "../data";
import ProjectItem from "./projectItem";

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-4">
          <CodeIcon className="mx-auto inline-block w-10 mt-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects_data.map((project) => (
            <ProjectItem key={project.image} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
