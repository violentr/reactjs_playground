const TodoItem = ({ task, onDelete }) => {
  return (
    <div key={task.id}>
      {task.title || task.todo}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
