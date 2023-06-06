import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import "./TaskList.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const TaskList = (props) => {
  const { list } = props;
  const [listTask, setListTask] = useState(list);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "onChange", // Habilita la validación en tiempo real
  });

  const onSubmit = () => {
    handleAddTask();
  };

  
  //Controla la cantidad de tareas pendientes.
  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  // Maneja el cambio en el campo de entrada de la tarea
  const handleTaskInputChange = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
    trigger("task"); // Disparar la validación para el campo "task"
  };

  // Maneja la finalización de la tarea
  const handleTaskCompletion = (id, completed) => {
    const updatedListTask = listTask.map((task) => {
      if (task.id === id) {
        return { ...task, stat: completed };
      }
      return task;
    });
    setListTask(updatedListTask);
    localStorage.setItem("listTask", JSON.stringify(updatedListTask));
    console.log(`Task "${id}" completed: ${completed}`);
  };

   // Maneja la edición de la tarea
  const handleTaskEdit = (id, editedTitle, editedDescription) => {
    const updatedListTask = listTask.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          titleTask: editedTitle,
          description: editedDescription,
        };
      }
      return task;
    });
    setListTask(updatedListTask);
    localStorage.setItem("listTask", JSON.stringify(updatedListTask));
    console.log(
      `Task "${id}" edited: title=${editedTitle}, description=${editedDescription}`
    );
  };

  // Maneja la eliminación de la tarea
  const handleTaskDelete = (id) => {
    const updatedListTask = listTask.filter((task) => task.id !== id);
    setListTask(updatedListTask);
    localStorage.setItem("listTask", JSON.stringify(updatedListTask));
    console.log(`Task "${id}" deleted`);
  };

  // Agrega una nueva tarea
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
      localStorage.setItem("listTask", JSON.stringify(newListTask));
    }
  }

    // Limpia todas las tareas
  function handleClear() {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete all tasks?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setListTask([]);
        localStorage.removeItem("listTask");
        swal("All tasks have been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your tasks are safe!");
      }
    });
  }

  // Cargar las tareas desde el almacenamiento local al cargar el componente
  useEffect(() => {
    const localStorageData = localStorage.getItem("listTask");
    const storedListTask = JSON.parse(localStorageData);
    if (storedListTask) {
      setListTask(storedListTask);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="input-container">
            <input
              type="text"
              placeholder="Add your new todo"
              {...register("task", {
                required: "Task name is required",
                minLength: {
                  value: 3,
                  message: "Task name must have at least 3 characters",
                },
                validate: {
                  isEmpty: (value) =>
                    value.trim() !== "" || "Task name is required",
                },
              })}
              value={task}
              onInput={handleTaskInputChange}
            />
            {errors.task && (
              <span className="error" role="alert">
                {errors.task.message}
              </span>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Add task's description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            +
          </button>
        </div>
      </form>
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
            id={task.id}
            title={task.titleTask}
            description={task.description}
            completed={task.stat}
            onTaskCompletion={handleTaskCompletion}
            onTaskEdit={handleTaskEdit}
            onTaskDelete={handleTaskDelete} // Pasa la función handleTaskDelete al componente Task
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
