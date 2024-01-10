import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import { contact_data } from "../data";

function contact() {
    return (
      <section id="contact" className="text-gray-400 bg-gray-900 body-font"> 
        <div className="container mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <PhoneIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Contact
            </h1>
          </div>
          <div className="flex jsutify-center grid grid-cols-3 gap-4 ">
            {contact_data.map((contact) => (
              <div key={contact.value} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <a href={contact.value}>
                  <img src={contact.icon} className="rounded-full border" alt={`${contact.method} icon`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default contact;