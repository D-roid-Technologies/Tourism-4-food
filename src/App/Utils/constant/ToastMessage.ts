// ToastMessages.ts
import { toast } from "react-toastify";

const useToastMessages = () => {
  const successToast = () => {
    toast.success("Verified! Redirecting…", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // ------------------
  const successToastTwo = () => {
    toast.success("Code resent! Check your inbox!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // ----------------
  const errorToast = () => {
    toast.error("Incorrect code. Please try again!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // --------------
  const successPin = () => {
    toast.success("Pin created successfully! Redirecting…", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // --------------
  const errorPin = () => {
    toast.error("Pins do not match. Please try again!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return { successToast, errorToast, successToastTwo, successPin, errorPin };
};

export default useToastMessages;
