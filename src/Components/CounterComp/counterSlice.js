import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
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
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("action---------------------->", action);
      console.log("state---------------------->", state.todo);
      state.todo.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state) => {
  console.log("todo", state);
  // state.todos
};

export default counterSlice.reducer;
