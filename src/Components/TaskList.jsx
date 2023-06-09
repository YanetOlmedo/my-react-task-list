import Task from "./Task";
import { useForm } from "react-hook-form";
import { useTaskList } from "./useTaskList";
import "./TaskList.css";

const TaskList = (props) => {
  const { list } = props;
  const {
    listTask,
    addTask,
    handleTaskCompletion,
    handleTaskEdit,
    handleTaskDelete,
    handleClear,
  } = useTaskList(list);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    mode: "onChange", // Habilita la validación en tiempo real
  });

  const onSubmit = (data) => {
    addTask(data.task, data.description);
    reset();
  };

  //Controla la cantidad de tareas pendientes.
  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  // Maneja el cambio en el campo de entrada de la tarea
  const handleTaskInputChange = (event) => {
    trigger("task"); // Disparar la validación para el campo "task"
  };

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
              {...register("description")}
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
            onTaskDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

