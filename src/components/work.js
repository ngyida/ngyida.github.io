// Work.js
import { BriefcaseIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { main_work_data, extra_work_data } from "../data";
import WorkItem from "./workItem";

function Work() {
  const [viewMore, setViewMore] = useState(false);

  const toggleView = () => {
    setViewMore(!viewMore);
  };

  // Combine main and extra work data based on viewMore state
  const allWorkData = viewMore
    ? [...main_work_data, ...extra_work_data]
    : main_work_data;

  return (
    <section id="work" className="text-gray-300 body-font">
      <div className="container px-5 py-10 w-full mx-auto lg:px-40">
        <div className="flex flex-col mb-10">
          <BriefcaseIcon className="mx-auto inline-block w-10 mt-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center">
            Professional Experience
          </h1>
        </div>
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute w-1 bg-gray-700 h-full left-8"></div>
          <div className="space-y-12">
            {allWorkData.map((workObj, index) => (
              <div key={index} className="relative md:flex md:items-center group">
                {/* Timeline Indicator */}
                <div className="hidden md:block absolute left-8 transform -translate-x-1/2 bg-blue-500 rounded-full h-4 w-4"></div>
                {/* Work Item */}
                <div className="md:ml-16 md:w-full">
                  <WorkItem workObj={workObj} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            onClick={toggleView}
            aria-expanded={viewMore}
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Work;
