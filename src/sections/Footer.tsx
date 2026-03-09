import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4>delbosque</h4>
            <p>Agua purificada de calidad premium con certificaciones INVIMA para tu confianza.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="WhatsApp">
                💬
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#Benefits">Acerca de nosotros</a>
              </li>
              <li>
                <a href="#Process">Nuestro proceso</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacto</a>
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
              Bogotá, Colombia
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
