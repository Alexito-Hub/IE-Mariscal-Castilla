import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asegúrate de tener la ruta correcta a tu logo

function Welcome() {
    return (
    <>
    <div className="welcome-container">
      <div className="logo-container">
        <img src={logo} alt="Logo de Mariscal Castilla" className="logo" />
        <h1>Mariscal Castilla</h1>
      </div>
      <div className="welcome-message">
        <h2>Bienvenido al sitio web de la Institución Educativa Mariscal Castilla</h2>
        <p>Por favor, inicia sesión para acceder al sitio.</p>
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
        <p>O</p>
        <Link to="/inicio">
          <button>Continuar sin iniciar sesión</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Welcome;
