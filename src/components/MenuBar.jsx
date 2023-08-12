import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./MenuBar.css";

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div>
        <Logo className="logo" />
        <span>IE Mariscal Castilla</span>
      </div>
      <div>
        <a href="#inicio">Inicio</a>
        <a href="#cursos">Cursos</a>
        <a href="#eventos">Eventos</a>
        <a href="#contacto">Contacto</a>
        <span className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </span>
        <div className={`menu ${showMenu ? "show" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#cursos">Cursos</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
