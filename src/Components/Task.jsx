import { useState } from "react";
import "./Task.css";

export default function Task(props) {
  const { title, description, onTaskCompletion } = props;
  const [completed, setCompleted] = useState(false);

  //Funcion que se ejecuta cuando hacen click en el checkbox
  const handleClickCheck = () => {
    setCompleted(!completed);
    onTaskCompletion(title, !completed);
  };

  return (
    <div className="task-container">
      <li>
        {/* El checkbox muestra el estado actual de completed y ejecuta "handlecClickCheck" al cambiar */}
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleClickCheck}
        />
        <span className="title">
          {title}
          {".\u00A0"}
        </span>
        <span>{description}</span>
      </li>
    </div>
  );
}
