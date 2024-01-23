import { BriefcaseIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { main_work_data, extra_work_data } from "../data";
import WorkItem from "./workItem";

function Work() {
  const [viewMore, setViewMore] = useState(false);

  const toggleView = () => {
    setViewMore(!viewMore)
  }

  return (
    <section id="work" className="text-gray-300 body-font">
      <div className="container px-5 py-10 w-4/5 mx-auto lg:px-40">
        <div className="flex flex-col mb-2">
          <BriefcaseIcon className="mx-auto inline-block w-10 mt-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center">
            Professional Experience
          </h1>
        </div>
        <div className="flex flex-wrap">
          {
            main_work_data.map((workObj) => <WorkItem workObj={workObj}/>)
          }
          {
            viewMore ? extra_work_data.map((workObj) => <WorkItem workObj={workObj}/>) : null
          }
        </div>
        <div className="flex justify-center mt-4">
          <button 
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={toggleView}
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
  }
  
  export default Work;