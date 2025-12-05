import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      subtitle: 'Ideal para grabar sin complicaciones.',
      price: '$50/hora',
      includes: ['Grabación en estudio', 'Streaming en vivo', 'Edición básica', 'Entrega en 48 horas'],
      notIncludes: ['Multicámara', 'Edición avanzada', 'Branding con IA', 'Producción completa', 'Soporte 24/7'],
      popular: false
    },
    {
      name: 'Profesional',
      subtitle: 'Para creadores serios que buscan contenido de calidad superior.',
      price: '$100/hora',
      includes: ['Todo lo del Básico', 'Multicámara', 'Edición avanzada', 'Entrega rápida (24 horas disponible como add-on o incluido)', 'Clips virales para redes', 'Producción completa'],
      notIncludes: [],
      note: 'Es el plan con mayor conversión porque agrega valor inmediato.',
      popular: true
    },
    {
      name: 'Empresarial',
      subtitle: 'Producción total + servicios premium para empresas y marcas.',
      price: 'Cotización personalizada',
      includes: ['Todo lo del Profesional', 'Producción completa: guiones, dirección, asistencia en set', 'Branding con IA', 'Soporte 24/7', 'Asesoría mensual', 'Entrega preferencial'],
      notIncludes: [],
      note: 'Este plan debe comunicar "tranquilidad total" y "equipo profesional".',
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2>Planes de Precios</h2>
        <p>Elige el plan que mejor se adapte a tus necesidades de podcasting.</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="badge">Más Popular</div>}
              <h3>{plan.name}</h3>
              {plan.subtitle && <p className="plan-subtitle">{plan.subtitle}</p>}
              <div className="price">{plan.price}</div>
              <div className="features-section">
                <h4>Incluye:</h4>
                <ul>
                  {plan.includes.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {plan.notIncludes.length > 0 && (
                  <>
                    <h4>No incluye:</h4>
                    <ul className="not-includes">
                      {plan.notIncludes.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              {plan.note && <p className="plan-note">{plan.note}</p>}
              <a href="https://wa.me/+51991291401?text=hola%20quiero%20m%C3%A1s%20info%20del%20estudio" target="_blank" className="btn-pricing">Seleccionar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;