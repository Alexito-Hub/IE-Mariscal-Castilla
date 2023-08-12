import { useState } from 'react'
import MenuBar from "./components/MenuBar";
import './App.css'

function App() {
    
    return (
    <>
    <div>
      <MenuBar />
      <div className="content">
        <section id="inicio">
          <h1>Inicio</h1>
          <p>Bienvenido a la Institución Educativa Mariscal Castilla.</p>
        </section>
        <section id="cursos">
          <h1>Cursos</h1>
          <p>Explora nuestros cursos y amplía tus conocimientos.</p>
        </section>
        <section id="eventos">
          <h1>Eventos</h1>
          <p>Participa en nuestros eventos educativos.</p>
        </section>
        <section id="contacto">
          <h1>Contacto</h1>
          <p>Contáctanos para más información sobre nuestra institución.</p>
        </section>
        <section id="login">
          <h1>Login</h1>
          <p>Ingresa a tu cuenta.</p>
        </section>
        <section id="chat">
          <h1>Chat</h1>
          <p>Comunica y participa en el chat.</p>
        </section>
      </div>
    </div>
    </>
    )
}

export default App