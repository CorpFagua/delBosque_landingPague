import { motion } from 'framer-motion';
import '../styles/Sectors.css';

interface SectorCard {
  icon: string;
  name: string;
  description: string;
}

const sectors: SectorCard[] = [
  {
    icon: '🏫',
    name: 'Colegios e Instituciones Educativas',
    description: 'Garantizamos hidratación segura para estudiantes y personal docente.',
  },
  {
    icon: '🏥',
    name: 'Clínicas y Hospitales',
    description: 'Estándares sanitarios certificados para entornos médicos.',
  },
  {
    icon: '🏢',
    name: 'Empresas y Oficinas',
    description: 'Planes corporativos con logística eficiente y atención personalizada.',
  },
  {
    icon: '🏘️',
    name: 'Conjuntos Residenciales',
    description: 'Soluciones de abastecimiento para múltiples unidades residenciales.',
  },
  {
    icon: '👷',
    name: 'Constructoras',
    description: 'Abastecimiento programado para obra y personal en construcción.',
  },
  {
    icon: '🛒',
    name: 'Supermercados y Tiendas',
    description: 'Entregas regulares para comercios minoristas y puntos de venta.',
  },
];

export const Sectors = () => {
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
    <section className="sectors" id="Sectors">
      <div className="container">
        <motion.div
          className="sectors__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>⭐ Sectores que Abastecemos</h2>
          <p>Experiencia profesional en soluciones de hidratación para empresas e instituciones</p>
        </motion.div>

        <motion.div
          className="sectors__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="sector-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(10, 42, 82, 0.15)',
              }}
            >
              <div className="sector-card__icon">{sector.icon}</div>
              <h3>{sector.name}</h3>
              <p>{sector.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
