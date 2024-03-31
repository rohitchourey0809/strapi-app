import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Reduxcomp/productSlice";

const CounterProject = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.AlldataStore.value;
  });
  return (
    <div>
      {" "}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="mx-4">{count}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterProject;
