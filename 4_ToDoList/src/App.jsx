import { useState, useEffect } from "react"

import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    // Id, Text, Done (false)
    setTasks([...tasks, {id:Date.now(), text: task, done: false}]);

    // localStorage

  }

  return (
    <>
      <h1>To do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
