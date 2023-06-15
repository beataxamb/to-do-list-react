import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${hideDoneTasks && task.done
                    ? "tasks__item--hideDone"
                    : ""}`
                }
            >
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "tasks__item--toggleDone" : ""}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;