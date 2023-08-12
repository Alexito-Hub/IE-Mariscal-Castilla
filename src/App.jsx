import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <div style={{ padding: "20px" }}>
        <h1>Contenido de la página</h1>
        <p>Aquí puedes poner el contenido principal de tu página.</p>
      </div>
    </div>
  );
}

export default App;