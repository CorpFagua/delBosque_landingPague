import '../styles/Hero.css';
import heroBackground from '../assets/hero-background.jpg';
import botellonDuo from '../assets/botellonesduo.png'; // Asegúrate de que esta imagen exista

export const Hero = () => {
  return (
    <section className="hero">
      <img 
        src={heroBackground}
        alt="Paisaje de montaña con aire puro"
        className="hero-background"
      />
      <div className="hero-content">
        <h1 className="hero-title">Agua purificada para tu empresa</h1>
        <p className="hero-subtitle">
          Botellones de 20L con entrega programada a colegios, clínicas, oficinas y obras en Bogotá y Sabana de Bogotá. Facturación empresarial y gestor dedicado.
        </p>
        <a href="#ContactForm" className="hero-cta">
          Solicitar Cotización
        </a>
      </div>
      <div className="hero-visual">
        <img 
          src={botellonDuo} 
          alt="Botellones de agua delBosque" 
          className="hero-bottle-3d"
        />
      </div>
    </section>
  );
};
