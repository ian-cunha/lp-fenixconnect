import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function Policy() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="position-relative">
        {/* Hero Section */}
        <section className="hero-section position-relative d-flex align-items-center" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '40vh',
          paddingTop: '80px'
        }}>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'rgba(0,0,0,0.3)',
            zIndex: 1
          }}></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center text-center text-white">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-4">Política de Privacidade</h1>
                <p className="lead fs-5 opacity-90 mb-4">
                  Saiba como protegemos e utilizamos suas informações pessoais
                </p>
                <div className="decorative-line mx-auto" style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ffa500)',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Última atualização */}
                <div className="alert alert-info border-0 rounded-4 mb-5" style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 165, 0, 0.1))',
                  border: '1px solid rgba(255, 107, 53, 0.2)'
                }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check-fill me-3" style={{ color: '#ff6b35', fontSize: '1.5rem' }}></i>
                    <div>
                      <strong>Última atualização:</strong> 20 de dezembro de 2024
                    </div>
                  </div>
                </div>

                {/* Introdução */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>1. Introdução</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      No <strong>Fenix Connect</strong>, respeitamos sua privacidade e estamos comprometidos em proteger 
                      suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, 
                      compartilhamos e protegemos suas informações.
                    </p>
                    <p className="mb-0">
                      Ao utilizar nossa plataforma, você concorda com as práticas descritas nesta política.
                    </p>
                  </div>
                </div>

                {/* Informações que coletamos */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>2. Informações que Coletamos</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <h5 className="fw-bold mb-3">Informações fornecidas por você:</h5>
                    <ul className="mb-4">
                      <li>Nome, email e informações de contato</li>
                      <li>Dados de perfil e preferências educacionais</li>
                      <li>Conteúdo que você cria ou compartilha na plataforma</li>
                      <li>Comunicações conosco (suporte, feedback, etc.)</li>
                    </ul>
                    
                    <h5 className="fw-bold mb-3">Informações coletadas automaticamente:</h5>
                    <ul className="mb-0">
                      <li>Dados de uso da plataforma (páginas visitadas, tempo de uso)</li>
                      <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
                      <li>Dados de localização (se você permitir)</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </div>

                {/* Como usamos suas informações */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>3. Como Usamos suas Informações</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex">
                          <i className="bi bi-gear-fill me-3 mt-1" style={{ color: '#ff6b35' }}></i>
                          <div>
                            <h6 className="fw-bold mb-2">Funcionamento da Plataforma</h6>
                            <p className="small mb-0">Fornecer, manter e melhorar nossos serviços educacionais</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <i className="bi bi-person-check-fill me-3 mt-1" style={{ color: '#ff6b35' }}></i>
                          <div>
                            <h6 className="fw-bold mb-2">Personalização</h6>
                            <p className="small mb-0">Adaptar o conteúdo às suas necessidades e preferências</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <i className="bi bi-chat-dots-fill me-3 mt-1" style={{ color: '#ff6b35' }}></i>
                          <div>
                            <h6 className="fw-bold mb-2">Comunicação</h6>
                            <p className="small mb-0">Enviar atualizações, suporte e informações importantes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex">
                          <i className="bi bi-shield-check-fill me-3 mt-1" style={{ color: '#ff6b35' }}></i>
                          <div>
                            <h6 className="fw-bold mb-2">Segurança</h6>
                            <p className="small mb-0">Proteger contra fraudes e atividades maliciosas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compartilhamento de informações */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>4. Compartilhamento de Informações</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <div className="alert alert-success border-0 rounded-3 mb-4" style={{
                      background: 'rgba(40, 167, 69, 0.1)'
                    }}>
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#28a745' }}></i>
                      <strong>Compromisso:</strong> Não vendemos, alugamos ou comercializamos suas informações pessoais.
                    </div>
                    
                    <p className="mb-3">Podemos compartilhar suas informações apenas nos seguintes casos:</p>
                    <ul className="mb-0">
                      <li><strong>Com seu consentimento:</strong> Quando você autorizar expressamente</li>
                      <li><strong>Prestadores de serviços:</strong> Parceiros que nos ajudam a operar a plataforma</li>
                      <li><strong>Exigências legais:</strong> Quando requerido por lei ou autoridades competentes</li>
                      <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                    </ul>
                  </div>
                </div>

                {/* Segurança dos dados */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>5. Segurança dos Dados</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                    </p>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <i className="bi bi-lock-fill me-2" style={{ color: '#28a745' }}></i>
                          <small>Criptografia de dados</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <i className="bi bi-shield-lock-fill me-2" style={{ color: '#28a745' }}></i>
                          <small>Controles de acesso rigorosos</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <i className="bi bi-eye-slash-fill me-2" style={{ color: '#28a745' }}></i>
                          <small>Monitoramento contínuo</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <i className="bi bi-server me-2" style={{ color: '#28a745' }}></i>
                          <small>Servidores seguros</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seus direitos */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>6. Seus Direitos</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">De acordo com a LGPD, você tem os seguintes direitos sobre seus dados:</p>
                    
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.1)' }}>
                          <i className="bi bi-eye-fill mb-2 d-block" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                          <h6 className="fw-bold mb-1">Acesso</h6>
                          <small>Conhecer quais dados temos sobre você</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.1)' }}>
                          <i className="bi bi-pencil-fill mb-2 d-block" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                          <h6 className="fw-bold mb-1">Correção</h6>
                          <small>Atualizar informações incorretas</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.1)' }}>
                          <i className="bi bi-trash-fill mb-2 d-block" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                          <h6 className="fw-bold mb-1">Exclusão</h6>
                          <small>Solicitar a remoção dos seus dados</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>7. Cookies e Tecnologias Similares</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Utilizamos cookies para melhorar sua experiência na plataforma. Os cookies nos ajudam a:
                    </p>
                    <ul className="mb-3">
                      <li>Lembrar suas preferências e configurações</li>
                      <li>Analisar o desempenho da plataforma</li>
                      <li>Personalizar conteúdo e funcionalidades</li>
                      <li>Fornecer recursos de segurança</li>
                    </ul>
                    <p className="mb-0">
                      Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                    </p>
                  </div>
                </div>

                {/* Alterações na política */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>8. Alterações nesta Política</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em 
                      nossos serviços ou requisitos legais.
                    </p>
                    <p className="mb-0">
                      Notificaremos você sobre alterações significativas através da plataforma ou por email. 
                      Recomendamos que revise esta política regularmente.
                    </p>
                  </div>
                </div>

                {/* Contato */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>9. Contato</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 165, 0, 0.1))',
                    border: '1px solid rgba(255, 107, 53, 0.2)'
                  }}>
                    <p className="mb-3">
                      Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                      entre em contato conosco:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-2">
                          <i className="bi bi-envelope-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Email:</strong> contato@fenixconnect.com.br
                        </p>
                        <p className="mb-2">
                          <i className="bi bi-telephone-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Telefone:</strong> (11) 9999-9999
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-2">
                          <i className="bi bi-clock-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Horário:</strong> Segunda a Sexta, 9h às 18h
                        </p>
                        <p className="mb-0">
                          <i className="bi bi-reply-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Resposta:</strong> Em até 48 horas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .card {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        
        .decorative-line {
          transition: all 0.3s ease;
        }
        
        .hero-section:hover .decorative-line {
          width: 150px;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 30vh;
            padding-top: 60px;
          }
          
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default Policy