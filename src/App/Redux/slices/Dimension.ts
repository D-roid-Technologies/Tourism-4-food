import { createSlice } from "@reduxjs/toolkit";
import { DimensionType } from "../../Utils/Types";

const initialState: DimensionType = {
  width: 0,
  height: 0,
};
export const DimensionSlice = createSlice({
  name: "dimensions",
  initialState,
  reducers: {
    addWidth: (state, action) => {
      const width = action.payload;
      state.width = width;
    },
    addHeight: (state, action) => {
      const height = action.payload;
      state.height = height;
    },
  },
});

export default DimensionSlice.reducer;
export const { addWidth, addHeight } = DimensionSlice.actions;
