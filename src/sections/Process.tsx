import { motion } from 'framer-motion';
import '../styles/Process.css';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Captación de Agua',
    description: 'Obtención de agua de fuentes certificadas',
    details: 'Seleccionamos agua de fuentes naturales verificadas y autorizadas por autoridades sanitarias.',
  },
  {
    number: 2,
    title: 'Pre-filtración',
    description: 'Eliminación de partículas visibles',
    details: 'Filtros de sedimento de 20 y 5 micras para remover arena, tierra y partículas grandes.',
  },
  {
    number: 3,
    title: 'Filtración con Carbón',
    description: 'Eliminación de cloro y contaminantes',
    details: 'Carbón activado granular que elimina cloro, sabor, olor y contaminantes orgánicos.',
  },
  {
    number: 4,
    title: 'Osmosis Inversa',
    description: 'Purificación a nivel molecular',
    details: 'Membrana de ósmosis inversa elimina bacterias, virus y sales disueltas al 99.9%.',
  },
  {
    number: 5,
    title: 'Post-filtración',
    description: 'Ajuste final de minerales',
    details: 'Añadimos minerales esenciales y equilibramos el pH para agua de calidad premium.',
  },
];

export const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
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
          <h2>Nuestro Proceso de Purificación</h2>
          <p>5 etapas de filtración rigorosas para garantizar agua de máxima pureza.</p>
        </motion.div>

        <motion.div
          className="process__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process__step"
              variants={stepVariants}
            >
              <div className="step__number">
                <motion.div
                  className="step__circle"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>
              </div>

              <motion.div
                className="step__content"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{step.title}</h3>
                <p className="step__description">{step.description}</p>
                <p className="step__details">{step.details}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="step__connector">
                  <motion.div
                    className="connector__line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
