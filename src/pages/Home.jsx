import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Todo App!</h1>
      <p>
      Start being more organized and productive with our task management tool!
      </p>
      <div className="btn-comenzar">
      <Link to="/tasks">Start</Link>
      </div>
    </div>
  );
}
