import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg shadow-lg" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 107, 53, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/" style={{
          transition: 'all 0.3s ease'
        }}>
          <img 
            src={logo} 
            alt="Logo" 
            width="45" 
            height="45"
            className="me-2"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(255, 107, 53, 0.3))',
              transition: 'transform 0.3s ease'
            }}
          />
          <span className="fw-bold fs-5" style={{ 
            color: '#2c3e50',
            letterSpacing: '0.5px'
          }}>
            Fenix Connect
          </span>
        </a>
        
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarScroll" 
          aria-controls="navbarScroll" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{
            background: 'linear-gradient(135deg, #ff6b35, #ffa500)',
            borderRadius: '8px',
            padding: '8px 12px'
          }}
        >
          <i className="bi bi-list text-white fs-5"></i>
        </button>
        
        <div className="collapse navbar-collapse fw-semibold" id="navbarScroll">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item mx-2">
              <a 
                className="nav-link px-3 py-2 rounded-pill position-relative nav-link-modern" 
                aria-current="page" 
                href="/"
                style={{
                  color: '#2c3e50',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-house-fill me-2"></i>
                Início
              </a>
            </li>
            <li className="nav-item mx-2">
              <a 
                className="nav-link px-3 py-2 rounded-pill position-relative nav-link-modern" 
                href="/contato"
                style={{
                  color: '#2c3e50',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                Contato
              </a>
            </li>
            <li className="nav-item mx-2">
              <a 
                className="nav-link px-3 py-2 rounded-pill position-relative nav-link-modern" 
                href="/sobre-nos"
                style={{
                  color: '#2c3e50',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-people-fill me-2"></i>
                Sobre nós
              </a>
            </li>
            <li className="nav-item dropdown mx-2">
              <a 
                className="nav-link dropdown-toggle px-3 py-2 rounded-pill position-relative nav-link-modern" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{
                  color: '#2c3e50',
                  transition: 'all 0.3s ease',
                  fontWeight: '600'
                }}
              >
                <i className="bi bi-file-text-fill me-2"></i>
                Documentos
              </a>
              <ul className="dropdown-menu border-0 shadow-lg mt-2" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '15px',
                padding: '10px 0'
              }}>
                <li>
                  <a 
                    className="dropdown-item px-4 py-2 dropdown-item-modern" 
                    href="/termos"
                    style={{
                      color: '#2c3e50',
                      transition: 'all 0.3s ease',
                      fontWeight: '500'
                    }}
                  >
                    <i className="bi bi-shield-check me-2 text-primary"></i>
                    Termos de serviço
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item px-4 py-2 dropdown-item-modern" 
                    href="/politica"
                    style={{
                      color: '#2c3e50',
                      transition: 'all 0.3s ease',
                      fontWeight: '500'
                    }}
                  >
                    <i className="bi bi-lock-fill me-2 text-success"></i>
                    Política de privacidade
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <a 
              href='https://play.google.com/store/apps/details?id=br.com.fenixconnect' 
              target='_blank' 
              rel="noreferrer" 
              className="btn btn-download d-flex align-items-center px-4 py-2 rounded-pill shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)',
                border: 'none',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px'
              }}
            >
              <i className="bi bi-google-play me-2 fs-5"></i> 
              <span className="d-none d-sm-inline">Baixar App</span>
              <span className="d-inline d-sm-none">App</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .navbar-brand:hover img {
            transform: scale(1.05) rotate(5deg);
          }
          
          .navbar-brand:hover span {
            color: #ff6b35 !important;
          }
          
          .nav-link-modern:hover {
            background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 165, 0, 0.1)) !important;
            color: #ff6b35 !important;
            transform: translateY(-2px);
          }
          
          .nav-link-modern::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background: linear-gradient(90deg, #ff6b35, #ffa500);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          
          .nav-link-modern:hover::after {
            width: 80%;
          }
          
          .dropdown-item-modern:hover {
            background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 165, 0, 0.1)) !important;
            color: #ff6b35 !important;
            transform: translateX(5px);
            border-radius: 8px;
          }
          
          .btn-download:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4) !important;
          }
          
          .btn-download:active {
            transform: translateY(-1px) scale(1.02);
          }
          
          .navbar-toggler:hover {
            transform: scale(1.05);
          }
          
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: rgba(255, 255, 255, 0.98);
              backdrop-filter: blur(20px);
              border-radius: 15px;
              margin-top: 15px;
              padding: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .nav-link-modern {
              margin: 5px 0;
              text-align: center;
            }
            
            .btn-download {
              margin-top: 15px;
              justify-content: center;
            }
          }
        `}
      </style>
    </nav>
  )
}

export default NavBar
