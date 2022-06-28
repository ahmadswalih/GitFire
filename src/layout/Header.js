import React, { useState, useContext } from "react";
import {
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  NavbarText,
  Collapse,
  Navbar,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          GitFire App
        </Link>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar />
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink className="text-white">SignIn</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white">SignUp</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white">Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
