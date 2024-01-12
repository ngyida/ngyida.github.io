import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work_data } from "../data";
import WorkItem from "./workItem";

function work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Professional Experience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            work_data.map((workObj) => <WorkItem workObj={workObj}/>)
          }
        </div>
      </div>
    </section>
  );
  }
  
  export default work;