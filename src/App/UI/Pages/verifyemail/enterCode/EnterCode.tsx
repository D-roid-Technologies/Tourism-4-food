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
import Button from "../../../components/button/Button";

const EnterCode: React.FC = () => {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState(120); // 2 min in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const requiredCode = "123456";

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
        setTimeout(() => alert("Code is correct"), 500);
        // setTimeout(() => navigate("/onboarding"), 3000);
      } else {
        setTimeout(() => alert("Incorrect Code"), 500);
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

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <div className="verifyemail__container">
      <span className="top__btn">
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
              alert("Code is correct");
              //   setTimeout(() => navigate("/onboarding"), 2000);
            } else {
              alert("Incorrect code");
              console.error("Incorrect code");
            }
          }}
        />
        <Button
          label={`Resend Code ${resendTimer > 0 ? `(${resendTimer}s)` : ""}`}
          style={{ marginTop: "15px", background: "#F0F0F0", color: "#ff914d" }}
          disabled={resendTimer > 0}
          onClick={() => {
            setResendTimer(120);
          }}
        />
      </div>
    </div>
  );
};

export default EnterCode;
