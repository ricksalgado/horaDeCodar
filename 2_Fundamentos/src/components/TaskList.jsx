import React from 'react'

const TaskList = ({ tasks }) => {
    if (tasks.length === 0) {
        return <p>Nao ha tarefas para mostrar</p>;
    }

    return (
    <ul>
        {tasks.map((task) => (
            <li key = { task.id }> { task.text }</li>
        ))}
    </ul>
    );
};



// const listagem = [
//     {id: 1, text:'Estudar'} ,
//     {id: 2, text:'Aprender direito'} , 
//     {id: 3, task:'React'}, 
//     {id: 4, text:'Javascript'}, 
//     {id: 5, text:'Typescript'},];



export default TaskList;
