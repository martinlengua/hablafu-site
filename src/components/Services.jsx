import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎙️',
      title: 'Grabación de Podcast en Estudio',
      description: 'Audio profesional con micrófonos de estudio e iluminación ideal para grabar episodios de alta calidad.'
    },
    {
      icon: '🎥',
      title: 'Grabación de Video Podcast / Multicámara',
      description: 'Cámaras HD/4K y cambios en vivo con ATEM Mini Pro para un podcast visual impactante.'
    },
    {
      icon: '🔴',
      title: 'Streaming en Vivo',
      description: 'Transmisión profesional a YouTube, Facebook o Twitch con supervisión técnica.'
    },
    {
      icon: '✂️',
      title: 'Edición de Audio y Video',
      description: 'Corrección de sonido, cortes, gráficos, colores y exportación lista para publicar.'
    },
    {
      icon: '🎨',
      title: 'Branding y Diseño para Podcast',
      description: 'Covers, miniaturas y elementos visuales para construir una identidad fuerte.'
    },
    {
      icon: '🧩',
      title: 'Producción Completa de Podcast',
      description: 'Guion, asesoría, grabación, edición y publicación. Solución llave en mano.'
    },
    {
      icon: '🎤',
      title: 'Alquiler del Estudio',
      description: 'Uso del espacio con iluminación y equipos profesionales incluidos.'
    },
    {
      icon: '💼',
      title: 'Contenido Corporativo para Empresas',
      description: 'Producción de videos institucionales, entrevistas y capacitaciones.'
    },
    {
      icon: '🔧',
      title: 'Asesoría Personalizada',
      description: 'Recomendaciones técnicas, estrategias de contenido y cómo crecer tu podcast.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Servicios que ofrecemos</h2>
        <p className="subtitle">Todo lo que necesitas para crear contenido profesional.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
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