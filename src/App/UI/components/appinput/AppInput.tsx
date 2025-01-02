import React, { ChangeEvent, useState } from "react";
import "./AppInput.css";
import { IoClose } from "react-icons/io5";

type OptionType = {
  value: string;
  label: string;
  icon?: string;
  data?: any;
};

type InputProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  variant?: "outlined" | "filled" | "standard";
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
  >;
  borderBottomColor?: string;
  errorColor?: string;
  helperTextColor?: string;
  isDropdown?: boolean;
  options?: OptionType[] | any;
  onSelect?: (value: string, data?: any) => void;
};

const AppInput: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  variant = "standard",
  startAdornment,
  endAdornment,
  fullWidth = false,
  multiline = false,
  rows = 3,
  error = false,
  helperText,
  required = false,
  disabled = false,
  inputProps,
  borderBottomColor,
  errorColor,
  helperTextColor = errorColor,
  isDropdown = false,
  options = [],
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const inputWrapperStyle = {
    "--border-bottom-color": borderBottomColor,
    "--error-color": errorColor,
  } as React.CSSProperties;

  const helperTextStyle = {
    color: helperTextColor,
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHasInteracted(true);
    onChange && onChange(e);
  };

  const handleDropdownSelect = (option: OptionType) => {
    setHasInteracted(true);
    onSelect && onSelect(option.value, option.data);
    setIsOpen(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const renderInput = () => {
    if (isDropdown) {
      return (
        <div className="dropdown-container">
          <div
            className="selected-value"
            onClick={() => {
              if (!disabled) {
                setHasInteracted(true);
                setIsOpen(!isOpen);
              }
            }}
          >
            {value || placeholder}
          </div>
          {isOpen && (
            <div className="options-list-container">
              <div className="close-button" onClick={handleClose}>
                <IoClose className="close-icon" />
              </div>
              <ul className="options-list">
                {options.map(
                  (option: {
                    value: any;
                    icon: any;
                    label: any;
                    data?: any;
                  }) => (
                    <li
                      key={option.value}
                      onClick={() => handleDropdownSelect(option)}
                    >
                      {option.icon && (
                        <img
                          src={option.icon}
                          alt={option.label}
                          className="option-icon"
                        />
                      )}
                      {option.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (multiline) {
      return (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          // onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          rows={rows}
          className="input-field"
          disabled={disabled}
          {...(inputProps as React.InputHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    } else {
      return (
        <input
          // name={inputProps?.name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          // onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          className="input-field"
          autoComplete="off"
          // disabled={disabled}
          {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      );
    }
  };

  return (
    <>
      <p className="text-secondary mb-1 fs-sm">{name?.toUpperCase()}</p>
      <div className={`input-container mb-0 ${fullWidth ? "full-width" : ""}`}>
        {label && (
          <label htmlFor={inputProps?.id} className="input-label">
            {label}
            {required && <span className="required">*</span>}
          </label>
        )}
        <div
          className={`input-wrapper ${variant} ${
            hasInteracted && error ? "error" : ""
          } ${disabled ? "disabled" : ""} ${isDropdown ? "dropdown" : ""}`}
          style={inputWrapperStyle}
        >
          {startAdornment && (
            <div className="start-adornment">{startAdornment}</div>
          )}
          {renderInput()}
          {endAdornment && <div className="end-adornment">{endAdornment}</div>}
        </div>
      </div>
      {hasInteracted && helperText && (
        <p className="helper-text" style={helperTextStyle}>
          {helperText}
        </p>
      )}
    </>
  );
};

export default AppInput;
