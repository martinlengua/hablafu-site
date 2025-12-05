import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HablaFu</h3>
          <p>Tu espacio para podcasts en [Ciudad].</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@hablafu.com</p>
          <p>Tel: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HablaFu. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;