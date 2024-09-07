import Tasks from "./Tasks"

const TaskList = ({tasks}) => {
    return (
        <ul>
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            {tasks.map((task) => (
                <Tasks key={task.id} task={task}/>
            ))}
        </ul>
    );
};

export default TaskList
