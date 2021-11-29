import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" className={({ isActive }) => "nav-link" + (isActive ? " nav-active" : "")}>
        Accueil
      </NavLink>
      <NavLink exact to="/about" className={({ isActive }) => "nav-link" + (isActive ? " nav-active" : "")}>
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
