import { useState, useEffect } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    // Id, Text, Done (false)
    setTasks ([...tasks, { id:Date.now(), text:task, done:false}]);
    // Explicando esse codigo: Na hora de puxar o hook e modificar o useState com array vazio, nos vamos Settar uma Task completa. Para isso, essa task vai receber 3 informacoes: O ID, o qual trabalharemos para completar e excluir a tarefa. Text, que sera o texto recebido da tarefa e aparecera no display. E o gatilho de Done, q, a principio, recebe falso, ja que a tarefa esta em aberto e nao concluido.


    // Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

  };

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) =>{
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  };

  return (
    <>
      <h1>
        Rick's To Do List
      </h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskDone={toggleTaskDone}/>
    </>
  )
}

export default App