import { motion } from 'framer-motion';
import { Droplets, Package, ClipboardList, Landmark } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Products.css';

interface Product {
  icon: ReactNode;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    icon: <Droplets size={28} strokeWidth={1.5} />,
    name: 'Botellón 20L retornable',
    description: 'Agua purificada con registro INVIMA en garrafón reutilizable. Nuestro producto principal.',
  },
  {
    icon: <Package size={28} strokeWidth={1.5} />,
    name: 'Bolsas de agua',
    description: 'Presentación individual para eventos, comedores y consumo rápido en instituciones.',
  },
  {
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
    name: 'Plan mensual programado',
    description: 'Definimos cantidad, frecuencia y horario de entrega. Facturación consolidada a fin de mes.',
  },
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    name: 'Abastecimiento institucional',
    description: 'Operamos con colegios, hospitales y entidades que necesitan documentación y cumplimiento formal.',
  },
];

export const Products = () => {
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
    <section className="products" id="Products" data-header-scheme="on-light">
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Qué ofrecemos</h2>
          <p>Agua purificada en las presentaciones que tu operación necesita</p>
        </motion.div>

        <motion.div
          className="products__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(10, 42, 82, 0.15)',
              }}
            >
              <div className="product-card__icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
