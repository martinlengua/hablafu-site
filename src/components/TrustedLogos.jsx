import React from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import './TrustedLogos.css';

const TrustedLogos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  // Duplicar logos para efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="trusted-logos">
      <div className="container">
        <h2>Bajo la confianza de estos canales</h2>
        <div className="logos-container">
          <div className="logos-row">
            {duplicatedLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index % logos.length + 1}`} className="logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;