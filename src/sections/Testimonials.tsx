import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'María González',
    role: 'Coordinadora administrativa – Colegio San Jorge, Chía',
    content: 'Llevamos dos años trabajando con Delbosque. La entrega es puntual, la factura llega a tiempo y el agua cumple todos los requisitos del colegio. Sin complicaciones.',
    rating: 5,
    avatar: '/images/testimonial-maria.webp',
  },
  {
    name: 'Dr. Carlos Rodríguez',
    role: 'Director médico – Clínica Santa Bárbara, Bogotá',
    content: 'Valoramos el registro INVIMA y la documentación de calidad que entregan. Para un entorno de salud no se puede improvisar con el proveedor de agua.',
    rating: 5,
    avatar: '/images/testimonial-carlos.webp',
  },
  {
    name: 'Andrea López',
    role: 'Gerente de operaciones – Constructora Andina, Sabana',
    content: 'Manejamos tres frentes de obra simultáneos y Delbosque coordina la entrega en cada sitio bajo cronograma. El ejecutivo de cuenta resuelve cualquier novedad al instante.',
    rating: 5,
    avatar: '/images/testimonial-andrea.webp',
  },
];

export const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="testimonials" data-header-scheme="on-dark">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Empresas e instituciones en Bogotá y Sabana que ya tienen convenio activo con Delbosque.</p>
        </motion.div>

        <motion.div
          className="testimonials__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="testimonial-card" variants={cardVariants}>
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-card__content">"{testimonial.content}"</p>
              <div className="testimonial-card__author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                  loading="lazy"
                  decoding="async"
                  width="100"
                  height="100"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
