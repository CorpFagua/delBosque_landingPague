import { motion } from 'framer-motion';
import '../styles/Benefits.css';

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: '✈️',
    title: 'Prioridad Logística',
    description: 'Entregas programadas con máxima confiabilidad y puntualidad en tu empresa o institución.',
  },
  {
    icon: '💰',
    title: 'Precios Especiales por Volumen',
    description: 'Descuentos corporativos según tus necesidades de abastecimiento y consumo mensual.',
  },
  {
    icon: '🤝',
    title: 'Atención Personalizada',
    description: 'Gestor dedicado disponible para consultas, pedidos y solución de cualquier inquietud.',
  },
  {
    icon: '📅',
    title: 'Programación Flexible',
    description: 'Entregas semanales o mensuales según tu conveniencia y calendario empresarial.',
  },
  {
    icon: '🛡️',
    title: 'Certificación INVIMA',
    description: 'Garantía sanitaria completa con análisis microbiológicos regulares certificados.',
  },
  {
    icon: '🏢',
    title: 'Soluciones a Escala',
    description: 'Experiencia en abastecimiento a colegios, hospitales, empresas y construcciones.',
  },
];

export const Benefits = () => {
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

  return (
    <section className="benefits" id="Benefits">
      <div className="container">
        <motion.div
          className="benefits__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Beneficios de Trabajar con Nosotros</h2>
          <p>Soluciones de hidratación empresarial diseñadas para garantizar calidad, eficiencia y confianza en cada entrega.</p>
        </motion.div>

        <motion.div
          className="benefits__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 82, 204, 0.15)',
              }}
            >
              <div className="benefit-card__icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
