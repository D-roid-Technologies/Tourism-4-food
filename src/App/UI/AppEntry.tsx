import React, { useEffect } from "react";
import Index from "../Routes/Index";
import { AppEntryType } from "../Utils/Types";
import { RootState, store } from "../Redux/Store";
import { addHeight, addWidth } from "../Redux/slices/Dimension";
import { useSelector } from "react-redux";
import Modal from "./components/modal/Modal";
import { useAppEntry } from "../Utils/hooks/useAppEntry";

const AppEntry: React.FunctionComponent<AppEntryType> = ({ closeModal }) => {
  const appEntry = useSelector((state: RootState) => state.appEntry);

  // const modal = appEntry.showModal;
  // const aTitle = appEntry.appTitle;
  // const aBody = appEntry.appBody;

  const [appWidth, setAppWidth] = React.useState<number>(window.innerWidth);
  const [appHeight, setAppHeight] = React.useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setAppWidth(window.innerWidth);
      setAppHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    store.dispatch(addWidth(appWidth));
    store.dispatch(addHeight(appHeight));
  }, [appWidth, appHeight]);

  const { isOpen, content, hideModal } = useAppEntry();

  return (
    <div className="app-entry">
      <Modal isOpen={isOpen} onClose={hideModal}>
        {content}
      </Modal>
      <Index />
    </div>
  );
};

export default AppEntry;
