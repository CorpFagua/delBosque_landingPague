import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-header-scheme="on-dark">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4>delbosque</h4>
            <p>Agua purificada de calidad premium con certificaciones INVIMA para tu confianza.</p>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#Benefits">Beneficios</a>
              </li>
              <li>
                <a href="#Process">Nuestro proceso</a>
              </li>
              <li>
                <a href="#Products">Productos</a>
              </li>
              <li>
                <a href="#ContactForm">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
              <li>
                <a href="#">Política de datos</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contacto</h4>
            <p>
              <strong>Email:</strong>
              <br />
              info@delbosque.com.co
            </p>
            <p>
              <strong>WhatsApp:</strong>
              <br />
              +57 300 123 4567
            </p>
            <p>
              <strong>Ubicación:</strong>
              <br />
              Sabana de Bogotá y Bogotá
            </p>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            &copy; {currentYear} delbosque. Todos los derechos reservados.
            <br />
            Distribuidora de agua purificada certificada INVIMA
          </p>
        </div>
      </div>
    </footer>
  );
};
