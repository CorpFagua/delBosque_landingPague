import { motion } from 'framer-motion';
import { School, Stethoscope, Building2, Home, HardHat, ShoppingCart } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Sectors.css';

interface SectorCard {
  icon: ReactNode;
  name: string;
  description: string;
}

const sectors: SectorCard[] = [
  {
    icon: <School size={28} strokeWidth={1.5} />,
    name: 'Colegios e instituciones educativas',
    description: 'Dispensadores y botellones para zonas comunes, comedores y salas de profesores.',
  },
  {
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    name: 'Clínicas y centros médicos',
    description: 'Cumplimos los requisitos documentales que exigen los entornos de salud.',
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    name: 'Empresas y oficinas',
    description: 'Entrega recurrente para equipos de trabajo, con facturación a nombre de la empresa.',
  },
  {
    icon: <Home size={28} strokeWidth={1.5} />,
    name: 'Conjuntos residenciales',
    description: 'Abastecimiento coordinado con administración para múltiples torres o unidades.',
  },
  {
    icon: <HardHat size={28} strokeWidth={1.5} />,
    name: 'Constructoras y obras',
    description: 'Agua para campamentos y frentes de obra con entregas en sitio bajo cronograma.',
  },
  {
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    name: 'Comercios y tiendas',
    description: 'Reposición periódica para reventa o consumo en punto de venta.',
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
          <h2>Sectores que abastecemos</h2>
          <p>Trabajamos con empresas e instituciones que necesitan un proveedor confiable y documentado</p>
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
