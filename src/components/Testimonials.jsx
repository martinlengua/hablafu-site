import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials zoom-in">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonial">
        <p>"HablaFu nos proporcionó el espacio perfecto para nuestro podcast corporativo. ¡Altamente recomendado!"</p>
        <cite>- Empresa XYZ</cite>
      </div>
      <div className="testimonial">
        <p>"La calidad de audio es excepcional. Volveremos pronto."</p>
        <cite>- Podcaster Independiente</cite>
      </div>
    </section>
  );
};

export default Testimonials;