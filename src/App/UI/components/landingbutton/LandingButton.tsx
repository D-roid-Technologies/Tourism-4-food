import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const LandingButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      <span className="main-button-label">{label}</span>
      <span className="ellipsis">...</span>
    </button>
    // <button className="main-button" onClick={onClick}>
    //   {label}
    //   <span className="ellipsis">...</span>
    // </button>
  );
};

export default LandingButton;
