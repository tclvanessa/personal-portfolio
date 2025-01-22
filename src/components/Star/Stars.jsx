// components/Stars/Stars.jsx
import React from "react";
import Star from "./Star";

const Stars = ({ stars, layout }) => {
  return (
    <>
      <style>
        {`
          .star-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0) rotate(var(--rotate));
            }
            50% {
              transform: translateY(-10px) rotate(var(--rotate));
            }
            100% {
              transform: translateY(0) rotate(var(--rotate));
            }
          }

          .star-float:nth-child(odd) {
            animation-delay: -1.5s;
          }

          .star-float:nth-child(even) {
            animation-delay: -1s;
          }

          .star-float:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="absolute inset-0 w-full h-full">
        {stars.map((star, index) => (
          <Star key={index} {...star} layout={layout} />
        ))}
      </div>
    </>
  );
};

export default Stars;
