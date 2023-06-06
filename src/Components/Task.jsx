import { useState, useEffect } from "react";
import "./Task.css";
import swal from "sweetalert";
import { BiEdit, BiTrash, BiSave } from "react-icons/bi";


export default function Task(props) {
  const {
    id,
    title,
    description,
    completed,
    onTaskCompletion,
    onTaskEdit,
    onTaskDelete,
  } = props;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  // Establece los valores iniciales de edición cuando cambian las props
  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
  }, [title, description]);

  //Maneja el clic en el checkbox para marcar o desmarcar una tarea como completada
  const handleClickCheck = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(id, !isCompleted);
  };

  // Maneja el clic en el botón "Edit" para cambiar al modo de edición de la tarea
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Maneja el clic en el botón "Save" para guardar los cambios realizados en la tarea
  const handleSave = () => {
    swal({
      title: "Save changes?",
      text: "Do you want to save the changes?",
      icon: "warning",
      buttons: ["Cancel", "Save"],
      dangerMode: true,
    }).then((willSave) => {
      if (willSave) {
        onTaskEdit(id, editedTitle, editedDescription);
        setIsEditing(false);
        swal("Changes saved!", {
          icon: "success",
        });
      } else {
        swal("Changes canceled!");
        setIsEditing(false);
        setEditedTitle(title);
        setEditedDescription(description);
      }
    });
  };

  // Maneja el clic en el botón "Delete" para eliminar la tarea
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete this task?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        onTaskDelete(id);
        swal("Your task has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your task is safe!");
      }
    });
  };

  return (
    <div className="task-container">
      <li>
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleClickCheck}
        />
        <span className="title">
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
            />
          ) : (
            title
          )}
          {"\u00A0"}
        </span>
        <span>
          {isEditing ? (
            <input
              type="text"
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
            />
          ) : (
            description
          )}
        </span>
        <div className="task-actions">
          {isEditing ? (
            <button className="task-btn" id="save" onClick={handleSave}>
              <BiSave />
            </button>
          ) : (
            <button className="task-btn" id="edit" onClick={handleEdit}>
              <BiEdit />
            </button>
          )}
          <button className="task-btn" id="delete" onClick={handleDelete}>
          <BiTrash />
          </button>{" "}
        </div>
      </li>
    </div>
  );
}

