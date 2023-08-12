import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST para registrar una cuenta
      const response = await axios.post('/api/register', {
        username,
        password,
      });

      // Manejar la respuesta del registro exitoso aquí
      console.log('Registro exitoso:', response.data);

      // Reiniciar el formulario
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      // Manejar el error de registro aquí
      setError('No se pudo registrar la cuenta');
    }
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
