import MenuBar from "./components/MenuBar"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div>
        <MenuBar />
        <div style={{ padding: "20px" }}>
          <h1>Bienvenido a la Institución Educativa</h1>
          <h1>Mariscal Castilla</h1>
          <p>
            ¡Bienvenidos al sitio web de la Institución Educativa Mariscal Castilla!
            Nuestro objetivo principal es preservar y compartir la rica historia de nuestra institución. Aquí encontrarás una valiosa colección de momentos, logros y anécdotas que han formado la base de nuestra comunidad educativa.
            Además, hemos diseñado este espacio para proporcionar a los estudiantes una fuente central de información. Desde detalles sobre cursos y eventos hasta recursos esenciales para tu desarrollo académico, todo está al alcance de tus manos.
            Pero eso no es todo. Queremos que este sitio sea un lugar de interacción y colaboración entre estudiantes. ¿Tienes preguntas, ideas o simplemente deseas conectar con otros compañeros? ¡Nuestro <a href="/chat">chat</a> está aquí para facilitar esas conversaciones!
            Así que, únete a nosotros en este emocionante viaje. Explora, aprende, comparte y conéctate. ¡Esperamos que encuentres en este sitio web todo lo que necesitas para tu experiencia en la Institución Educativa Mariscal Castilla!
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
