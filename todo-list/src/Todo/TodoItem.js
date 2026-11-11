const TodoItem = ({ task }) => {
  return <div key={task.id}>{task.todo}</div>;
};

export default TodoItem;
