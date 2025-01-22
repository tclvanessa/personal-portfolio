// components/Stars/Star.jsx
import React from "react";

const Star = ({ top, right, size, rotate, src, layout }) => {
  const getStarPosition = () => {
    if (layout === "01") {
      return { top, right };
    }

    // Layout 02 positions
    const layout02Positions = {
      150: { top: 44, right: 58 },
      90: { top: 28, right: 40 },
      45: { top: 84, right: 72 },
      80: { top: 54, right: 80 },
      88: { top: 19, right: 68 },
      120: { top: 64, right: 40 },
    };

    return layout02Positions[size] || { top, right };
  };

  const position = getStarPosition();

  return (
    <img
      src={src}
      alt="Decorative star"
      style={{
        position: "absolute",
        top: `${position.top}%`,
        right: `${position.right}%`,
        width: `${size}px`,
        height: `${size}px`,
        "--rotate": `${rotate}deg`,
        transition: "top 1000ms ease-in-out, right 1000ms ease-in-out",
      }}
      className="hover:scale-125 star-float"
    />
  );
};

export default Star;
