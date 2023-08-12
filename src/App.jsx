import MenuBar from "./components/MenuBar"
import Footer from ".components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div>
        <MenuBar />
        <div style={{ padding: "20px" }}>
          <h1>Bienvenido a la Institución Educativa</h1>
          <h2>Mariscal Castilla</h2>
          <p>Explora nuestros cursos, participa en eventos y contáctanos para más información.</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
