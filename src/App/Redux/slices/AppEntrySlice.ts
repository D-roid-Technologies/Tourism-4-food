import { createSlice } from "@reduxjs/toolkit";
import { AppEntrySliceType } from "../../Utils/Types";

const initialState: AppEntrySliceType = {
  showModal: false,
  showToast: false,
  appTitle: "",
  appBody: "",
};
export const AppEntrySlice = createSlice({
  name: "appEntry",
  initialState,
  reducers: {
    updateModal: (state, action) => {
      const showModal = action.payload;
      state.showModal = showModal;
    },
    updateToast: (state, action) => {
      const showToast = action.payload;
      state.showModal = showToast;
    },
    updateModalContent: (state, action) => {
      const { appTitle, appBody } = action.payload;
      state.appTitle = appTitle;
      state.appBody = appBody;
    },
  },
});

export default AppEntrySlice.reducer;
export const { updateModal, updateToast, updateModalContent } =
  AppEntrySlice.actions;
