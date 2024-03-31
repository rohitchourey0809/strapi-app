import React, { useState } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Reduxcomp/productSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const todo = useSelector((state) => {
    console.log("state", state.AlldataStore.todo);
    return state.AlldataStore.todo;
  });
 

  const handleSubmit = () => {
    dispatch(addTodo(text)); // Dispatch addTodo action with the entered text
    // setTodo([...todo, text]);
    setText("");
  };

  console.log("todo", todo);
  return (
    <div>
      {" "}
      <h2>AddTodo</h2>
      <input
        type="text"
        placeholder="AddTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <div>
        {todo.map((ele, index) => {
          return <div key={index}>{ele}</div>;
        })}
      </div>
    </div>
  );
};

export default AddTodo;
