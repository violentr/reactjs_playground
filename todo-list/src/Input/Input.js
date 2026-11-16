import React, { useState, useEffect } from "react";
import { storeLocally, fetchData } from "../utils";
import { nanoid } from "nanoid";

import "./Input.css";
import TodoList from "../Todo/TodoList";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const Input = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputData, setInputData] = useState("");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    fetchData(API_URL, options).then((data) => {
      if (!data) return setTodoList([]);
      setTodoList(data);
      storeLocally(data, "todoList");
    });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputData.trim().length <= 0) return;
    setInputData("");
    setTodoList((prev) => [...prev, { todo: inputData, id: nanoid() }]);

    console.log("Submitted " + inputData);
  };

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    console.log(`Clicks: ${clicks}`);
    storeLocally(clicks, "cicks");
  };

  const onChangeHandler = (event) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };

  const onDeleteHandler = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
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
      <TodoList todoList={todoList} onDelete={onDeleteHandler} />
    </React.Fragment>
  );
};

export default Input;
