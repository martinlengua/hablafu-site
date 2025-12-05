import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import logo7 from '../assets/images/logo7.png';
import logo8 from '../assets/images/logo8.png';
import logo9 from '../assets/images/logo9.png';
import './TrustedLogos.css';

const TrustedLogos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <section id="nuestros-clientes" className="trusted-logos">
      <div className="container">
        <h2>Ellos confían en nosotros</h2>
        <div className="logos-container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={2}
            slidesPerView={6}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1500}
            loop={true}
            breakpoints={{
              1024: { slidesPerView: 6 },
              768: { slidesPerView: 4 },
              480: { slidesPerView: 3 }
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="brand-card">
                  <img src={logo} alt={`Logo ${index + 1}`} className="brand-logo" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;