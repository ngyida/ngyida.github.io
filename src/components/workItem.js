// WorkItem.js
import React, { useState } from "react";

function WorkItem({ workObj }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    title,
    company,
    companyLogo,
    startDate,
    endDate,
    summary,
    descriptions,
    skills,
    companyLink,
  } = workObj;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onClick={toggleExpand}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleExpand();
        }
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center mb-2">
        {companyLogo && (
          <img
            src={companyLogo}
            alt={`${company} logo`}
            className="w-12 h-12 mr-4 object-contain"
          />
        )}
        <div>
          <h5 className="text-xl font-bold text-white">
            {title}{" "}
            <span className="text-rose-600">
              @
              {companyLink ? (
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {company}
                </a>
              ) : (
                company
              )}
            </span>
          </h5>
          <p className="text-sm text-gray-400">
            <em>
              {startDate} - {endDate}
            </em>
          </p>
        </div>
      </div>
      {summary && <p className="mb-2 text-gray-300">{summary}</p>}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap mb-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="mr-2 mb-2 px-2 py-1 bg-gray-700 text-sm text-white rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      {isExpanded && (
        <div className="mt-2">
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            {descriptions.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-end mt-2">
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default WorkItem;
