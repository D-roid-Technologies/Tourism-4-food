import React, { useEffect } from "react";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClassName = className || "#ff7846";

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="toast">
        <div className="toast-close-button" onClick={onClose}>
          <IoClose className="toast-close-icon" />
        </div>
        <div
          style={{
            backgroundColor: modalClassName,
            width: "100%",
            color: "#ffffff",
            textAlign: "center",
            height: "100%",
            padding: "12px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
