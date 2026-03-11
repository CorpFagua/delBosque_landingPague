import { motion } from 'framer-motion';
import { Truck, CircleDollarSign, Headset, CalendarClock, ShieldCheck, Building2 } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Benefits.css';

interface BenefitCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    title: 'Entrega directa en tu sede',
    description: 'Llevamos los botellones hasta tus instalaciones en el horario que tu operación necesite.',
  },
  {
    icon: <CircleDollarSign size={28} strokeWidth={1.5} />,
    title: 'Precios por volumen',
    description: 'A mayor consumo mensual, mejor tarifa. Cotizamos según la cantidad que tu empresa requiera.',
  },
  {
    icon: <Headset size={28} strokeWidth={1.5} />,
    title: 'Gestor dedicado',
    description: 'Una sola persona atiende tu cuenta: pedidos, novedades y seguimiento en un solo canal.',
  },
  {
    icon: <CalendarClock size={28} strokeWidth={1.5} />,
    title: 'Frecuencia a tu medida',
    description: 'Programamos entregas semanales, quincenales o mensuales según tu ritmo de consumo.',
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Registro sanitario INVIMA',
    description: 'Notificación sanitaria vigente y análisis microbiológicos periódicos verificables.',
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: 'Operamos a cualquier escala',
    description: 'Desde una oficina de 10 personas hasta un colegio de 800 estudiantes, nos adaptamos.',
  },
];

export const Benefits = () => {
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
    <section className="benefits" id="Benefits" data-header-scheme="on-dark">
      <div className="container">
        <motion.div
          className="benefits__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Por qué empresas eligen delBosque</h2>
          <p>Nos ocupamos del agua para que tu equipo se concentre en lo que importa. Así trabajamos:</p>
        </motion.div>

        <motion.div
          className="benefits__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 82, 204, 0.15)',
              }}
            >
              <div className="benefit-card__icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
