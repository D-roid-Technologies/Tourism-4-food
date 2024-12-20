import { closeModal, openModal } from "../../Redux/slices/AppEntrySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

export const useAppEntry = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state: RootState) => state.appEntry);

  const showModal = (content: React.ReactNode) => {
    dispatch(openModal(content));
  };

  const hideModal = () => {
    dispatch(closeModal());
  };

  return {
    isOpen,
    content,
    showModal,
    hideModal,
  };
};
