import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  incrementAsync,
  incrementByAmount,
  addTodo,
} from "./counterSlice";

export const Counter = () => {
  const [text, setText] = useState("");
  const todo = useSelector((state) => {
    console.log("State: ", state.todo.todo);
    return state.todo.todo;
  });
  const count = useSelector((state) => {
    // console.log("State: ", state);
    return state.counter.value;
  });
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );
    setText("");
  };
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementAsync())}
      >
        Add Async
      </button> */}
      <h2>Todod</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};
