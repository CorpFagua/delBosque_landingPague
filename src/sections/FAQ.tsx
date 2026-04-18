import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../styles/FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo funciona el servicio de agua purificada para empresas en Bogotá?',
    answer:
      'Definimos contigo la cantidad de botellones, la frecuencia de entrega (semanal, quincenal o mensual) y el horario que mejor se adapte a tu operación. Entregamos directamente en tu sede, emitimos factura electrónica a nombre de tu empresa y asignamos un ejecutivo de cuenta dedicado para resolver novedades.',
  },
  {
    question: '¿En qué ciudades de Colombia prestan el servicio?',
    answer:
      'Atendemos empresas en Bogotá, Chía, Cota, Cajicá, Zipaquirá, Funza, Mosquera, Madrid y Facatativá. Cubrimos toda la Sabana de Bogotá y municipios aledaños de Cundinamarca.',
  },
  {
    question: '¿Tienen registro INVIMA? ¿Pueden atender colegios, clínicas o entidades públicas?',
    answer:
      'Sí. Contamos con notificación sanitaria INVIMA vigente y análisis microbiológicos periódicos verificables. Entregamos la documentación completa para licitaciones, auditorías y procesos de certificación en colegios, clínicas, hospitales y entidades públicas o privadas.',
  },
  {
    question: '¿Cuánto cuesta el servicio de agua purificada para empresas?',
    answer:
      'La tarifa depende del volumen mensual de consumo: a mayor cantidad de botellones, mejor precio por unidad. Cotizamos sin costo según el número de empleados o sedes. Solicita tu cotización por el formulario o por WhatsApp al +57 321 421 9294.',
  },
  {
    question: '¿Qué diferencia hay entre botellón retornable y plan de punto de uso?',
    answer:
      'El botellón retornable (18.9 L) es el formato más utilizado en empresas colombianas: recogemos el envase vacío en cada entrega y lo reemplazamos por uno lleno. Los sistemas de punto de uso se conectan directamente a la red y purifican el agua en el lugar. Trabajamos principalmente con botellones retornables certificados con registro INVIMA.',
  },
  {
    question: '¿Atienden constructoras y obras en Bogotá y Sabana de Bogotá?',
    answer:
      'Sí. Hacemos entregas en campamentos y frentes de obra bajo cronograma. Adaptamos la frecuencia y las cantidades según el avance del proyecto y la cantidad de trabajadores en sitio.',
  },
  {
    question: '¿Cómo contratar agua purificada para mi empresa?',
    answer:
      'Completa el formulario de contacto en esta página o escríbenos por WhatsApp al +57 321 421 9294. Un ejecutivo se comunica contigo en menos de 24 horas para definir cantidades, frecuencia y condiciones del convenio.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq" id="FAQ" data-header-scheme="on-light">
      <div className="container">
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Preguntas frecuentes</h2>
          <p>
            Respuestas directas sobre nuestro servicio de agua purificada para empresas en Colombia.
          </p>
        </motion.div>

        <motion.dl
          className="faq__list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {faqs.map((item, index) => (
            <div key={index} className={`faq__item${openIndex === index ? ' faq__item--open' : ''}`}>
              <dt>
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.8}
                    className={`faq__chevron${openIndex === index ? ' faq__chevron--open' : ''}`}
                  />
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.dd
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p>{item.answer}</p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
