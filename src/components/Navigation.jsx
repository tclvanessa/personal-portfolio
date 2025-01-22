// components/Navigation.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants/index";

const Navigation = ({ item, index, totalItems, layout }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't render if this is the current page's navigation item
  if (
    (currentPath === "/" && item.name === "home") ||
    (currentPath === `/${item.name}` && item.name !== "home")
  ) {
    return null;
  }

  const getNavPosition = () => {
    // Filter out the current page's link when calculating positions
    const visibleItems = navigation.filter((navItem) => {
      if (currentPath === "/" && navItem.name === "home") return false;
      if (currentPath === `/${navItem.name}`) return false;
      return true;
    });

    const currentIndex = visibleItems.findIndex(
      (navItem) => navItem.name === item.name
    );

    if (layout === "01") {
      // Horizontal layout with fixed spacing
      const reverseIndex = visibleItems.length - 1 - currentIndex;
      return {
        right: `${reverseIndex * 160}px`,
        top: "0px",
      };
    } else {
      // Column layout - stack vertically from top
      return {
        right: "0px",
        top: `${currentIndex * 65}px`,
      };
    }
  };

  const position = getNavPosition();

  return (
    <div
      className="absolute transition-all duration-1000 ease-in-out"
      style={position}
    >
      <Link
        to={item.name === "home" ? "/" : `/${item.name}`}
        className="font-inter text-2xl hover:text-color-1 transition-colors whitespace-nowrap"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default Navigation;
