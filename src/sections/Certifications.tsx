import { motion } from 'framer-motion';
import '../styles/Certifications.css';

interface Certification {
  name: string;
  description: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    name: 'INVIMA',
    description: 'Certificación de Notificación Sanitaria INVIMA vigente para todas nuestras operaciones.',
    icon: '✓',
  },
  {
    name: 'ISO 22000',
    description: 'Sistema de Gestión de Seguridad Alimentaria certificado internacionalmente.',
    icon: '✓',
  },
  {
    name: 'Control de Calidad',
    description: 'Análisis físico, químico y microbiológico mensuales certificados por laboratorio acreditado.',
    icon: '✓',
  },
  {
    name: 'Sostenibilidad',
    description: 'Compromiso con prácticas ambientales responsables y eficiencia operacional.',
    icon: '✓',
  },
];

export const Certifications = () => {
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

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="certifications">
      <div className="container">
        <motion.div
          className="certifications__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certificaciones y Garantías</h2>
          <p>Garantía de calidad respaldada por certificaciones internacionales y control riguroso.</p>
        </motion.div>

        <motion.div
          className="certifications__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              variants={certVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 82, 204, 0.15)',
              }}
            >
              <div className="cert-card__icon">{cert.icon}</div>
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications__trust"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Todos nuestros análisis y certificaciones están disponibles para consulta y verificación con las autoridades sanitarias competentes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
