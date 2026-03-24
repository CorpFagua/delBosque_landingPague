import { motion } from 'framer-motion';
import { Droplets, Package, ClipboardList, Landmark } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Products.css';
import botellones from '../assets/botellonesduo.png';

interface Product {
  icon: ReactNode;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    icon: <Droplets size={24} strokeWidth={1.5} />,
    name: 'Botellón retornable',
    description: 'Agua purificada con registro INVIMA en garrafón reutilizable. Nuestro producto principal.',
  },
  {
    icon: <Package size={24} strokeWidth={1.5} />,
    name: 'Bolsas de agua',
    description: 'Presentación individual para eventos, comedores y consumo rápido en instituciones.',
  },
  {
    icon: <ClipboardList size={24} strokeWidth={1.5} />,
    name: 'Plan mensual programado',
    description: 'Definimos cantidad, frecuencia y horario de entrega. Facturación consolidada a fin de mes.',
  },
  {
    icon: <Landmark size={24} strokeWidth={1.5} />,
    name: 'Abastecimiento institucional',
    description: 'Operamos con colegios, hospitales y entidades que necesitan documentación y cumplimiento formal.',
  },
];

export const Products = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="products" id="Products" data-header-scheme="on-light">
      <div className="container">
        <div className="products__split">
          <motion.div
            className="products__image-col"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={botellones}
              alt="Botellones Del Bosque 18.9L y 10L con agua de manantial"
              className="products__hero-img"
            />
          </motion.div>

          <div className="products__text-col">
            <motion.div
              className="products__header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Qué ofrecemos</h2>
              <p>Agua purificada en las presentaciones que tu operación necesita.</p>
            </motion.div>

            <motion.div
              className="products__list"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {products.map((product, index) => (
                <motion.div key={index} className="product-row" variants={itemVariants}>
                  <div className="product-row__icon">{product.icon}</div>
                  <div className="product-row__text">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
