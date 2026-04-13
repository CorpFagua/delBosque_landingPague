import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/ContactForm.css';
import contactImageFallback from '../assets/robot_img.png';

// URL del backend API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validación básica en el frontend
    if (!formData.name || !formData.company || !formData.phone || !formData.email) {
      setError('Por favor completa los campos requeridos: Nombre, Empresa, Email y Teléfono');
      setLoading(false);
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      setLoading(false);
      return;
    }

    try {
      // Enviar datos al backend
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario');
      }

      // Éxito
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', address: '', phone: '', message: '' });

      // Esconder el mensaje de éxito después de 4 segundos
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'No se pudo conectar con el servidor. Verifica que esté en línea.';
      setError(errorMessage);
      console.error('Error al enviar formulario:', err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="contact-form-section" id="ContactForm" data-header-scheme="on-light">
      <div className="container">
        <div className="contact-form__split">
          <motion.div
            className="contact-form__image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <picture>
              <source type="image/webp" srcSet="/images/robot_img.webp" />
              <img
                src={contactImageFallback}
                alt="Agua cristalina de montaña"
                className="contact-form__photo"
                loading="lazy"
                decoding="async"
                width="928"
                height="1149"
              />
            </picture>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="contact-form__header">
              <h2>Solicitar cotización</h2>
              <p>Déjanos tus datos y te contactamos con una propuesta ajustada a tu empresa.</p>
            </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Carlos Ramírez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Empresa o institución *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ej: Colegio San Martín"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email de contacto *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ej: carlos@empresa.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección de entrega</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Ej: Cra 5 #12-30, Cota"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono de contacto *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+57 300 1234567"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje (opcional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos más detalles sobre tu necesidad de agua..."
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary contact-form__button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Cotización'}
            </motion.button>

            {error && (
              <motion.div
                className="form-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ❌ {error}
              </motion.div>
            )}

            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✅ Formulario enviado exitosamente. Nos pondremos en contacto pronto.
              </motion.div>
            )}
          </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
