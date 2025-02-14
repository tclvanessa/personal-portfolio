// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router basename="/personal-portfolio">
      <div className="min-h-screen bg-color-2">
        <Routes>
          <Route path="/" element={<Navigate to="/personal-portfolio" />} />
          <Route path="/personal-portfolio" element={<Home />} />
          <Route path="/personal-portfolio/about" element={<About />} />
          <Route path="/personal-portfolio/projects" element={<Projects />} />
          <Route path="/personal-portfolio/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
