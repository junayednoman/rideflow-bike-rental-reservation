import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TInitialState = {
  user: null | { email: string; role: "user" | "admin" };
  token: null | string;
};
const initialState: TInitialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { addUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const useGetCurrentUser = (state: RootState) => state.auth.user;
export const useGetCurrentToken = (state: RootState) => state.auth.token;
