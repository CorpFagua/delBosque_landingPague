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
    icon: <Receipt size={24} strokeWidth={1.5} />,
    title: 'Facturación electrónica',
    description: 'Factura a nombre de tu empresa con soporte contable para tu área administrativa.',
  },
  {
    icon: <FileText size={24} strokeWidth={1.5} />,
    title: 'Contrato con condiciones fijas',
    description: 'Precio, volumen y frecuencia pactados formalmente. Sin sorpresas mes a mes.',
  },
  {
    icon: <UserCheck size={24} strokeWidth={1.5} />,
    title: 'Ejecutivo de cuenta asignado',
    description: 'Un responsable directo para coordinar pedidos, resolver novedades y dar seguimiento.',
  },
  {
    icon: <BarChart3 size={24} strokeWidth={1.5} />,
    title: 'Reportes de consumo',
    description: 'Informe mensual con detalle de entregas por sede o área para tu control interno.',
  },
];

export const CorporateDeals = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleRequestDeal = () => {
    const target = document.getElementById('ContactForm');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="corporate-deals" id="CorporateDeals" data-header-scheme="on-light">
      <div className="container">
        <div className="corporate-deals__split">
          <motion.div
            className="corporate-deals__image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/corporate-meeting.webp"
              alt="Reunión empresarial corporativa"
              className="corporate-deals__photo"
              loading="lazy"
              decoding="async"
              width="800"
              height="533"
            />
          </motion.div>

          <div className="corporate-deals__text-col">
            <motion.div
              className="corporate-deals__header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Convenios para empresas e instituciones</h2>
              <p>
                Si tu empresa consume agua de forma recurrente, formalizamos un convenio con
                condiciones claras, documentación en orden y un canal directo de atención.
              </p>
            </motion.div>

            <motion.div
              className="corporate-deals__grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dealFeatures.map((feature, index) => (
                <motion.div key={index} className="deal-card" variants={cardVariants}>
                  <div className="deal-card__icon">{feature.icon}</div>
                  <div className="deal-card__text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="corporate-deals__cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="corporate-deals__button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRequestDeal}
              >
                Solicitar Convenio Empresarial
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
