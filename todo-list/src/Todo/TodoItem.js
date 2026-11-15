const TodoItem = ({ task }) => {
  return <div key={task.id}>{task.title || task.todo}</div>;
};

export default TodoItem;
