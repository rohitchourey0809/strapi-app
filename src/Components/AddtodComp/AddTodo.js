import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Reduxcomp/productSlice";
import { memo } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const todo = useSelector((state) => state.AlldataStore.todo);

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Todo</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md mr-2"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      <div>
        {todo.map((ele, index) => (
          <>
            <div key={index} className="py-2 border-b">
              {ele.id}
            </div>
            <div key={index} className="py-2 border-b">
              {ele}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default memo(AddTodo);
