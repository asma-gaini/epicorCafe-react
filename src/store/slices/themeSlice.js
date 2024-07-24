import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload;
    },
  },
});

export const { setTheme, theme } = themeSlice.actions;

export default themeSlice.reducer;
