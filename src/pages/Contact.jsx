import React from "react";
import { navigation } from "../constants";
import Navigation from "../components/Navigation";
import { contactSocials } from "../constants";

const Contact = () => {
  return (
    <div className="min-h-screen bg-color-2 relative p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
      {/* Logo/Title */}
      <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] leading-none font-dokdo text-color-1 relative md:absolute md:top-0 md:left-4 z-10 mb-6 md:mb-0">
        CONTACT
      </h1>

      {/* Navigation */}
      <nav className="relative md:absolute md:top-6 md:right-6 z-10 mb-8 md:mb-0">
        <div className="relative w-full h-[10vh] sm:w-[90vw] md:w-[40vw] md:h-[30vh] max-w-[600px] max-h-[400px]">
          {navigation.map((item, index, array) => (
            <Navigation
              key={item.id}
              item={item}
              index={index}
              totalItems={array.length}
              layout="01"
            />
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex mt-10 md:mt-0 md:items-center justify-center">
        <div className="max-w-2xl w-full lg:mt-10">
          {/* Separator Line */}
          <div className="w-full border-t border-black my-4" />
          {/* Location */}
          <div className="font-spaceMono text-xs w-full flex justify-between mb-4">
            <span>location</span>
            <span>bay area, ca</span>
          </div>

          {/* Links Container */}
          <div className="mx-[15vw] sm:mx-[25vw] lg:mx-[15vw] w-full flex flex-col items-start space-y-14 my-20 md:my-28 lg:my-14 px-4">
            {Object.entries(contactSocials).map(([key, { url, icon }]) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
                className="w-full flex items-center gap-8 hover:opacity-80 transition-opacity font-spaceMono text-xl"
              >
                <img src={icon} alt={`${key} icon`} className="w-12 h-12" />
                <span className="text-2xl">{key}</span>
              </a>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="font-spaceMono text-xs w-full flex justify-between mt-4">
            <span>feel free to</span>
            <span>reach out! :)</span>
          </div>

          {/* Bottom Separator Line */}
          <div className="w-full border-t border-black mt-4" />
        </div>
      </main>
    </div>
  );
};

export default Contact;
