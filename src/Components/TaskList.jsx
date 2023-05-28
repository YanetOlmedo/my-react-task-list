import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import "./TaskList.css";

//Utilizacion del useState para almacenar las tareas.
const TaskList = (props) => {
  const { list } = props;
  const [listTask, setListTask] = useState(list);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  //Controla la cantidad de tareas pendientes.
  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  //Se ejecuta al cambiar de valor el campo de tareas.
  const onChangeTask = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  };

  //Se ejecuta al cambiar de valor el campo de descripcion
  const onChangeDescription = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  //Se ejecuta al marcar o desmarcar una tarea como completa.
  const handleTaskCompletion = (name, completed) => {
    //Se actualiza el estado actual de la tarea
    const updatedListTask = listTask.map((task) => {
      if (task.titleTask === name) {
        return { ...task, stat: completed };
      }
      return task;
    });
    setListTask(updatedListTask);
    //Almacena la lista actualizada en el local storage
    localStorage.setItem("listTask", JSON.stringify(updatedListTask));
    console.log(`Task "${name}" completed: ${completed}`);
  };

  // Se ejecuta al agregar una tarea.
  function handleAddTask() {
    if (task.trim() !== "") {
      let newListTask = [...listTask];
      const newAddTask = {
        id: uuidv4(),
        titleTask: task,
        description: description,
        stat: false,
      };
      newListTask = [...newListTask, newAddTask];
      setTask("");
      setDescription("");
      setListTask(newListTask);
      //Almacena la lista actualizada en el local storage
      localStorage.setItem("listTask", JSON.stringify(newListTask));
    }
  }

  //Se ejecuta al borrar todas las tareas
  function handleClear() {
    setListTask([]);
    //Elimina la lista del local storage
    localStorage.removeItem("listTask");
  }

  // Carga la lista de tareas almacenada en el localStorage al cargar el componente
  useEffect(() => {
    const localStorageData = localStorage.getItem("listTask");
    const storedListTask = JSON.parse(localStorageData);
    if (storedListTask) {
      setListTask(storedListTask);
    }
  }, []);

  return (
    <div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Add your new todo"
          value={task}
          onChange={onChangeTask}
        />
        <input
          type="text"
          placeholder="Add task's description"
          value={description}
          onChange={onChangeDescription}
        />
        <button className="btn" onClick={handleAddTask}>
          +
        </button>
      </div>
      <div className="pending-tasks">
        <p>You have {getPendingTasksCount()} pending task 😎</p>
      </div>
      <div className="btn-clear">
        <button onClick={handleClear}>Clear all</button>
      </div>
      <ul>
        {listTask.map((task) => (
          <Task
            key={task.id}
            title={task.titleTask}
            description={task.description}
            onTaskCompletion={handleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
