import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingManager from "../UI/components/loadingManager/Loadingmanager";

const Index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <LoadingManager />
    </BrowserRouter>
  );
};

export default Index;
