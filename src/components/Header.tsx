import { useState, useEffect } from 'react';
import '../styles/Header.css';
import logoNegro from '../assets/logo-negro.png';

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Ocultar/mostrar header según dirección de scroll
      setHidden(scrollDirection === 'down' && currentScrollY > 100);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Beneficios', href: '#Benefits' },
    { label: 'Sectores', href: '#Sectors' },
    { label: 'Convenios', href: '#CorporateDeals' },
    { label: 'Productos', href: '#Products' },
  ];

  return (
    <header className={`header ${hidden ? 'hidden' : ''}`}>
      <a href="#" className="header-logo-link">
        <img 
          src={logoNegro}
          alt="delBosque - Agua Purificada"
          className="header-logo"
        />
      </a>

      <nav className="header-nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
          >
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
