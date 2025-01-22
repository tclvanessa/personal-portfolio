import React from "react";
import { ellipse1 } from "../assets";

const Layout = ({ currentLayout, setCurrentLayout }) => {
  return (
    <div className="absolute top-1/3 left-1/3 flex flex-row items-center gap-4">
      {/* Layout Word */}
      <div className="font-spaceMono text-sm">LAYOUT</div>
      
      {/* Ellipse 01 */}
      <div className="relative w-10 h-10">
        <img
          src={ellipse1}
          alt="Custom Ellipse"
          className="absolute w-full h-full object-contain"
        />
        <button
          className={`absolute inset-0 flex items-center justify-center font-spaceMono text-xs ${
            currentLayout === "01" ? "text-color-1" : ""
          }`}
          onClick={() => setCurrentLayout("01")}
        >
          01
        </button>
      </div>

      {/* Ellipse 02 */}
      <div className="relative w-10 h-10">
        <img
          src={ellipse1}
          alt="Custom Ellipse"
          className="absolute w-full h-full object-contain"
        />
        <button
          className={`absolute inset-0 flex items-center justify-center font-spaceMono text-xs ${
            currentLayout === "02" ? "text-color-1" : ""
          }`}
          onClick={() => setCurrentLayout("02")}
        >
          02
        </button>
      </div>
    </div>
  );
};

export default Layout;