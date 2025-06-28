import logo from "../assets/white-logo.svg";
import fenix from "../assets/images/institutoFenix-Logo.png";

const Footer = () => {
  return (
    <footer className="position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      borderTop: '3px solid #ff6b35'
    }}>
      {/* Decorative shapes */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <div className="position-absolute" style={{
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 107, 53, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 107, 53, 0.05)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>
      </div>

      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row g-4 justify-content-center">
          {/* Logo Section */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                <a href="/" className="hover-scale">
                  <img 
                    src={logo} 
                    className="logoFooter" 
                    style={{ 
                      maxHeight: '55px',
                      filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))',
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </a>
                <div className="vr" style={{ 
                  height: '50px', 
                  opacity: '0.3',
                  borderColor: '#ff6b35'
                }}></div>
                <a href="https://fenixpe.org/" target="_blank" rel="noreferrer" className="hover-scale">
                  <img 
                    src={fenix} 
                    className="logoFooter" 
                    style={{ 
                      maxHeight: '45px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </a>
              </div>
            </div>
            <p className="text-light opacity-75 small mb-0">
              Conectando ideias, transformando o futuro.
            </p>
          </div>

          {/* Contatos Section */}
          <div className="col-lg-4 col-md-6">
            <div className="text-center text-md-start">
              <h5 className="text-light fw-bold mb-4 position-relative">
                <i className="bi bi-telephone-fill me-2" style={{ color: '#ff6b35' }}></i>
                Contatos
                <div className="position-absolute bottom-0 start-0" style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #ff6b35, transparent)',
                  marginTop: '8px'
                }}></div>
              </h5>
              <div className="contact-item mb-3 p-3 rounded" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <i className="bi bi-phone me-2" style={{ color: '#ff6b35' }}></i>
                <span className="text-light">+55 (81) 98608-9100</span>
              </div>
              <div className="contact-item p-3 rounded" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <i className="bi bi-envelope me-2" style={{ color: '#ff6b35' }}></i>
                <a
                  className="text-decoration-none text-light"
                  href="mailto:contato@fenixconnect.com.br"
                  target="_blank" 
                  rel="noreferrer"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  contato@fenixconnect.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociais Section */}
          <div className="col-lg-4 col-md-12">
            <div className="text-center">
              <h5 className="text-light fw-bold mb-4 position-relative">
                <i className="bi bi-share-fill me-2" style={{ color: '#ff6b35' }}></i>
                Redes Sociais
                <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #ff6b35, transparent)',
                  marginTop: '8px'
                }}></div>
              </h5>
              <div className="d-flex justify-content-center gap-3">
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(131, 58, 180, 0.3)'
                  }}
                >
                  <i className="bi bi-instagram fs-4 text-white"></i>
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #0077b5, #0099cc)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
                  }}
                >
                  <i className="bi bi-linkedin fs-4 text-white"></i>
                </a>
                <a 
                  href="https://x.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1da1f2, #0d8bd9)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
                  }}
                >
                  <i className="bi bi-twitter-x fs-4 text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary border-opacity-25 py-3 position-relative" style={{ zIndex: 2 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-light opacity-75 mb-0 small">
                &copy; 2024 Fenix Connect. Todos os direitos reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <span className="text-light opacity-50 small">
                Desenvolvido com <i className="bi bi-heart-fill" style={{ color: '#ff6b35' }}></i> pela equipe Fenix
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .contact-item:hover {
          background: rgba(255, 107, 53, 0.1) !important;
          border-color: rgba(255, 107, 53, 0.4) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
        }
        
        .social-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4) !important;
        }
        
        .contact-item a:hover {
          color: #ff6b35 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
