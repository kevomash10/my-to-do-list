import React, { useState, useEffect } from "react";
import Todo from "./todos";

const TodoList = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        todo: name
      }
    ]);
  };

  const getName = e => {
    e.preventDefault();
    setQuery(name);
    setName("");
    console.log(name);
  };

  useEffect(() => {
    console.log("updated");
    console.log(todos);
  }, [query]);

  return (
    <div>
      <form onSubmit={getName}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <button className="add-btn" onClick={addTodo}>
          Add to do
        </button>
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todos={todos} getName={getName} />
      ))}
    </div>
  );
};

export default TodoList;
