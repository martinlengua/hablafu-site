import React from 'react';
import logoImg from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="/"><img src={logoImg} alt="HablaFu Logo" className="logo" /></a>
        </div>
        <div className="nav-center">
          <ul className="nav-menu">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nuestros-clientes">Nuestros clientes</a></li>
            <li><a href="#precios">Planes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="https://wa.me/+51991291401?text=hola%20quiero%20m%C3%A1s%20info%20del%20estudio" target="_blank" className="btn">Reservar Ahora</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;