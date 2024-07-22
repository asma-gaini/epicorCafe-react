import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
  },
});
