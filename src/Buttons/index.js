import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <span className="buttons">
            <button
                onClick={toggleHideDone}
                className="buttons__button">
                {hideDone && tasks.some(({ done }) => done) ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;