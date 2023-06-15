import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
tasks.length > 0 && (
        <span>
            <button className="buttons">
                {hideDoneTasks && tasks.some(({ done }) => done) ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;