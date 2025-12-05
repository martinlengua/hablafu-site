import React from 'react';
import heroImg from '../assets/images/hero-image.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Tu Espacio de Podcast Ideal en HablaFu</h1>
          <p>Renta nuestro estudio profesional para grabar podcasts de alta calidad para personas y empresas.</p>
          <a href="https://wa.me/+51991291401?text=hola%20quiero%20m%C3%A1s%20info%20del%20estudio" target="_blank" className="btn-primary">Reservar Ahora</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;