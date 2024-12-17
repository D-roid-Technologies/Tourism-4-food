import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../Utils/Types";

const initialState: UserType = {
  fullName: "",
  email: "",
  password: "",
  countryInfo: {
    name: "",
    flag: undefined,
    iso: "",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.fullName = action.payload;
      state.email = action.payload;
      state.password = action.payload;

      console.log(
        "user information from userslice",
        state.fullName,
        state.email,
        state.password
      );
    },
    addCountryInfo: (state, action) => {
      state.countryInfo = action.payload;
      console.log("user country from userslice", state.countryInfo);
    },
  },
});
export default UserSlice.reducer;
export const { addUser, addCountryInfo } = UserSlice.actions;
