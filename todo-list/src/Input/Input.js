import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./Input.css";
import TodoList from "../Todo/TodoList";

const Input = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputData, setInputData] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputData.trim().length <= 0) return;
    setInputData("");
    setTodoList((prev) => [...prev, { todo: inputData, id: nanoid() }]);
    console.log("Submitted " + inputData);
  };

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setInputData(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add task"
          className="appInput"
          onChange={onChangeHandler}
          value={inputData}
        />
      </form>
      <TodoList todoList={todoList} />
    </React.Fragment>
  );
};

export default Input;
