import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;