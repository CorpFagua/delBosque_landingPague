import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import subLogo from '../assets/sub-logo.png';
import whatsappIcon from '../assets/icons8-whatsapp.svg';
import '../styles/WhatsAppFloat.css';

const WHATSAPP_NUMBER = '573001234567';

const MESSAGES = [
  'Escríbenos, ¡es gratis!',
  '¿Cuántos botellones necesitas?',
  'Respuesta en menos de 1 hora',
  'Cotización sin compromiso',
  '¿Cobertura en tu zona? ¡Pregúntanos!',
];

// Patrones geométricos con tipos variados de partículas
const BURST_PATTERNS = [
  // Círculo — 6 partículas con mix de tipos
  [0, 60, 120, 180, 240, 300].map((a, i) => ({ a, dist: 78, type: ['circle', 'logo', 'triangle', 'circle', 'square', 'logo'][i] as ParticleType })),
  // Triángulo + variados
  [90, 210, 330].map((a, i) => ({ a, dist: 70, type: ['triangle', 'square', 'circle'][i] as ParticleType })),
  // Diamante + mix
  [45, 135, 225, 315].map((a, i) => ({ a, dist: 74, type: ['circle', 'triangle', 'logo', 'square'][i] as ParticleType })),
  // Cruz con variedad
  [0, 90, 180, 270].map((a, i) => ({ a, dist: 82, type: ['logo', 'square', 'circle', 'triangle'][i] as ParticleType })),
];

type ParticleType = 'logo' | 'circle' | 'triangle' | 'square';

type Particle = {
  id: number;
  x: number;
  y: number;
  type: ParticleType;
  rotation: number;
};

const ParticleIcon = ({ type, rotation }: { type: ParticleType; rotation: number }) => {
  const iconStyle = { transform: `rotate(${rotation}deg)` };

  if (type === 'logo') {
    return (
      <div className="particle-logo-wrap">
        <img
          src={subLogo}
          alt=""
          className="particle-logo"
          style={iconStyle}
          aria-hidden="true"
        />
      </div>
    );
  }

  if (type === 'circle') {
    return (
      <svg viewBox="0 0 24 24" className="particle-icon" style={iconStyle} aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.9" />
      </svg>
    );
  }

  if (type === 'triangle') {
    return (
      <svg viewBox="0 0 24 24" className="particle-icon" style={iconStyle} aria-hidden="true">
        <polygon points="12,3 22,21 2,21" fill="currentColor" opacity="0.9" />
      </svg>
    );
  }

  // square/diamond
  return (
    <svg viewBox="0 0 24 24" className="particle-icon" style={iconStyle} aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" fill="currentColor" opacity="0.9" />
    </svg>
  );
};

export const WhatsAppFloat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [patternIdx, setPatternIdx] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  /* Mostrar popup con delay inicial, luego cíclico */
  useEffect(() => {
    const initial = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (!showPopup || dismissed) return;
    const hide = setTimeout(() => {
      setShowPopup(false);
      const next = setTimeout(() => {
        setMsgIndex((i) => (i + 1) % MESSAGES.length);
        setShowPopup(true);
      }, 10000);
      return () => clearTimeout(next);
    }, 5000);
    return () => clearTimeout(hide);
  }, [showPopup, dismissed]);

  /* Burst periódico de partículas con figuras variadas */
  useEffect(() => {
    const interval = setInterval(() => {
      const pattern = BURST_PATTERNS[patternIdx % BURST_PATTERNS.length];
      const now = Date.now();
      const batch: Particle[] = pattern.map(({ a, dist, type }, i) => {
        const rad = (a * Math.PI) / 180;
        return {
          id: now + i,
          x: Math.cos(rad) * dist,
          y: Math.sin(rad) * dist,
          type,
          rotation: Math.random() * 360,
        };
      });
      setParticles((prev) => [...prev, ...batch]);
      setPatternIdx((p) => p + 1);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !batch.find((b) => b.id === p.id)));
      }, 1600);
    }, 4200);
    return () => clearInterval(interval);
  }, [patternIdx]);

  const handleOpen = () => {
    const msg = encodeURIComponent(
      'Hola, me interesa cotizar agua purificada delBosque para mi empresa. ¿Podrían enviarme información?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setDismissed(true);
  };

  return (
    <div className="wa-float" role="complementary" aria-label="Contacto por WhatsApp">
      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="wa-float__popup"
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            role="status"
            aria-live="polite"
          >
            <span>{MESSAGES[msgIndex]}</span>
            <button className="wa-float__popup-close" onClick={handleDismiss} aria-label="Cerrar">
              <X size={12} />
            </button>
            <div className="wa-float__popup-tail" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partículas animadas con figuras variadas */}
      <AnimatePresence>
        {particles.map(({ id, x, y, type, rotation }) => (
          <motion.div
            key={id}
            className="wa-float__particle-wrapper"
            initial={{ opacity: 1, scale: 0.1, x: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 0, scale: 1.3, x, y, rotate: rotation + 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ParticleIcon type={type} rotation={rotation} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Botón principal — WhatsApp con mejor visibility */}
      <motion.button
        className="wa-float__btn"
        onClick={handleOpen}
        whileHover={{ scale: 1.14 }}
        whileTap={{ scale: 0.86 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ scale: { repeat: Infinity, duration: 2.6, repeatDelay: 5, ease: 'easeInOut' } }}
        aria-label="Abrir WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt=""
          width="35"
          height="35"
          className="wa-icon"
          aria-hidden="true"
        />
      </motion.button>
    </div>
  );
};
