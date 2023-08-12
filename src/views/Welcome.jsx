import React from 'react'
import { Link } from 'react-router-dom'
import './css/Welcome.css'

function Welcome() {
    return (
        <>
        <div className="welcome-container">
        
            <div className="logo-container">
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

export default Welcome
