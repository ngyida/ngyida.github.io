// Contact.js
import React from "react";
import { contact_data } from "../data";
import { PhoneIcon } from "@heroicons/react/solid";

function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col items-center">
        <PhoneIcon className="mx-auto inline-block w-10 mt-10" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Connect with Me
        </h1>
        <p className="text-center leading-relaxed mb-8">
          Feel free to reach out for collaborations or just a friendly hello 😊
        </p>
        <div className="w-full max-w-md flex flex-col items-center">
          {contact_data.map((contact, index) => (
            <div key={index} className="flex items-center mb-6">
              <img
                src={contact.icon}
                alt={`${contact.method} icon`}
                className="w-6 h-6 mr-3"
              />
              <span className="text-white">{contact.method}:</span>
              <a
                href={contact.value}
                className="text-blue-400 ml-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.displayValue || contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
