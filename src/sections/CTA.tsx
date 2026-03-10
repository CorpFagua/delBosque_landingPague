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
          <h2>Estamos Listos para Abastecer tu Empresa</h2>
          <p>Nuestro equipo de profesionales está disponible para brindarte una solución personalizada según las necesidades de tu negocio o institución.</p>

          <motion.button
            className="btn-primary cta__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const target = document.getElementById('ContactForm');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Obtener Cotización Empresarial
          </motion.button>

          <div className="cta__info">
            <p>
              <strong>📞 Pedidos:</strong> WhatsApp +57 300 123 4567
            </p>
            <p>
              <strong>💼 Cotizaciones Empresariales:</strong> Disponibles de lunes a viernes, 8 AM a 5 PM
            </p>
          </div>

          <div className="cta__premium">
            <p>⭐ Aliado estratégico en soluciones de hidratación empresarial</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
