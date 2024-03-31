// productSlice.js (continued)

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data; // Assuming the response directly contains the product data
});

// Async thunk to fetch products from the second API
const fetchProductsFromSecondAPI = createAsyncThunk(
  "products/fetchProductsFromSecondAPI",
  async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    return response.data;
  }
);

export { fetchProducts, fetchProductsFromSecondAPI };
