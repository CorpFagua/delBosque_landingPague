import { motion } from 'framer-motion';
import '../styles/Benefits.css';

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: '💧',
    title: 'Pureza Garantizada',
    description: 'Proceso de filtración de 5 etapas con control de calidad certificado INVIMA.',
  },
  {
    icon: '🛡️',
    title: 'Control Sanitario',
    description: 'Certificaciones sanitarias vigentes y análisis microbiológicos regulares.',
  },
  {
    icon: '🚚',
    title: 'Entrega a Domicilio',
    description: 'Entregas rápidas y confiables en toda Bogotá sin costo adicional.',
  },
  {
    icon: '♻️',
    title: 'Sostenibilidad',
    description: 'Garrafones reutilizables que respetan el medio ambiente.',
  },
  {
    icon: '🌡️',
    title: 'Temperatura Controlada',
    description: 'Nuestros vehículos mantienen la temperatura óptima durante la entrega.',
  },
  {
    icon: '⭐',
    title: 'Servicio Premium',
    description: 'Atención personalizada y respuesta rápida a tus necesidades.',
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
          <h2>¿Por qué elegir delbosque?</h2>
          <p>Combinamos tecnología de punta con compromiso sanitario para garantizar tu bienestar.</p>
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
