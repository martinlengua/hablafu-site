import React from 'react';
import foto1 from '../assets/images/foto1.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';
import fondoImg from '../assets/images/fondo.png';
import './Features.css';

const Features = () => {
  return (
    <section className="features fade-in">
      <h2>¿Por qué elegir HablaFu?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src={foto1} alt="Calidad Profesional" className="feature-image" loading="lazy" />
          <div className="feature-overlay">
            <h3>Calidad Profesional</h3>
            <p>Equipos de grabación e iluminación profesionales para obtener el mejor audio y video.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={foto2} alt="Asistencia Técnica" className="feature-image" loading="lazy" />
          <div className="feature-overlay">
            <h3>Asistencia Técnica</h3>
            <p>Acompañamiento técnico durante toda la sesión para que te enfoques solo en hablar.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src={foto3} alt="Espacio Ideal" className="feature-image" loading="lazy" />
          <div className="feature-overlay">
            <h3>Espacio Ideal</h3>
            <p>Estudio acústico, cómodo y visualmente atractivo, listo para grabar o transmitir.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;