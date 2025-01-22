import React from "react";
import { headerSocials } from "../constants";

const SocialIcon = ({ icon, url, index, layout }) => {
  const getIconPosition = () => {
    if (layout === "01") {
      // Row layout - spread horizontally
      return {
        left: `${index * 100}px`,
        top: "0px",
      };
    } else {
      // Column layout - stack vertically
      return {
        left: "0px",
        top: `${index * 80}px`,
      };
    }
  };

  const position = getIconPosition();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute block hover:scale-110 transition-transform"
      style={{
        left: position.left,
        top: position.top,
        transition: "all 1000ms ease-in-out",
      }}
    >
      <img src={icon} className="w-14 h-14 object-contain" alt="Social icon" />
    </a>
  );
};

const Socials = ({ layout }) => {
  return (
    <div className="relative" style={{ width: "500px", height: "400px" }}>
      {Object.entries(headerSocials).map(([key, value], index) => (
        <SocialIcon
          key={key}
          icon={value.icon}
          url={value.url}
          index={index}
          layout={layout}
        />
      ))}
    </div>
  );
};

export default Socials;
