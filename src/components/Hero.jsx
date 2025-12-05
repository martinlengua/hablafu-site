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
          <a href="#reservar" className="btn-primary">Reservar Ahora</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;