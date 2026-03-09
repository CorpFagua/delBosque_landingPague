import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';
import botella from '../assets/botellonesduo.png';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="hero">
      {/* Fondo degradado cinematografico */}
      <div
        className="hero__background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="hero__inner">
        {/* Contenido principal */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__badge">
            <span>Pureza Certificada INVIMA</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__title">
            Agua Purificada de Calidad Premium
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__subtitle">
            Control sanitario certificado, tecnología de purificación de última generación
            y entrega a domicilio en toda Cota y sus alrededores. Confianza en cada gota.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__cta-group">
            <motion.button
              className="btn-primary hero__cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const whatsappLink = `https://wa.me/573001234567?text=Hola%20delbosque,%20me%20interesa%20ordenar%20agua%20purificada`;
                window.open(whatsappLink, '_blank');
              }}
            >
              Pedir por WhatsApp
            </motion.button>

            <motion.a
              href="#Benefits"
              className="hero__scroll-cta"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Visual principal */}
        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <motion.div
            className="hero__decoration"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <img src={botella} alt="Botellas de agua delBosque" className="water-bottle-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
