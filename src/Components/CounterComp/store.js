import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { todoSlice } from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice.reducer,
  },
});
