import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Reduxcomp/productSlice";

const CounterProject = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.AlldataStore.value);

  const active = useMemo(() => {
    return count >= 0;
  }, [count]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count >= 0) {
      dispatch(decrement());
    }
  };

  return (
    <div className="m-8">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        aria-label="Increment value"
        onClick={handleIncrement}
      >
        Increment
      </button>
      {active && <span className="mx-4">{count}</span>}
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
        aria-label="Decrement value"
        onClick={handleDecrement}
        disabled={!active} // Disable the button when count is not active
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterProject;
