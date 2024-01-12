// import { PhoneIcon } from "@heroicons/react/solid";
// import React from "react";
// import { contact_data } from "../data";

// function contact() {
//     return (
//       <section id="contact" className="text-gray-400 bg-gray-900 body-font"> 
//         <div className="container w-3/5 mx-auto text-center lg:px-40">
//           <div className="flex flex-col w-full">
//             <PhoneIcon className="mx-auto inline-block w-10 mt-10" />
//             <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
//               Contact
//             </h1>
//           </div>
//           {/* <div className="flex jsutify-center grid grid-cols-3 gap-4 "> */}
//           <div className="flex flex-wrap">
//             {contact_data.map((contact) => (
//               <div key={contact.value} className="w-1/3 p-10">
//                 <a href={contact.value}>
//                   <img src={contact.icon} className="aspect-square" style={{ "border-radius": "50%" }} alt={`${contact.method} icon`} />
//                 </a>
//                 <p>{contact.value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   export default contact;

import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import { contact_data } from "../data";

function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container w-3/5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <PhoneIcon className="mx-auto inline-block w-10 mt-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Contact
          </h1>
        </div>
        {/* Render a row for each contact */}
        {contact_data.map((contact, index) => (
          <div key={index} className="flex flex-row items-center justify-center mt-8">
            <img src={contact.icon} alt={contact.method} className="w-6 h-6 mr-3" style={{ "border-radius": "50%" }}/>
            <span className="text-white">{contact.method}: </span>
            {/* Make the value a link if it starts with http/https */}
            {contact.value.startsWith("http") ? (
              <a href={contact.value} className="text-blue-400 ml-1" target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            ) : (
              <span className="ml-1">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
