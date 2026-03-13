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
    role: 'Propietaria de familia',
    content: 'Hace 2 años que usamos delbosque. La calidad del agua es incomparable y el servicio a domicilio es muy confiable. Mi familia confía en ustedes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Dr. Carlos Rodríguez',
    role: 'Médico',
    content: 'Como profesional de salud, valoro mucho las certificaciones INVIMA. Es agua de calidad premium, perfecto para mi consultorio.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Andrea López',
    role: 'Directora de Restaurante',
    content: 'Nuestros clientes notan la diferencia en la calidad del agua. delbosque es nuestro proveedor exclusivo desde hace más de un año.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
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
          <p>Testimonios reales de personas que confían en la calidad de delbosque.</p>
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
