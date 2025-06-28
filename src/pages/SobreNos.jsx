import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Robson from "../assets/images/integrantes/robson.jpg";
import Ian from "../assets/images/integrantes/ian.jpg";
import Cicero from "../assets/images/integrantes/cicero.jpeg";
import Anthony from "../assets/images/integrantes/anthony.png";
import Equipe1 from "../assets/images/equipe/equipe-1.jpg";
import Equipe_Reportagem from "../assets/images/equipe/equipe-reportagem.jpg";
import Equipe4 from "../assets/images/equipe/Equipe-4.jpg";
import Equipe5 from "../assets/images/equipe/Equipe-5.jpg";
import ReactPlayer from "react-player/youtube";

const SobreNos = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="position-relative overflow-hidden">
        {/* Hero Section */}
        <section className="hero-section position-relative d-flex align-items-center" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '60vh',
          paddingTop: '80px'
        }}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'rgba(0,0,0,0.3)',
            zIndex: 1
          }}></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center text-center text-white">
              <div className="col-12">
                <h1 className="display-3 fw-bold mb-4">Nossa Equipe</h1>
                <p className="lead fs-4 opacity-90">
                  Conheça as mentes criativas por trás da Fenix Connect
                </p>
                <div className="decorative-line mx-auto mt-4" style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ffa500)',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-5" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <div className="row g-4">
              {/* Cicero */}
              <div className="col-lg-3 col-md-6">
                <div className="team-card h-100 p-4 text-center" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}>
                  <div className="position-relative mb-4">
                    <img 
                      src={Cicero} 
                      width="140" 
                      height="140" 
                      className="rounded-circle shadow-sm" 
                      style={{ 
                        border: '4px solid #ff6b35',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0" style={{
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #ff6b35, #ffa500)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-star-fill text-white small"></i>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-2">Cicero Alves</h3>
                  <p className="text-muted mb-3 small fw-semibold">CEO & IDEALIZADOR</p>
                  <div className="social-links d-flex justify-content-center gap-2">
                    <a href="https://www.instagram.com/ciceroalves_oficial/" target="_blank" rel="noreferrer" 
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cicero-alves-de-lima-junior-9265b3188/" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Robson */}
              <div className="col-lg-3 col-md-6">
                <div className="team-card h-100 p-4 text-center" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}>
                  <div className="position-relative mb-4">
                    <img 
                      src={Robson} 
                      width="140" 
                      height="140" 
                      className="rounded-circle shadow-sm" 
                      style={{ 
                        border: '4px solid #ff6b35',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0" style={{
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #28a745, #20c997)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-trophy-fill text-white small"></i>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-2">Robson Thiago</h3>
                  <p className="text-muted mb-3 small fw-semibold">LEADER & FRONTEND & NEGÓCIOS</p>
                  <div className="social-links d-flex justify-content-center gap-2">
                    <a href="https://www.instagram.com/_r0b14/" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/r0b14" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/r0b14/" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Ian */}
              <div className="col-lg-3 col-md-6">
                <div className="team-card h-100 p-4 text-center" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}>
                  <div className="position-relative mb-4">
                    <img 
                      src={Ian} 
                      width="140" 
                      height="140" 
                      className="rounded-circle shadow-sm" 
                      style={{ 
                        border: '4px solid #ff6b35',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0" style={{
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #6f42c1, #e83e8c)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-code-slash text-white small"></i>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-2">Ian Cunha</h3>
                  <p className="text-muted mb-3 small fw-semibold">HEADER DEV & PROGRAMADOR</p>
                  <div className="social-links d-flex justify-content-center gap-2">
                    <a href="https://www.instagram.com/ian.pictures/" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/ian-cunha" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/iancunha/" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Anthony */}
              <div className="col-lg-3 col-md-6">
                <div className="team-card h-100 p-4 text-center" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}>
                  <div className="position-relative mb-4">
                    <img 
                      src={Anthony} 
                      width="140" 
                      height="140" 
                      className="rounded-circle shadow-sm" 
                      style={{ 
                        border: '4px solid #ff6b35',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0" style={{
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #17a2b8, #6610f2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-palette-fill text-white small"></i>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-2">Anthony Silva</h3>
                  <p className="text-muted mb-3 small fw-semibold">FRONTEND DEVELOPER</p>
                  <div className="social-links d-flex justify-content-center gap-2">
                    <a href="https://www.instagram.com/putx_anthony?igsh=NXZoNWw3b3hsYTh2" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/Anthonylucass" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-lucas-025649221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"
                       className="social-btn d-flex align-items-center justify-content-center">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">Quem Somos</h2>
              <div className="decorative-line mx-auto" style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #ff6b35, #ffa500)',
                borderRadius: '2px'
              }}></div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <div className="content-card p-4" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  color: 'white'
                }}>
                  <h3 className="h2 fw-bold mb-4">
                    Transformar vidas é nossa prioridade.
                    <span className="d-block text-warning mt-2 h4">
                      Conectando você ao conhecimento que transforma sonhos em realidade.
                    </span>
                  </h3>
                  <p className="lead mb-0 opacity-90">
                    Nosso aplicativo de educação oferece recursos inovadores e acessíveis, permitindo que cada usuário alcance seu potencial máximo. Acreditamos que a educação é a chave para a mudança, e estamos comprometidos em fornecer ferramentas que empoderam e inspiram. Junte-se a nós e descubra como podemos ajudar a transformar sua vida através do aprendizado contínuo e significativo.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="image-container position-relative">
                  <img 
                    src={Equipe_Reportagem} 
                    alt="Equipe Responsável" 
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ 
                      border: '5px solid white',
                      transform: 'rotate(-2deg)'
                    }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{
                    background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.1), rgba(102, 126, 234, 0.1))',
                    zIndex: -1,
                    transform: 'translate(10px, 10px)'
                  }}></div>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                <div className="content-card p-4" style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)',
                  borderRadius: '20px',
                  color: 'white'
                }}>
                  <h3 className="h2 fw-bold mb-4">
                    Focada em resultados.
                    <span className="d-block text-dark mt-2 h4">
                      Inove e Transforme.
                    </span>
                  </h3>
                  <p className="lead mb-0 opacity-90">
                    Nosso compromisso e dedicação resultaram em uma plataforma inovadora que impacta positivamente a vida de nossos usuários. Prova de que grandes mudanças podem surgir de pequenos começos. Acreditamos no poder da educação para transformar realidades e estamos aqui para fazer a diferença.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="video-container position-relative rounded-4 overflow-hidden shadow-lg">
                  <ReactPlayer 
                    url="https://www.youtube.com/embed/XP3dbk8BEAE?si=8NElKibCoxvn4V1f" 
                    width="100%" 
                    height="300px"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="content-card p-4" style={{
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  borderRadius: '20px',
                  color: 'white'
                }}>
                  <h3 className="h2 fw-bold mb-4">
                    Equipe inclusiva e diversa.
                    <span className="d-block text-warning mt-2 h4">
                      Unidos pela força da pluralidade.
                    </span>
                  </h3>
                  <p className="lead mb-0 opacity-90">
                    Somos uma equipe inclusiva que não faz segregação de pessoas por cor ou sexo. Acreditamos que a diversidade é um pilar fundamental para o crescimento e inovação de nosso projeto. Cada voz e perspectiva única contribui para soluções mais criativas e eficazes. Juntos, estamos comprometidos em construir uma plataforma que reflete e serve a pluralidade da sociedade brasileira.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="carousel-container position-relative">
                  <div id="carouselExampleAutoplaying" className="carousel slide rounded-4 shadow-lg" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-4">
                      <div className="carousel-item active">
                        <img src={Equipe1} className="d-block w-100 carousel-img" alt="Imagem do instituto." />
                      </div>
                      <div className="carousel-item">
                        <img src={Equipe4} className="d-block w-100 carousel-img" alt="Imagem do instituto." />
                      </div>
                      <div className="carousel-item">
                        <img src={Equipe5} className="d-block w-100 carousel-img" alt="Imagem do instituto." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <div className="carousel-btn">
                        <i className="bi bi-chevron-left"></i>
                      </div>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <div className="carousel-btn">
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-5" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon mb-3">
                    <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#ffd700' }}></i>
                  </div>
                  <h3 className="h2 fw-bold mb-2">4</h3>
                  <p className="mb-0 opacity-90">Membros da Equipe</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon mb-3">
                    <i className="bi bi-lightbulb-fill" style={{ fontSize: '3rem', color: '#ffd700' }}></i>
                  </div>
                  <h3 className="h2 fw-bold mb-2">100+</h3>
                  <p className="mb-0 opacity-90">Ideias Inovadoras</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon mb-3">
                    <i className="bi bi-heart-fill" style={{ fontSize: '3rem', color: '#ffd700' }}></i>
                  </div>
                  <h3 className="h2 fw-bold mb-2">∞</h3>
                  <p className="mb-0 opacity-90">Paixão pelo Projeto</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon mb-3">
                    <i className="bi bi-trophy-fill" style={{ fontSize: '3rem', color: '#ffd700' }}></i>
                  </div>
                  <h3 className="h2 fw-bold mb-2">1</h3>
                  <p className="mb-0 opacity-90">Objetivo: Transformar Vidas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <style>
          {`
            .team-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
            }
            
            .team-card:hover img {
              transform: scale(1.05);
            }
            
            .social-btn {
              width: 35px;
              height: 35px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ff6b35, #ffa500);
              color: white;
              text-decoration: none;
              transition: all 0.3s ease;
              border: none;
            }
            
            .social-btn:hover {
              transform: translateY(-3px) scale(1.1);
              box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
              color: white;
            }
            
            .content-card {
              transition: all 0.3s ease;
            }
            
            .content-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            }
            
            .carousel-img {
              height: 250px;
              object-fit: cover;
            }
            
            .carousel-btn {
              width: 40px;
              height: 40px;
              background: rgba(255, 107, 53, 0.9);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 1.2rem;
            }
            
            .carousel-control-prev:hover .carousel-btn,
            .carousel-control-next:hover .carousel-btn {
              background: rgba(255, 107, 53, 1);
              transform: scale(1.1);
            }
            
            .stat-item {
              transition: all 0.3s ease;
            }
            
            .stat-item:hover {
              transform: translateY(-5px);
            }
            
            .stat-item:hover .stat-icon i {
              transform: scale(1.1);
              transition: transform 0.3s ease;
            }
          `}
        </style>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SobreNos;
