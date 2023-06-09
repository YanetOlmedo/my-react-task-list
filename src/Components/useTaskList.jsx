import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";

export const useTaskList = (initialList) => {
  const [listTask, setListTask] = useState(initialList || []);

  // Agrega una nueva tarea
  const addTask = (task, description) => {
    if (task.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        titleTask: task,
        description: description,
        stat: false,
      };
      setListTask((prevList) => [...prevList, newTask]);
      saveTasksToLocalStorage([...listTask, newTask]);
    }
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
    saveTasksToLocalStorage(updatedListTask);
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
    saveTasksToLocalStorage(updatedListTask);
    console.log(
      `Task "${id}" edited: title=${editedTitle}, description=${editedDescription}`
    );
  };

  // Maneja la eliminación de la tarea
  const handleTaskDelete = (id) => {
    const updatedListTask = listTask.filter((task) => task.id !== id);
    setListTask(updatedListTask);
    saveTasksToLocalStorage(updatedListTask);
    console.log(`Task "${id}" deleted`);
  };

  // Limpia todas las tareas
  const handleClear = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete all tasks?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setListTask([]);
        saveTasksToLocalStorage([]);
        swal("All tasks have been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your tasks are safe!");
      }
    });
  };

  // Guarda las tareas en el almacenamiento local
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("listTask", JSON.stringify(tasks));
  };

  // Cargar las tareas desde el almacenamiento local al cargar el componente
  useEffect(() => {
    const localStorageData = localStorage.getItem("listTask");
    const storedListTask = JSON.parse(localStorageData);
    if (storedListTask) {
      setListTask(storedListTask);
    }
  }, []);

  return {
    listTask,
    addTask,
    handleTaskCompletion,
    handleTaskEdit,
    handleTaskDelete,
    handleClear,
  };
};
