import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Tasks from "../pages/Tasks";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Menu;
