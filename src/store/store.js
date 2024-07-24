import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/shoppingCartSlice";
import themeSliceReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: appSliceReducer,
    themePage: themeSliceReducer,
  },
});
