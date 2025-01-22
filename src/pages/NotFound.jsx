import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-color-2 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-color-1 mb-6">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-color-1">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-color-1 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
