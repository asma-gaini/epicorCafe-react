import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
