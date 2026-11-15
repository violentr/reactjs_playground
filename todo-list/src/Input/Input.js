import React, { useState, useEffect } from "react";
import { storeLocally } from "../utils.js";
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
  const [cicks, setClicks] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, options);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputData.trim().length <= 0) return;
    setInputData("");
    setTodoList((prev) => [...prev, { todo: inputData, id: nanoid() }]);

    console.log("Submitted " + inputData);
    storeLocally(todoList, "todoList");
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
