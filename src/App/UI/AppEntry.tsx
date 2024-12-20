import React, { useEffect } from "react";
import Index from "../Routes/Index";
import { AppEntryType } from "../Utils/Types";
import { HiX } from "react-icons/hi";
import { RootState, store } from "../Redux/Store";
import { addHeight, addWidth } from "../Redux/slices/Dimension";
import { useSelector } from "react-redux";
// import { updateModal } from "../Redux/slices/AppEntrySlice";
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
      {/* {modal && (
        <div className="modal-overlay">
          <div className="modal-inner">
            <div
              className="modal-x"
              onClick={() => store.dispatch(updateModal(false))}
            >
              <HiX />
            </div>
            <div className="modal-text">
              <h2 className="modal-header">{aTitle}</h2>
              <div
                className="modal-body"
                dangerouslySetInnerHTML={{ __html: aBody }}
              />
            </div>
          </div>
        </div>
      )} */}

      <Modal isOpen={isOpen} onClose={hideModal}>
        {content}
      </Modal>
      <Index />
    </div>
  );
};

export default AppEntry;
