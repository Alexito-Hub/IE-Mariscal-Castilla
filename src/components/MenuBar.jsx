import { useState } from 'react'
import "./MenuBar.css"

function MenuBar() {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div>
            <img src="#" alt="MC" className="logo"/>
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
