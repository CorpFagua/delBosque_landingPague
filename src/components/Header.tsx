import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import logoNegro from '../assets/logo-negro.png';
import logoBlanco from '../assets/logo-blanco.png';

type HeaderScheme = 'on-dark' | 'on-light';

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [scheme, setScheme] = useState<HeaderScheme>('on-dark');
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

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Beneficios', href: '#Benefits' },
    { label: 'Sectores', href: '#Sectors' },
    { label: 'Convenios', href: '#CorporateDeals' },
    { label: 'Productos', href: '#Products' },
  ];

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
    </header>
  );
};
