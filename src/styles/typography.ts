/**
 * Sistema tipográfico profesional para delbosque
 * Fuentes recomendadas para credibilidad institucional
 */

export const typography = {
  // Fuentes
  fonts: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
    secondary:
      "'Merriweather', 'Times New Roman', serif",
    mono: "'Fira Code', 'Courier New', monospace",
  },

  // Estilos
  styles: {
    // Headings
    h1: {
      fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontSize: 'clamp(2rem, 4.2vw, 3.1rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(1.45rem, 2.6vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
      fontWeight: 600,
      lineHeight: 1.4,
    },

    // Body text
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    bodySmall: {
      fontSize: '0.95rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },

    // Special
    caption: {
      fontSize: '0.85rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.05em',
    },
  },
}
