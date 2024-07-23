import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: appSliceReducer,
  },
});
