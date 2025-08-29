import { Mail, ExternalLink, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Brand */}
          <div className="footer-brand">
            <div className="brand-icon">
              <Sparkles />
            </div>
            <div>
              <h3 className="brand-title" style={{ fontSize: '1.25rem', margin: 0 }}>
                Simuladores FIBI
              </h3>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a 
              href="mailto:edunieva@unc.edu.ar" 
              className="footer-link"
            >
              <Mail />
              <span className="hidden sm:inline">Contacto</span>
            </a>
          </div>

          {/* Credits */}
          <div className="footer-credits">
            <p>
              Desarrollado por ⛄️ {" "} in {" "}
              <a 
                href="https://www.instagram.com/lab_ia.fono?igsh=MWg5c2IweXpxNWU5YQ%3D%3D&utm_source=qr"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Lab_ia
                <ExternalLink style={{ width: '12px', height: '12px', marginLeft: '4px' }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
