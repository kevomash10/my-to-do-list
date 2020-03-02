import React from "react";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <h3>MyTodo list</h3>
      <TodoList />
    </div>
  );
}

export default App;
