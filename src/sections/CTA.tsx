import { motion } from 'framer-motion';
import { Phone, Briefcase, Award } from 'lucide-react';
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
    <section className="cta" data-header-scheme="on-dark">
      <div className="cta__background" />

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cta__content">
          <h2>Solicita tu primera entrega sin compromiso</h2>
          <p>Escríbenos por WhatsApp o usa el formulario. Respondemos el mismo día con una propuesta ajustada a tu operación.</p>

          <motion.button
            className="btn-primary cta__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const target = document.getElementById('ContactForm');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar cotización
          </motion.button>

          <div className="cta__info">
            <p>
              <Phone size={16} className="cta__inline-icon" />
              <strong>Pedidos:</strong> WhatsApp +57 300 123 4567
            </p>
            <p>
              <Briefcase size={16} className="cta__inline-icon" />
              <strong>Convenios:</strong> Lunes a viernes, 8:00 AM a 5:00 PM
            </p>
          </div>

          <div className="cta__premium">
            <Award size={20} className="cta__inline-icon" />
            <p>Proveedor certificado INVIMA de agua purificada</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
