import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleTodoClick = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      return;
    }
    setTodos([...todos, { task: newTodo, completed: false }]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add To-Do</button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            <input type="checkbox" onChange={() => handleTodoClick(i)} />
            {t.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
