import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigation, introdata } from "../constants";
import { blackStar, star } from "../assets";
import Socials from "../components/Socials";
import Navigation from "../components/Navigation";
import Stars from "../components/Star/Stars";
import Layout from "../components/Layout";
import ResponsiveTypewriter from "../components/ResponsiveTypewriter";

const Home = () => {
  const [currentLayout, setCurrentLayout] = useState("01");

  const stars = [
    { top: 50, right: 25, size: 150, rotate: 0, src: blackStar },
    { top: 40, right: 8, size: 90, rotate: 15, src: blackStar },
    { top: 77, right: 15, size: 45, rotate: -20, src: blackStar },
    { top: 83, right: 38, size: 80, rotate: -10, src: star },
    { top: 14, right: 5, size: 88, rotate: 30, src: star },
    { top: 24, right: 32, size: 120, rotate: 0, src: star },
  ];

  const getPositionStyles = (layout) => ({
    logo: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(45vw, 0vh)",
      transition: "transform 1000ms ease-in-out",
      width: "fit-content",
    },
    leWrapper: {
      transform:
        layout === "01"
          ? "translate(0, -5vh)"
          : "translate(calc(300% - 1rem), -5vh)",
      transition: "transform 1000ms ease-in-out",
      display: "inline-block",
      width: "fit-content",
    },
    navigation: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(0, 0)",
      transition: "all 1000ms ease-in-out",
    },
    navigationItems: {
      display: "flex",
      flexDirection: layout === "01" ? "row" : "column",
      alignItems: layout === "01" ? "center" : "flex-end",
      transition: "all 1000ms ease-in-out",
    },
    layoutControls: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(50vw, 15vh)",
      transition: "transform 1000ms ease-in-out",
    },
    content1: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(75vw, 12vh)",
      transition: "transform 1000ms ease-in-out",
    },
    content2: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(52vw, 14vh)",
      transition: "transform 1000ms ease-in-out",
    },
    socials: {
      transform:
        layout === "01" ? "translate(0, 0)" : "translate(-10vw, -80vh)",
      transition: "transform 1000ms ease-in-out",
    },
    language: {
      transform: layout === "01" ? "translate(0, 0)" : "translate(-93vw, 0)",
      textAlign: layout === "01" ? "right" : "left",
      transition: "transform 1000ms ease-in-out, text-align 1000ms ease-in-out",
    },
  });

  const positions = getPositionStyles(currentLayout);

  return (
    <div className="relative w-full min-h-screen bg-color-2 overflow-hidden">
      {/* Logo */}
      <div
        className="absolute top-4 left-4 flex transition-transform duration-1000 ease-in-out"
        style={positions.logo}
      >
        <h1 className="text-[10rem] leading-none -mt-7 -ml-2 font-dokdo text-color-1">
          <Link to="/" className="inline-block">
            VANESSA
          </Link>
          <br />
          <div style={positions.leWrapper}>
            <Link to="/" className="font-dokdo text-color-1 inline-block">
              LE
            </Link>
          </div>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6">
        <div className="relative" style={{ width: "600px", height: "400px" }}>
          {navigation.map((item, index, array) => (
            <Navigation
              key={item.id}
              item={item}
              index={index}
              totalItems={array.length}
              layout={currentLayout}
            />
          ))}
        </div>
      </nav>

      {/* Layout */}
      <div
        className="absolute top-1/3 left-1/3"
        style={positions.layoutControls}
      >
        <Layout
          currentLayout={currentLayout}
          setCurrentLayout={setCurrentLayout}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-32 left-32 transition-transform duration-1000 ease-in-out">
        <p className="mb-14 font-spaceMono text-3xl" style={positions.content1}>
          {introdata.title}
        </p>
        <div className="h-24 w-[500px]" style={positions.content2}>
          <ResponsiveTypewriter layout={currentLayout} introdata={introdata} />
        </div>
      </div>

      <div
        className="absolute -bottom-72 left-44 w-auto transition-all duration-1000 ease-in-out"
        style={positions.socials}
      >
        <Socials layout={currentLayout} />
      </div>

      <div className="absolute inset-0 transition-transform duration-1000 ease-in-out pointer-events-none">
        <Stars stars={stars} layout={currentLayout} />
      </div>

      <div
        className="absolute bottom-4 right-4 font-spaceMono text-right leading-loose text-sm"
        style={positions.language}
      >
        REACT
        <br />
        TAILWIND
      </div>
    </div>
  );
};

export default Home;
