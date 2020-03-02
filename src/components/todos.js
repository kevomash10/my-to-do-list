import React from "react";

const Todos = ({ todos }) => {
  const remove = todosid => {
    const todos = todos.filter(() => todos.id !== todosid);
  };
  const completed = () => {};
  return (
    <div>
      <div className="todos">
        <ul>{todos.todo}</ul>
      </div>
      <button onClick={completed}>Completed</button>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Todos;
