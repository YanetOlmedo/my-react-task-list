import { Menu, MenuButton, MenuList, MenuItem, MenuIcon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Tasks from "../pages/Tasks";

function NavigationMenu() {
  return (
    <Menu>
      <Link to="#">
        <MenuButton>
          Menu <ChevronDownIcon />
        </MenuButton>
      </Link>
      <MenuList>
        <MenuItem as={Link} to="/">
          Home
        </MenuItem>
        <MenuItem as={Link} to="/tasks">
          Tasks
        </MenuItem>
        <MenuItem as={Link} to="/about-us">
          About Us
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function MenuWithRoutes() {
  return (
    <div className="menu">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

function MainMenu() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <MenuWithRoutes />
    </BrowserRouter>
  );
}

export default MainMenu;
