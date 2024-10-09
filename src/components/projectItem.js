// projectItem.js
import React from "react";

function ProjectItem({ project }) {
  return (
    <a href={project.link} key={project.image} className="sm:w-1/2 p-4">
      <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
        <img
          alt="gallery"
          className="w-full h-full object-contain object-center"
          src={project.image}
        />
        <div className="absolute inset-0 px-8 py-10 z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed">{project.description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
