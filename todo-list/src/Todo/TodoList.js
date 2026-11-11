import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <React.Fragment>
      <ul>
        {todoList.map((task) => (
          <li>
            <TodoItem key={task.id} task={task} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
