import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import "./TaskList.css";

const useTaskList = (list) => {
  const [listTask, setListTask] = useState(list);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  const onChangeTask = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  };

  const onChangeDescription = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleTaskCompletion = (name, completed) => {
    const updatedListTask = listTask.map((task) => {
      if (task.titleTask === name) {
        return { ...task, stat: completed };
      }
      return task;
    });
    setListTask(updatedListTask);
    localStorage.setItem("listTask", JSON.stringify(updatedListTask));
    console.log(`Task "${name}" completed: ${completed}`);
  };

  const handleAddTask = () => {
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
  };

  const handleClear = () => {
    setListTask([]);
    localStorage.removeItem("listTask");
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("listTask");
    const storedListTask = JSON.parse(localStorageData);
    if (storedListTask) {
      setListTask(storedListTask);
    }
  }, []);

  return {
    listTask,
    task,
    description,
    getPendingTasksCount,
    onChangeTask,
    onChangeDescription,
    handleTaskCompletion,
    handleAddTask,
    handleClear,
  };
};

const TaskList = (props) => {
  const { list } = props;
  const {
    listTask,
    task,
    description,
    getPendingTasksCount,
    onChangeTask,
    onChangeDescription,
    handleTaskCompletion,
    handleAddTask,
    handleClear,
  } = useTaskList(list);

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