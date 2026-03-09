import { motion } from 'framer-motion';
import '../styles/CTA.css';

export const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="cta">
      <div className="cta__background" />

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cta__content">
          <h2>¿Listo para cambiar a agua de calidad premium?</h2>
          <p>Contacta con nosotros hoy mismo y conoce nuestros planes especiales para tu hogar o negocio.</p>

          <motion.button
            className="btn-primary cta__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const whatsappLink = `https://wa.me/573001234567?text=Hola%20delbosque,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20planes`;
              window.open(whatsappLink, '_blank');
            }}
          >
            Contactar por WhatsApp
          </motion.button>

          <div className="cta__info">
            <p>
              <strong>📞 Atención al cliente:</strong> Disponible de lunes a domingo, 8 AM a 6 PM
            </p>
            <p>
              <strong>🚚 Entrega:</strong> Mismo día en Bogotá
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
