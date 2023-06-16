import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, content: "posprzątać kuchnię", done: false },
  { id: 2, content: "zjeść obiad", done: true }
];
const hideDoneTasks = false;

function App() {
  return (
    <Main>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Main>
  );
}

export default App;
