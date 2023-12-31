import React, { useState } from 'react'
import logoImage from '../assets/logo.png'
import "./css/MenuBar.css"

function MenuBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo"/>
            <span>Mariscal Castilla</span>
          </div>
          <div>
            <a href="inicio">Inicio</a>
            <a href="eventos">Eventos</a>
            <a href="login">Login</a>
            <a href="chat">Chat</a>
            <span className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </span>
          </div>
          <div className={`menu ${showMenu ? "show" : ""}`}>
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#eventos">Eventos</a>
            <a href="#contacto">Contacto</a>
            <a href="#login">Login</a>
            <a href="#chat">Chat</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MenuBar
