import { motion } from 'framer-motion';
import { Receipt, FileText, UserCheck, BarChart3 } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/CorporateDeals.css';

interface Deal {
  icon: ReactNode;
  title: string;
  description: string;
}

const dealFeatures: Deal[] = [
  {
    icon: <Receipt size={28} strokeWidth={1.5} />,
    title: 'Facturación electrónica',
    description: 'Factura a nombre de tu empresa con soporte contable para tu área administrativa.',
  },
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: 'Contrato con condiciones fijas',
    description: 'Precio, volumen y frecuencia pactados formalmente. Sin sorpresas mes a mes.',
  },
  {
    icon: <UserCheck size={28} strokeWidth={1.5} />,
    title: 'Ejecutivo de cuenta asignado',
    description: 'Un responsable directo para coordinar pedidos, resolver novedades y dar seguimiento.',
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: 'Reportes de consumo',
    description: 'Informe mensual con detalle de entregas por sede o área para tu control interno.',
  },
];

export const CorporateDeals = () => {
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

  const handleRequestDeal = () => {
    const target = document.getElementById('ContactForm');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="corporate-deals" id="CorporateDeals">
      <div className="container">
        <motion.div
          className="corporate-deals__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Convenios para empresas e instituciones</h2>
          <p>
            Si tu empresa consume agua de forma recurrente, formalizamos un convenio con
            condiciones claras, documentación en orden y un canal directo de atención.
          </p>
        </motion.div>

        <motion.div
          className="corporate-deals__benefits"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dealFeatures.map((feature, index) => (
            <motion.div key={index} className="benefit-item" variants={cardVariants}>
              <div className="benefit-item__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="corporate-deals__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary corporate-deals__button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRequestDeal}
          >
            Solicitar Convenio Empresarial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
