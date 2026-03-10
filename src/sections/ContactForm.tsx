import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/ContactForm.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    address: '',
    whatsapp: '',
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
    if (!formData.name || !formData.company || !formData.whatsapp) {
      alert('Por favor completa los campos requeridos');
      setLoading(false);
      return;
    }

    // Simular envío (se podría integrar con un backend real)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      // Redirigir a WhatsApp con mensaje
      const message = `Hola delbosque, soy ${formData.name} de ${formData.company}. Ubicación: ${formData.address}. Me interesa solicitar una cotización empresarial.`;
      const whatsappLink = `https://wa.me/${formData.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');

      // Resetear formulario
      setFormData({ name: '', company: '', address: '', whatsapp: '' });
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
    <section className="contact-form-section" id="ContactForm">
      <div className="container">
        <motion.div
          className="contact-form-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-form__header">
            <h2>📲 Solicitar Cotización</h2>
            <p>Completa este formulario y nuestro equipo te contactará con una propuesta personalizada.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Empresa *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Dirección de entrega"
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp *</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
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
                ✓ Formulario enviado exitosamente. Te redirigiremos a WhatsApp.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
