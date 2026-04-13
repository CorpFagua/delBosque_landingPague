import { useRef, useEffect } from 'react';
import '../styles/Hero.css';
import heroBackgroundFallback from '../assets/hero-background.jpg';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  decay: number;
}

const MAX_PARTICLES = 180;

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    const spawn = (x: number, y: number, count: number) => {
      if (particlesRef.current.length >= MAX_PARTICLES) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.8 + 1.2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 65 + 45,
          life: 1,
          decay: Math.random() * 0.010 + 0.007,
        });
      }
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Capa oscura base
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(3, 8, 32, 0.92)';
      ctx.fillRect(0, 0, w, h);

      // Gradiente inferior para legibilidad del texto
      const bottomGrad = ctx.createLinearGradient(0, h * 0.55, 0, h);
      bottomGrad.addColorStop(0, 'rgba(0,0,0,0)');
      bottomGrad.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, 0, w, h);

      // destination-out: las áreas pintadas se vuelven transparentes
      ctx.globalCompositeOperation = 'destination-out';

      // Glow pequeño fijo en cursor
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0) {
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 38);
        cg.addColorStop(0, 'rgba(0,0,0,1)');
        cg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(mx, my, 38, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }

      // Huecos orgánicos de partículas
      for (const p of particlesRef.current) {
        const eased = p.life * p.life; // ease-in para cierre suave
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0,   `rgba(0,0,0,${eased * 0.98})`);
        grad.addColorStop(0.45, `rgba(0,0,0,${eased * 0.72})`);
        grad.addColorStop(0.75, `rgba(0,0,0,${eased * 0.28})`);
        grad.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';

      // Actualizar partículas
      particlesRef.current = particlesRef.current.filter(p => p.life > 0.01);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.955;
        p.vy *= 0.955;
        p.life -= p.decay;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // ── Mouse (desktop) ───────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      spawn(e.clientX - rect.left, e.clientY - rect.top, 5);
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // ── Touch (móvil) ─────────────────────────────────────────────────────
    const handleTouch = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        const x = t.clientX - rect.left;
        const y = t.clientY - rect.top;
        mouseRef.current = { x, y };
        spawn(x, y, 8);
      }
    };
    const handleTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // ── Pausa rAF cuando el tab está oculto (ahorro de CPU/batería) ────────
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    section.addEventListener('touchstart', handleTouch, { passive: true });
    section.addEventListener('touchmove', handleTouch, { passive: true });
    section.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      ro.disconnect();
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      section.removeEventListener('touchstart', handleTouch);
      section.removeEventListener('touchmove', handleTouch);
      section.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero" data-header-scheme="on-dark">
      <picture>
        <source type="image/webp" srcSet="/images/hero-background.webp" />
        <img
          src={heroBackgroundFallback}
          alt="Paisaje de montaña con fuente de agua pura"
          className="hero-background"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1097"
        />
      </picture>
      <canvas ref={canvasRef} className="hero-canvas" />
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
