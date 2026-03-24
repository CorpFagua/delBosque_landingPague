import '../styles/Hero.css';
import heroBackground from '../assets/hero-background.jpg';

export const Hero = () => {
  return (
    <section className="hero" data-header-scheme="on-dark">
      <img
        src={heroBackground}
        alt="Paisaje de montaña con aire puro"
        className="hero-background"
      />
      <div className="hero-overlay" />
      <div className="hero-center">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Registro INVIMA · Bogotá y Sabana de Bogotá
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line1">Agua purificada,</span>
            <span className="hero-title-line2">para tu empresa</span>
          </h1>
          <p className="hero-subtitle">
            Botellones con entrega programada a colegios, clínicas,
            oficinas y obras. Facturación empresarial y gestor dedicado.
          </p>
          <a href="#ContactForm" className="hero-cta">
            Solicitar Cotización <span className="cta-arrow">→</span>
          </a>
          <div className="hero-trust">
            <span className="trust-chip">Entrega programada</span>
            <span className="trust-chip">Factura electrónica</span>
            <span className="trust-chip">+200 empresas activas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
