import React from "react";
import "../components/testLoading/Testloading.css";

const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading__overlay">
      <div className="loading__line"></div>
    </div>
  );
};

export default Loading;
