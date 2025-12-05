import React from 'react';
import fondoImg from '../assets/images/fondo.png';
import cards1 from '../assets/images/cards1.png';
import cards2 from '../assets/images/cards2.png';
import cards3 from '../assets/images/cards3.png';
import cards4 from '../assets/images/cards4.png';
import cards5 from '../assets/images/cards5.png';
import cards6 from '../assets/images/cards6.png';
import cards7 from '../assets/images/cards7.png';
import cards8 from '../assets/images/cards8.png';
import cards9 from '../assets/images/cards9.png';
import './Services.css';

const Services = () => {
  const cardImages = [cards1, cards2, cards3];

  const services = [
    {
      icon: '🎙️',
      title: 'Producción Profesional de Podcast',
      description: 'Grabación, multicámara, streaming, edición y asesoría completa para tu podcast.'
    },
    {
      icon: '🎨',
      title: 'Identidad Visual y Producción Creativa con IA de Nueva Generación',
      description: 'Construimos tu marca usando modelos multimodales como Sora, Gemini, Higgsfield.ai, ElevenLabs y LLMs locales para generar contenido visual y sonoro profesional.'
    },
    {
      icon: '🎤',
      title: 'Alquiler de Estudio para Proyectos Profesionales y Corporativos',
      description: 'Espacio equipado con iluminación profesional, cámaras, micrófonos y setup completo para producir podcasts, entrevistas, capacitaciones y contenido corporativo de alta calidad.'
    }
  ];

  return (
    <section className="services slide-up">
      <div className="container">
        <h2>Servicios que ofrecemos</h2>
        <p className="subtitle">Todo lo que necesitas para crear contenido profesional.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${index < cardImages.length ? 'card-bg-image' : ''}`} style={index < cardImages.length ? { backgroundImage: `url(${cardImages[index]})` } : {}}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;