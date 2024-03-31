import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../Reduxcomp/productSlice";

export const store = configureStore({
  reducer: {
    AlldataStore: productsReducer,
  },
});
