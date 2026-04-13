import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-header-scheme="on-dark">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4>delbosque</h4>
            <p>Agua purificada de calidad premium con registro INVIMA para tu confianza.</p>
            <div className="footer__socials">
              <a href="https://www.facebook.com/share/1KvWjZTK1P/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/aguadelbosque1?igsh=OGpoZHJvMnp3b29u" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@delbosque.distrib?_r=1&_t=ZS-95SmG1yFVYq" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok size={18} />
              </a>
              <a href="https://wa.me/573214219294" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
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
            <h4>Contacto</h4>
            <p>
              <strong>Email:</strong>
              <br />
              distribuidoradelbosque2@gmail.com 
            </p>
            <p>
              <strong>WhatsApp:</strong>
              <br />
              +57 321 421 9294
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
            Distribuidora de agua purificada con registro INVIMA
          </p>
        </div>
      </div>
    </footer>
  );
};
