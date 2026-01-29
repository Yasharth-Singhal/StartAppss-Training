import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);

    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h2>📝 To-Do App</h2>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li
            key={index}
            className={`todo-item ${item.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleComplete(index)}>
              {item.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
