import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="main-header">
      <img className="header-logo" src="/todo.svg" />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        My List
      </NavLink>
    </nav>
  );
}
