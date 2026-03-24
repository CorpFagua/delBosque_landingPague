import { motion } from 'framer-motion';
import { FileText, PhoneCall, Handshake, Truck, BadgeCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import '../styles/Process.css';

interface ProcessStep {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: <PhoneCall size={22} strokeWidth={1.5} />,
    title: 'Contáctanos',
    description: 'Escríbenos por WhatsApp o formulario indicando tu zona y capacidad de distribución.',
  },
  {
    number: 2,
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: 'Evaluación',
    description: 'Revisamos tu perfil, zona de cobertura y validamos requisitos comerciales básicos.',
  },
  {
    number: 3,
    icon: <Handshake size={22} strokeWidth={1.5} />,
    title: 'Acuerdo comercial',
    description: 'Firmamos convenio con condiciones preferenciales, precios de distribuidor y territorio exclusivo.',
  },
  {
    number: 4,
    icon: <Truck size={22} strokeWidth={1.5} />,
    title: 'Capacitación y entrega',
    description: 'Te entregamos inventario inicial, material de marca y capacitación sobre el producto.',
  },
  {
    number: 5,
    icon: <BadgeCheck size={22} strokeWidth={1.5} />,
    title: 'Distribuidor activo',
    description: 'Comienzas a vender con soporte continuo, reposición ágil y acompañamiento comercial.',
  },
];

export const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <h2>Conviértete en distribuidor autorizado</h2>
          <p>En 5 pasos comienzas a distribuir agua delBosque en tu zona con respaldo total.</p>
        </motion.div>

        <motion.div
          className="process__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="process__step" variants={stepVariants}>
              <div className="step__icon-wrap">
                <div className="step__circle">{step.icon}</div>
                {index < steps.length - 1 && <div className="step__connector" />}
              </div>
              <div className="step__body">
                <span className="step__number">Paso {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
