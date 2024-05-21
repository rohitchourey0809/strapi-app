import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// createAsyncThunk accepts two arguments:

// A string that will be used as the prefix for the generated action types
// A "payload creator" callback function that should return a Promise containing some data, or a rejected Promise with an error
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);


// createSlice will generate an action creator for every reducer function we define in the reducers field, and that the generated action types include the name of the slice, like:
// Detailed Explanation: Adding Extra Reducers to Slices
// The builder object in extraReducers provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice:

// builder.addCase(actionCreator, reducer): defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
// builder.addMatcher(matcher, reducer): defines a case reducer that can run in response to any action where the matcher function returns true
// builder.addDefaultCase(reducer): defines a case reducer that will run if no other case reducers were executed for this action.
// You can chain these together, like builder.addCase().addCase().addMatcher().addDefaultCase(). If multiple matchers match the action, they will run in the order they were defined


const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;