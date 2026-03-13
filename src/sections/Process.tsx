import { motion } from 'framer-motion';
import { Droplet, Filter, Atom, FlaskConical, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Process.css';

interface ProcessStep {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: <Droplet size={22} strokeWidth={1.5} />,
    title: 'Captación',
    description: 'Agua de fuentes naturales verificadas y autorizadas por autoridades sanitarias.',
  },
  {
    number: 2,
    icon: <Filter size={22} strokeWidth={1.5} />,
    title: 'Pre-filtración',
    description: 'Filtros de sedimento de 20 y 5 micras para remover partículas grandes.',
  },
  {
    number: 3,
    icon: <Atom size={22} strokeWidth={1.5} />,
    title: 'Carbón activo',
    description: 'Carbón activado granular que elimina cloro, sabor, olor y contaminantes orgánicos.',
  },
  {
    number: 4,
    icon: <FlaskConical size={22} strokeWidth={1.5} />,
    title: 'Ósmosis inversa',
    description: 'Membrana que elimina bacterias, virus y sales disueltas al 99.9%.',
  },
  {
    number: 5,
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    title: 'Post-filtración',
    description: 'Añadimos minerales esenciales y equilibramos el pH para agua premium.',
  },
];

export const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="process" data-header-scheme="on-light">
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nuestro proceso de purificación</h2>
          <p>5 etapas de filtración rigurosas para garantizar agua de máxima pureza.</p>
        </motion.div>

        <motion.div
          className="process__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="process__step" variants={stepVariants}>
              <div className="step__icon-wrap">
                <div className="step__circle">{step.icon}</div>
                {index < steps.length - 1 && <div className="step__connector" />}
              </div>
              <div className="step__body">
                <span className="step__number">Paso {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
