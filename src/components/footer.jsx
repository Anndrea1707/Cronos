import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-heading">Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a proporcionar los mejores productos y
            servicios. Nos esforzamos por brindar una excelente experiencia al
            cliente.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-heading">Enlaces Rápidos</h2>
          <div className="footer-links">
            <a href="/ayuda">Términos y Condiciones</a>
            <a href="/ayuda">Política de Privacidad</a>
            <a href="/contacto">Contacto</a>
            <a href="/ayuda">Ayuda</a>
          </div>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-heading">Contacto</h2>
          <p>Dirección: Calle 123 #23-67, Bucaramanga, Colombia</p>
          <p>Teléfono: +57 313 458 2973</p>
          <p>Email: contactoMerca@mercaemprende.com</p>
        </div>
        <div className="footer-section social">
          <h2 className="footer-heading">Síguenos</h2>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
