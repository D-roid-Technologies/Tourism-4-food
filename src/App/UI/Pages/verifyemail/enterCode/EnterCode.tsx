import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import "../VerifyEmail.css";
import "../enterCode/EnterCode.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Assets } from "../../../../Utils/constant/Assets";
import Button from "../../../components/button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastMessages from "./ToastMessage";

const EnterCode: React.FC = () => {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState(10); // 2 min in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const requiredCode = "123456";
  const { successToast, errorToast, successToastTwo } = useToastMessages();

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!newCode.includes("")) {
      if (newCode.join("") === requiredCode) {
        setTimeout(() => successToast(), 500);
        setTimeout(() => navigate("/onboarding"), 2500);
      } else {
        setTimeout(() => errorToast(), 500);
      }
    }
  };

  const handleBackspace = (index: number) => {
    const newCode = [...code];
    if (newCode[index] !== "") {
      newCode[index] = "";
      setCode(newCode);
    } else if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleReset = () => {
    setResendTimer(120);
    successToastTwo();
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="verifyemail__container">
      <div className="main__logo__container">
        <img
          src={Assets.images.companyLogo}
          alt="Tourism4Food Logo"
          // onClick={() => navigate("/")}
          onClick={() => (window.location.href = "")}
          className="main__logo"
        />
      </div>
      <span className="bottom__btn" onClick={() => navigate("/verifyemail")}>
        <MdKeyboardArrowLeft />
      </span>
      <div className="verifyemail__content">
        <h2>Enter Verification Code</h2>
        <p>
          A text message with a 6-digit code has been sent to your email
          address. This helps to keep your account safe for security purposes
          and ensure that it’s really you.
        </p>
        <div className="verify__code__container">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                e.key === "Backspace" && handleBackspace(index)
              }
              ref={(el) => (inputRefs.current[index] = el)}
              className="verify__code__box"
            />
          ))}
        </div>
        <Button
          label="Submit Code"
          style={{ marginTop: "20px" }}
          disabled={!isCodeComplete}
          onClick={() => {
            const enteredCode = code.join("");
            if (enteredCode === requiredCode) {
              successToast();
              setTimeout(() => navigate("/onboarding"), 2500);
            } else {
              errorToast();
            }
          }}
        />
        <Button
          label={`Resend Code ${resendTimer > 0 ? `(${resendTimer}s)` : ""}`}
          style={{ marginTop: "15px", background: "#F0F0F0", color: "#ff914d" }}
          disabled={resendTimer > 0}
          onClick={handleReset}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default EnterCode;
