import { useState } from 'react'
import Logo from "../assets/logo.svg";
import "./MenuBar.css";

function MenuBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div>
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
            <a href="#login">Login</a>
            <a href="#chat">
            </a>
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
