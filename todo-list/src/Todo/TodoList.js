import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onDelete }) => {
  return (
    <React.Fragment>
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>
            <TodoItem key={task.id} task={task} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
