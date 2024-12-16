import { configureStore } from "@reduxjs/toolkit";
import { DimensionSlice } from "../Redux/slices/Dimension";
import { AppEntrySlice } from "../Redux/slices/AppEntrySlice";
import { UserSlice } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    dimension: DimensionSlice.reducer,
    appEntry: AppEntrySlice.reducer,
    user: UserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
