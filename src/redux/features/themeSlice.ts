import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TInitialState = {
  mode: null | "light" | "dark";
};
const initialState: TInitialState = {
  mode: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const useGetCurrentMode = (state: RootState) => state.theme.mode;
