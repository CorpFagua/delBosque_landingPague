import { motion } from 'framer-motion';
import { ShieldCheck, FlaskConical, Award, Leaf } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Certifications.css';

interface Certification {
  name: string;
  description: string;
  icon: ReactNode;
}

const certifications: Certification[] = [
  {
    name: 'INVIMA',
    description: 'Notificación sanitaria INVIMA vigente para todas nuestras operaciones.',
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
  {
    name: 'ISO 22000',
    description: 'Sistema de Gestión de Seguridad Alimentaria certificado internacionalmente.',
    icon: <Award size={28} strokeWidth={1.5} />,
  },
  {
    name: 'Control de Calidad',
    description: 'Análisis físico, químico y microbiológico mensuales por laboratorio acreditado.',
    icon: <FlaskConical size={28} strokeWidth={1.5} />,
  },
  {
    name: 'Sostenibilidad',
    description: 'Prácticas ambientales responsables y eficiencia operacional.',
    icon: <Leaf size={28} strokeWidth={1.5} />,
  },
];

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="certifications" data-header-scheme="on-dark">
      <div className="container">
        <motion.div
          className="certifications__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certificaciones y garantías</h2>
          <p>Calidad respaldada por certificaciones internacionales y control riguroso.</p>
        </motion.div>

        <motion.div
          className="certifications__badges"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} className="cert-badge" variants={certVariants}>
              <div className="cert-badge__icon">{cert.icon}</div>
              <div className="cert-badge__text">
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications__trust"
          initial={{ opacity: 0, scale: 0.95 }}
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
