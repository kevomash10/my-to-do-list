import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";

const Todos = ({ todos }) => {
  const remove = () => {
    const newtodos = [...todos];
    const rtodos = todos.splice(todos.id, 1);
    console.log(rtodos);
    console.log(newtodos);
  };

  const completed = () => {
    const newtodos = [...todos];
    newtodos[todos.id].isComplete = true;
  };
  return (
    <div>
      <div className="todos">
        {/* style={{ textDecoration: todos.id.isCompleted ? "line-through" : "" }} */}
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </div>
      <button onClick={completed}>Completed</button>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Todos;
