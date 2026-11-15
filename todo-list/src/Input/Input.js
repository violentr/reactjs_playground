import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./Input.css";
import TodoList from "../Todo/TodoList";

const Input = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputData, setInputData] = useState("");
  const [cicks, setClicks] = useState(0);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputData.trim().length <= 0) return;
    setInputData("");
    setTodoList((prev) => [...prev, { todo: inputData, id: nanoid() }]);

    console.log("Submitted " + inputData);
    storeLocally(todoList, "todoList");
  };

  const storeLocally = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    console.log(`Clicks: ${cicks}`);
    storeLocally(cicks, "cicks");
  };

  const onChangeHandler = (event) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add task"
          className="appInput"
          onChange={onChangeHandler}
          onClick={handleClick}
          value={inputData}
        />
      </form>
      <TodoList todoList={todoList} />
    </React.Fragment>
  );
};

export default Input;
