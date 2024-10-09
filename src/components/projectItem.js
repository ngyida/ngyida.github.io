// ProjectItem.js
import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="p-4 md:w-1/2">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            alt={project.title}
            className="object-cover object-center w-full h-48 md:h-60 lg:h-72"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed text-gray-300 mb-3">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
