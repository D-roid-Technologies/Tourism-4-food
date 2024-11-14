import React from "react";
import "./DashboardHeader.css";
import { IoNotifications } from "react-icons/io5";

interface DashboardHeaderProps {
  headTitle: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ headTitle }) => {
  return (
    <>
      <div className="header__container">
        <p>{headTitle}</p>
        <span className="notification__icon">
          <IoNotifications className="header__icon" />
          <span className="notification__badge">2</span>
        </span>
      </div>
    </>
  );
};

export default DashboardHeader;
