import React from "react";

import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }) => {
    return (
        <ul>
            <Task />
            {tasks.map((task) => (
              <Task
              key={task.id}
              task={task}
              onDeleteTask = {() => onDeleteTask(task.id)}
              onToggleTaskDone = {() => onToggleTaskDone(task.id)}
              />
            ))}

        </ul>
    )
}

export default TaskList;