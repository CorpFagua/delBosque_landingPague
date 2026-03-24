import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';
import logoNegro from '../assets/logo-negro.png';
import logoBlanco from '../assets/logo-blanco.png';

type HeaderScheme = 'on-dark' | 'on-light';

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [scheme, setScheme] = useState<HeaderScheme>('on-dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 100);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const s = (entry.target as HTMLElement).dataset.headerScheme as HeaderScheme;
            if (s) setScheme(s);
          }
        }
      },
      { rootMargin: '-1px 0px -99% 0px', threshold: 0 }
    );
    document.querySelectorAll('[data-header-scheme]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Beneficios', href: '#Benefits' },
    { label: 'Sectores', href: '#Sectors' },
    { label: 'Convenios', href: '#CorporateDeals' },
    { label: 'Productos', href: '#Products' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header ${hidden ? 'hidden' : ''} ${scheme}`}>
      <a href="#" className="header-logo-link">
        <img
          src={scheme === 'on-dark' ? logoBlanco : logoNegro}
          alt="delBosque - Agua Purificada"
          className="header-logo"
        />
      </a>

      <nav className="header-nav">
        {navItems.map((item, index) => (
          <a key={index} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#ContactForm" className="header-cta">
        Cotización
      </a>

      <button
        className={`header-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`header-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a key={index} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
        <a href="#ContactForm" className="header-mobile-cta" onClick={handleNavClick}>
          Solicitar cotización
        </a>
      </div>
    </header>
  );
};
