import MenuBar from "./components/MenuBar"
import './App.css'

function App() {

  return (
    <>
      <div>
        <MenuBar />
        <div style={{ padding: "20px" }}>
          <h1>Bienvenido a la Institución Educativa</h1>
          <p>Explora nuestros cursos, participa en eventos y contáctanos para más información.</p>
        </div>
      </div>
    </>
  )
}

export default App
