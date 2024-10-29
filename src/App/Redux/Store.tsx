import { configureStore } from "@reduxjs/toolkit";
import { DimensionSlice } from "../Redux/slices/Dimension";
import { AppEntrySlice } from "../Redux/slices/AppEntrySlice";
// import { UserSlice } from "./slices/User";
// import themeReducer from "./slices/ThemeSlice";
// import { ContactSlice } from "./slices/ContactSlice";
// import { TestimonialSlice } from "./slices/TestimonialSlice";

export const store = configureStore({
  reducer: {
    dimension: DimensionSlice.reducer,
    appEntry: AppEntrySlice.reducer,
    // user: UserSlice.reducer,
    // contact: ContactSlice.reducer,
    // testimonial: TestimonialSlice.reducer,
    // theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
