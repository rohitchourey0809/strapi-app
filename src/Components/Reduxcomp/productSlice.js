// productSlice.js (continued)

import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsFromSecondAPI } from "./api";

const productSlice = createSlice({
  name: "Sliceproducts",

  initialState: {
    value: 0,
    todo: [],
    Api1: [],
    Api2: [],
    status: "idle", // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addTodo: (state, action) => {
      console.log("action---------------------->", action);
      console.log("state---------------------->", state.todo);
      state.todo.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Api1 = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsFromSecondAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsFromSecondAPI.fulfilled, (state, action) => {
        console.log("action---->", action);
        state.status = "succeeded";
        state.Api2 = action.payload;
      })
      .addCase(fetchProductsFromSecondAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, addTodo } = productSlice.actions;
export const productsReducer = productSlice.reducer;
