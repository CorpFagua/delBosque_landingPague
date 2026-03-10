import { motion } from 'framer-motion';
import '../styles/Products.css';

interface Product {
  icon: string;
  name: string;
  description: string;
}

const products: Product[] = [
  {
    icon: '💧',
    name: 'Botellones de Agua Purificada',
    description: 'Garrafones de 20L en presentación retornable con agua purificada certificada.',
  },
  {
    icon: '💦',
    name: 'Bolsas de Agua Potable',
    description: 'Presentación práctica de bolsas para consumo inmediato en instituciones.',
  },
  {
    icon: '📋',
    name: 'Planes Empresariales Mensuales',
    description: 'Abastecimiento programado con facturación simplificada para tu empresa.',
  },
  {
    icon: '🏛️',
    name: 'Abastecimiento Institucional',
    description: 'Soluciones personalizadas para colegios, hospitales y organismos públicos.',
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
    <section className="products" id="Products">
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nuestros Productos y Servicios</h2>
          <p>Oferta completa de soluciones de hidratación profesional</p>
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
