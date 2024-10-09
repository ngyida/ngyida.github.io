// Testimonials.js
import React, { useState } from "react";
import { testimonials_data } from "../data";
import { ChatAlt2Icon } from "@heroicons/react/solid";

function Testimonials() {
  return (
    <section id="testimonials" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <ChatAlt2Icon className="mx-auto inline-block w-10 mt-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Testimonials
          </h1>
          <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Here's what my colleagues have to say about me.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials_data.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { author, position, company, shortQuote, fullText } = testimonial;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="p-4 md:w-1/2 w-full"
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
      <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <p className="leading-relaxed mb-6 text-gray-300">
          <span className="text-2xl">“</span>
          {shortQuote}
          <span className="text-2xl">”</span>
        </p>
        {isExpanded && (
          <div className="mt-4">
            <div className="text-gray-300 whitespace-pre-wrap overflow-y-auto max-h-64 pr-2">
              {fullText}
            </div>
          </div>
        )}
        <div className="inline-flex items-center mt-6">
          <div className="flex-grow flex flex-col">
            <span className="title-font font-medium text-white">
              {author}
            </span>
            <span className="text-gray-500 text-sm">
              {position} at {company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
