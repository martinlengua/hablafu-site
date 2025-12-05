import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import TrustedLogos from './TrustedLogos';
import Features from './Features';
import Services from './Services';
import Pricing from './Pricing';
import Footer from './Footer';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustedLogos />
      <Features />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;