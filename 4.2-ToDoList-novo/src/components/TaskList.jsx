import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, toggleTaskDone }) => {

  if(tasks.length === 0){
    return <p>No tasks yet</p>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggleDone={() => toggleTaskDone(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;