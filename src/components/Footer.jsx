import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mariscal Castilla. Todos los derechos reservados.</p>
        <p>Contacto: <a href="mailto:concact@mariscalcastilla.edu.pe">contact@mariscalcastilla.edu.pe</a></p>
      </div>
    </footer>
  );
}

export default Footer;
