import { motion } from 'framer-motion';
import '../styles/Sectors.css';

interface SectorCard {
  name: string;
  description: string;
  image: string;
}

const sectors: SectorCard[] = [
  {
    name: 'Colegios e instituciones educativas',
    description: 'Dispensadores y botellones para zonas comunes, comedores y salas de profesores.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  },
  {
    name: 'Clínicas y centros médicos',
    description: 'Cumplimos los requisitos documentales que exigen los entornos de salud.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    name: 'Empresas y oficinas',
    description: 'Entrega recurrente para equipos de trabajo, con facturación a nombre de la empresa.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    name: 'Conjuntos residenciales',
    description: 'Abastecimiento coordinado con administración para múltiples torres o unidades.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    name: 'Constructoras y obras',
    description: 'Agua para campamentos y frentes de obra con entregas en sitio bajo cronograma.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    name: 'Comercios y tiendas',
    description: 'Reposición periódica para reventa o consumo en punto de venta.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
  },
];

export const Sectors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="sectors" id="Sectors" data-header-scheme="on-dark">
      <div className="container">
        <motion.div
          className="sectors__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Sectores que abastecemos</h2>
          <p>Trabajamos con empresas e instituciones que necesitan un proveedor confiable y documentado.</p>
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
              style={{ backgroundImage: `url(${sector.image})` }}
            >
              <div className="sector-card__overlay" />
              <div className="sector-card__content">
                <h3>{sector.name}</h3>
                <p>{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
