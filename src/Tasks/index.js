import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${hideDone && task.done
                    ? "tasks__item--hideDone"
                    : ""}`
                }
            >
                <button
                    className="tasks__button tasks__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "tasks__item--toggleDone" : ""}>
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;