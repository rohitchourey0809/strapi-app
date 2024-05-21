import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./slice";

export const store = configureStore({
  reducer: {
    products: productreducer,
  },
});
