import TaskList from "../Components/TaskList";
import Header from "../Components/Header";

function Tasks(props) {
  return (
    <div>
      <Header />
      <TaskList list={props.list} />
    </div>
  );
}

export default Tasks;
