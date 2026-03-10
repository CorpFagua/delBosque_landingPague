import { motion } from 'framer-motion';
import '../styles/CorporateDeals.css';

interface Deal {
  icon: string;
  title: string;
  description: string;
}

const benefits: Deal[] = [
  {
    icon: '✈️',
    title: 'Prioridad Logística',
    description: 'Entregas programadas con máxima confiabilidad y puntualidad.',
  },
  {
    icon: '💰',
    title: 'Precios Especiales',
    description: 'Descuentos por volumen según tus necesidades de abastecimiento.',
  },
  {
    icon: '🤝',
    title: 'Atención Personalizada',
    description: 'Gestor dedicado para tu empresa disponible para consultas.',
  },
  {
    icon: '📅',
    title: 'Programación Flexible',
    description: 'Entregas semanales o mensuales según tu conveniencia.',
  },
];

export const CorporateDeals = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleRequestDeal = () => {
    const target = document.getElementById('ContactForm');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="corporate-deals" id="CorporateDeals">
      <div className="container">
        <motion.div
          className="corporate-deals__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>💎 Convenios Empresariales</h2>
          <p>
            Ofrecemos planes corporativos diseñados para empresas, colegios, hospitales y
            conjuntos residenciales con entregas programadas y beneficios exclusivos.
          </p>
        </motion.div>

        <motion.div
          className="corporate-deals__benefits"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} className="benefit-item" variants={cardVariants}>
              <div className="benefit-item__icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="corporate-deals__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary corporate-deals__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRequestDeal}
          >
            Solicitar Convenio Empresarial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
