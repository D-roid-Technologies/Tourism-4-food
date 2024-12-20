import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../Utils/Types";

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

export const AppEntrySlice = createSlice({
  name: "appEntry",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = AppEntrySlice.actions;
