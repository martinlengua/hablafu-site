import React from 'react';
import logoImg from '../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-col">
            <img src={logoImg} alt="Hablafu Producciones" className="footer-logo" />
            <p>Herramientas y servicios profesionales para grabar, producir y transmitir tu podcast con calidad de estudio.</p>
            <div className="social-icons">
              <a href="#" aria-label="YouTube">📺</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#">Cómo trabajamos</a></li>
              <li><a href="#">Nuestros podcasts</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Soporte técnico</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Producción de Podcast</a></li>
              <li><a href="#">Alquiler de Estudio</a></li>
              <li><a href="#">Edición de Audio & Video</a></li>
              <li><a href="#">Consultoría Creativa</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Compañía</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Hablafu Producciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;