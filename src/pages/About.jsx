import React from "react";
import Navigation from "../components/Navigation";
import { navigation } from "../constants";
import {
  catPaws1,
  catPaws2,
  catPaws3,
  catPaws4,
  catPaws5,
  catPaws6,
  greyPawPrint,
} from "../assets";

const pawPrintPositions = [
  { top: "30%", left: "-1%", rotation: "90deg", scale: 0.9 },
  { top: "65%", left: "-3%", rotation: "90deg", scale: 0.9 },
  { top: "54%", left: "14%", rotation: "80deg", scale: 0.9 },
  { top: "84%", left: "20%", rotation: "50deg", scale: 0.9 },
  { top: "54%", left: "35%", rotation: "38deg", scale: 0.9 },
  { top: "82%", left: "53%", rotation: "20deg", scale: 0.9 },
  { top: "36%", left: "54%", rotation: "20deg", scale: 0.9 },
  { top: "55%", left: "77%", rotation: "18deg", scale: 0.9 },
  { top: "15%", left: "76%", rotation: "20deg", scale: 0.9 },
  { top: "30%", left: "96%", rotation: "20deg", scale: 0.9 },
];

const techItems = [
  { tech: "Python", paw: catPaws1, offset: "" },
  { tech: "Java", paw: catPaws4, offset: "" },
  { tech: "C", paw: catPaws6, offset: "" },
  { tech: "Go", paw: catPaws2, offset: "" },
  { tech: "HTML", paw: catPaws5, offset: "" },
  { tech: "CSS", paw: catPaws3, offset: "" },
  { tech: "React", paw: catPaws3, offset: "" },
  { tech: "Tailwind", paw: catPaws6, offset: "" },
  { tech: "Javascript", paw: catPaws1, offset: "" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-color-2 relative p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Background Paw Prints - Only show on larger screens */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {pawPrintPositions.map((position, i) => (
          <img
            key={i}
            src={greyPawPrint}
            alt="Paw print"
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
              transform: `rotate(${position.rotation}) scale(${position.scale})`,
            }}
          />
        ))}
      </div>

      {/* Logo/Title - Responsive positioning and size */}
      <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] leading-none font-dokdo text-color-1 relative md:absolute md:top-2 md:left-4 z-10 mb-6 md:mb-0">
        ABOUT ME
      </h1>

      {/* Navigation - Responsive positioning */}
      <nav className="relative md:absolute md:top-6 md:right-6 z-10 mb-8 md:mb-0">
        <div className="relative w-full md:w-[40vw] h-[30vh] md:h-[40vh] max-w-[600px] max-h-[400px]">
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

      {/* Content - Responsive margins and width */}
      <div className="w-full max-w-3xl md:mt-[15vh] mx-4 sm:mx-8 md:ml-[5vw] z-10 relative">
        <div className="font-spaceMono text-base sm:text-lg md:text-[clamp(1rem,1.2vw,1.075rem)] leading-relaxed">
          <p className="mb-4">
            Hello World! My name is Vanessa and I am a fourth year Computer
            Science Major studying at the University of San Francisco. I am
            passionate about software development and machine learning, and want
            to use it to build impactful digital experiences! Beyond coding, I
            enjoy going to the gym, biking, and playing with cats.
          </p>
        </div>
      </div>

      {/* Tech Stack Section - Responsive grid and spacing */}
      <div className="relative md:mt-[1vh] lg:mt-[3vh] mx-4 sm:mx-8 md:ml-[5vw] w-auto md:w-[90vw]">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[clamp(2rem,4vw,4rem)] font-dokdo text-color-1 md:mb-6 md:mt-4">
          TECH STACK
        </h2>

        {/* Tech Stack Container - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-4 md:gap-x-[clamp(2rem,8vw,12rem)] gap-y-8 sm:gap-y-10 md:gap-y-[clamp(2rem,10vh,12rem)]">
          {techItems.map((item, index) => (
            <div key={index} className="relative ml-0 sm:ml-2 md:ml-4">
              {/* Cat Paw - Hide on small screens */}
              <div className="absolute inset-0 md:flex justify-start">
                <div style={{ transform: "md:scale(1.1) lg:scale(1.3)" }}>
                  <img
                    src={item.paw}
                    alt=""
                    className="w-[clamp(6rem,12vw,11rem)]"
                    style={{
                      maxWidth: "144px",
                    }}
                  />
                </div>
              </div>

              {/* Tech Stack Bubble - Responsive sizing */}
              <div
                className="bg-[#d9d9d9] font-spaceMono rounded-[1rem] sm:rounded-[1.25rem] py-3 sm:py-4 text-center text-sm sm:text-base md:text-[clamp(0.8rem,1vw,0.9rem)] shadow-md mx-auto hover:scale-105 transition-transform duration-200 relative z-10"
                style={{
                  width: "clamp(6rem, 12vw, 9rem)",
                  maxWidth: "144px",
                  boxShadow: "3px 4px 3px rgba(0, 0, 0, 25%)",
                }}
              >
                {item.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
