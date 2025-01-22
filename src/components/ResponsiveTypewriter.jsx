import React from "react";
import Typewriter from "typewriter-effect";

const ResponsiveTypewriter = ({ layout = "01", introdata }) => {
  const typewriterStrings = [
    `I am ${introdata.animated.first}`,
    `I am ${introdata.animated.second}`,
    `I am ${introdata.animated.third}`,
  ];

  return (
    <div className="font-spaceMono text-3xl leading-relaxed">
      <div
        className="transition-[width] duration-1000 ease-in-out overflow-hidden whitespace-nowrap"
        style={{
          width: "500px",
          marginLeft: layout === "02" ? "calc(100% - 500px)" : "0",
          transition: "margin-left 1000ms ease-in-out",
        }}
      >
        <div
          className={`${
            layout === "02" ? "text-right" : "text-left"
          } transition-[text-align] duration-1000 ease-in-out`}
        >
          <Typewriter
            options={{
              strings: typewriterStrings,
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTypewriter;
