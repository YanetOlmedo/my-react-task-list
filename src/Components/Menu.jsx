import { Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Tasks from "../pages/Tasks";

function NavigationMenu() {
  return (
    <Flex justifyContent="flex-start" alignItems="flex-start">
      <Menu>
        <Link to="#">
          <MenuButton as={IconButton} aria-label="Menu" icon={<HamburgerIcon />} variant="ghost" boxSize={6} fontSize="xl"/>
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
    </Flex>
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
      <div className="menu-container">
        <NavigationMenu />
        <MenuWithRoutes />
      </div>
    </BrowserRouter>
  );
}

export default MainMenu;
