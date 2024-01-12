import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work_data } from "../data";
import WorkItem from "./workItem";

function work() {
  return (
    <section id="work" className="text-gray-300 body-font">
      <div className="container px-5 py-10 w-4/5 mx-auto lg:px-40">
        <div className="flex flex-col mb-2">
          <BriefcaseIcon className="mx-auto inline-block w-10 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center">
            Professional Experience
          </h1>
        </div>
        <div className="flex flex-wrap">
          {
            work_data.map((workObj) => <WorkItem workObj={workObj}/>)
          }
        </div>
      </div>
    </section>
  );
  }
  
  export default work;