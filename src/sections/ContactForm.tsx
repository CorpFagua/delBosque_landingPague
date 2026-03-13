import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/ContactForm.css';

// TODO: Reemplazar con el número real del negocio (solo dígitos, con código de país)
const BUSINESS_WHATSAPP = '573001234567';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    address: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validación básica
    if (!formData.name || !formData.company || !formData.phone) {
      alert('Por favor completa los campos requeridos');
      setLoading(false);
      return;
    }

    // Simular envío (se podría integrar con un backend real)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      const message = `Hola, soy ${formData.name} de ${formData.company}. Dirección de entrega: ${formData.address || 'Por confirmar'}. Mi teléfono: ${formData.phone}. Quisiera cotizar abastecimiento de agua.`;
      const whatsappLink = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');

      // Resetear formulario
      setFormData({ name: '', company: '', address: '', phone: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
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
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80"
              alt="Agua cristalina de montaña"
              className="contact-form__photo"
            />
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

            <motion.button
              type="submit"
              className="btn-primary contact-form__button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Enviar Cotización'}
            </motion.button>

            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Formulario enviado exitosamente. Te redirigiremos a WhatsApp.
              </motion.div>
            )}
          </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
