import React, { useState } from 'react';

function WelcomePage() {
  // Utiliza el estado para controlar si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para iniciar sesión (esto es un ejemplo simple, puedes adaptarlo a tu autenticación real)
  const login = () => {
    setIsLoggedIn(true);
  };

  // Renderiza el mensaje de bienvenida o el formulario de inicio de sesión
  return (
    <div>
      {isLoggedIn ? (
        <p>Bienvenido al sitio web de la Institución Educativa Mariscal Castilla</p>
      ) : (
        <div>
          <p>Por favor, inicia sesión para acceder al sitio.</p>
          <button onClick={login}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
