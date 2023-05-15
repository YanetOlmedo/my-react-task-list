import Task from "./Task";
const TaskList = (props) => {
  const { list } = props;

  //Funcion que responde cuando hagan click en el botón de "+".
  function handleAddTask() {
    console.log("Add task");
  }


  //Iteramos cada elemento de la lista
  return (
    <div>
      <div>
        <input type="text" placeholder="Add your new todo" value={list.title} />
        <button onClick={handleAddTask}>+</button>
      </div>
      <ul>
        {list.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
