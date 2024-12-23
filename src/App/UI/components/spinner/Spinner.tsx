import React from "react";
import "../spinner/Spinner.css"; // Add your styles here

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      {/* You can use a simple CSS animation or an SVG for the spinner */}
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
