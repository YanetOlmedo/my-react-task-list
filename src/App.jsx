import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

//Creamos la lista de tareas
const taskList = [];

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <Header />
      </div>
      <TaskList list={taskList} />
    </div>
  );
}

export default App;