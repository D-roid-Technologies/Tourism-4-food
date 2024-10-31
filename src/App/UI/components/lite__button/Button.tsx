// Button.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buton.css";

interface ButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  variant?: "default" | "blur";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  style = {},
  variant = "default",
}) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) onClick();
    if (href) {
      event.preventDefault();
      navigate(href);
    }
  };

  const buttonClass = `button ${
    variant === "blur" ? "button__blur" : ""
  } ${className}`;

  return href ? (
    <a href={href} onClick={handleClick} className={buttonClass} style={style}>
      {children || label}
    </a>
  ) : (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClass}
      style={style}
    >
      {children || label}
    </button>
  );
};

export default Button;
