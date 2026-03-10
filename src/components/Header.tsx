import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Header.css';
import logoNegro from '../assets/logo-negro.png';
import logoBlanco from '../assets/logo-blanco.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Activar modo light mientras estés en el primer 60vh (Hero)
      setIsLightMode(window.scrollY < window.innerHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Beneficios', href: '#Benefits' },
    { label: 'Sectores', href: '#Sectors' },
    { label: 'Convenios', href: '#CorporateDeals' },
    { label: 'Productos', href: '#Products' },
  ];

  return (
    <header className={`header ${isLightMode ? 'header--light' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <motion.a
              href="#"
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={isLightMode ? logoBlanco : logoNegro}
                alt="delBosque - Agua Purificada Certificada INVIMA Cota Cundinamarca"
                className="logo__image"
              />
            </motion.a>
          </div>

          <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="nav-link"
                whileHover={{ color: '#0052CC' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="header__cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const target = document.getElementById('ContactForm');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Cotización
          </motion.button>

          <button
            className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
