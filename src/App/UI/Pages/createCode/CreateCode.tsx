import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import "./CreateCode.css";
import Button from "../../../UI/components/button/Button";
import { Assets } from "../../../Utils/constant/Assets";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useToastMessages from "../../../Utils/constant/ToastMessage";

const CreateCode: React.FC = () => {
  const [pin, setPin] = useState<string[]>(new Array(4).fill(""));
  const [confirmPin, setConfirmPin] = useState<string[]>(new Array(4).fill(""));
  const navigate = useNavigate();
  const [step, setStep] = useState<"create" | "confirm">("create");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { successPin, errorPin } = useToastMessages();

  const handleChange = (
    value: string,
    index: number,
    isConfirm: boolean = false
  ) => {
    if (isNaN(Number(value))) return;

    const currentPin = isConfirm ? [...confirmPin] : [...pin];
    currentPin[index] = value;

    if (isConfirm) setConfirmPin(currentPin);
    else setPin(currentPin);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number, isConfirm: boolean = false) => {
    const currentPin = isConfirm ? [...confirmPin] : [...pin];
    if (currentPin[index] !== "") {
      currentPin[index] = "";
      if (isConfirm) setConfirmPin(currentPin);
      else setPin(currentPin);
    } else if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    setStep("confirm");
    setConfirmPin(new Array(4).fill(""));
  };

  const handleDone = () => {
    if (pin.join("") === confirmPin.join("")) {
      successPin();
      setTimeout(() => navigate("/userdashboard"), 3000);
    } else {
      errorPin();
    }
  };

  const handleBack = () => {
    setStep("create");
    setPin(new Array(4).fill(""));
  };

  const currentPin = step === "create" ? pin : confirmPin;
  const isPinComplete = currentPin.every((digit) => digit !== "");

  return (
    <div className="create__pin__container">
      <div className="main__logo__container">
        <img
          src={Assets.images.companyLogo}
          alt="Tourism4Food Logo"
          onClick={() => navigate("/")}
          //   onClick={() => (window.location.href = "")}
          className="main__logo"
        />
      </div>

      <h1>{step === "create" ? "Create Security Pin" : "Re-enter your pin"}</h1>
      <p>
        {step === "create"
          ? "We require you to create your pin for security reasons"
          : "Re-enter your security pin for confirmation"}
      </p>

      <div className="pin__input__container">
        {currentPin.map((digit, index) => (
          <input
            key={index}
            type="password"
            maxLength={1}
            value={digit}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, index, step === "confirm")
            }
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              e.key === "Backspace" &&
              handleBackspace(index, step === "confirm")
            }
            ref={(el) => (inputRefs.current[index] = el)}
            className="pin__box"
          />
        ))}
      </div>

      {step === "create" ? (
        <Button
          label="Continue"
          style={{ marginTop: "20px" }}
          disabled={!isPinComplete}
          onClick={handleContinue}
        />
      ) : (
        <>
          <Button
            label="Launch Dashboard"
            style={{ marginTop: "20px" }}
            disabled={!isPinComplete}
            onClick={handleDone}
          />
          <span className="bottom__btn" onClick={handleBack}>
            <MdKeyboardArrowLeft />
          </span>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default CreateCode;
