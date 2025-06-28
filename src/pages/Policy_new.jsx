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
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
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
                  Sua privacidade é fundamental para nós. Conheça como protegemos seus dados.
                </p>
                <div className="decorative-line mx-auto" style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.7))',
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
                <div className="alert alert-success border-0 rounded-4 mb-5" style={{
                  background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))',
                  border: '1px solid rgba(40, 167, 69, 0.2)'
                }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check-fill me-3" style={{ color: '#28a745', fontSize: '1.5rem' }}></i>
                    <div>
                      <h6 className="mb-1 fw-bold">Última atualização</h6>
                      <p className="mb-0 small">28 de junho de 2025</p>
                    </div>
                  </div>
                </div>

                {/* Policy Content */}
                <div className="policy-content">
                  {/* Seção 1 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>1</span>
                      Compromisso com sua Privacidade
                    </h2>
                    <p className="lead mb-3">
                      A <strong>Fenix Connect</strong> respeita e valoriza sua privacidade. Esta política explica como coletamos, 
                      usamos, protegemos e compartilhamos suas informações pessoais quando você usa nossa plataforma educacional.
                    </p>
                    <div className="alert alert-info border-0 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                      <i className="bi bi-info-circle me-2"></i>
                      Coletamos apenas as informações necessárias para fornecer nossos serviços educacionais de qualidade.
                    </div>
                  </div>

                  {/* Seção 2 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>2</span>
                      Informações que Coletamos
                    </h2>
                    <p className="lead mb-3">
                      Coletamos informações para melhorar sua experiência educacional:
                    </p>
                    
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="info-card p-3 rounded-3 h-100" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <h5 className="fw-bold mb-3">
                            <i className="bi bi-person-circle me-2" style={{ color: '#28a745' }}></i>
                            Informações Pessoais
                          </h5>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-success"></i>Nome e sobrenome</li>
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-success"></i>Endereço de e-mail</li>
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-success"></i>Número de telefone (opcional)</li>
                            <li className="mb-0"><i className="bi bi-check2 me-2 text-success"></i>Data de nascimento</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-card p-3 rounded-3 h-100" style={{ background: 'rgba(32, 201, 151, 0.1)' }}>
                          <h5 className="fw-bold mb-3">
                            <i className="bi bi-graph-up me-2" style={{ color: '#20c997' }}></i>
                            Dados de Uso
                          </h5>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-info"></i>Progresso nos cursos</li>
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-info"></i>Tempo de estudo</li>
                            <li className="mb-2"><i className="bi bi-check2 me-2 text-info"></i>Preferências de aprendizado</li>
                            <li className="mb-0"><i className="bi bi-check2 me-2 text-info"></i>Interações na plataforma</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 3 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>3</span>
                      Como Usamos suas Informações
                    </h2>
                    <p className="lead mb-4">
                      Utilizamos suas informações exclusivamente para melhorar sua experiência educacional:
                    </p>
                    
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                          <i className="bi bi-mortarboard-fill mb-2" style={{ fontSize: '2rem', color: '#28a745' }}></i>
                          <h6 className="fw-bold">Personalização</h6>
                          <small>Adaptar conteúdo às suas necessidades</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(32, 201, 151, 0.1)' }}>
                          <i className="bi bi-graph-up-arrow mb-2" style={{ fontSize: '2rem', color: '#20c997' }}></i>
                          <h6 className="fw-bold">Acompanhamento</h6>
                          <small>Monitorar seu progresso</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                          <i className="bi bi-envelope-heart mb-2" style={{ fontSize: '2rem', color: '#0dcaf0' }}></i>
                          <h6 className="fw-bold">Comunicação</h6>
                          <small>Enviar atualizações importantes</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 4 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>4</span>
                      Proteção de Dados
                    </h2>
                    <p className="lead mb-4">
                      Implementamos medidas de segurança robustas para proteger suas informações:
                    </p>
                    
                    <div className="security-features">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(108, 117, 125, 0.1)' }}>
                            <i className="bi bi-shield-lock-fill me-3" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                            <div>
                              <h6 className="fw-bold mb-1">Criptografia SSL</h6>
                              <small>Todos os dados são transmitidos com segurança</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(108, 117, 125, 0.1)' }}>
                            <i className="bi bi-server me-3" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                            <div>
                              <h6 className="fw-bold mb-1">Servidores Seguros</h6>
                              <small>Infraestrutura protegida e monitorada</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(108, 117, 125, 0.1)' }}>
                            <i className="bi bi-key-fill me-3" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                            <div>
                              <h6 className="fw-bold mb-1">Acesso Restrito</h6>
                              <small>Apenas pessoal autorizado acessa os dados</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'rgba(108, 117, 125, 0.1)' }}>
                            <i className="bi bi-clock-history me-3" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                            <div>
                              <h6 className="fw-bold mb-1">Backups Regulares</h6>
                              <small>Proteção contra perda de dados</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 5 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>5</span>
                      Seus Direitos
                    </h2>
                    <p className="lead mb-4">
                      Você tem controle total sobre seus dados pessoais:
                    </p>
                    
                    <div className="rights-grid">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="right-item p-3 rounded-3 h-100" style={{ background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))' }}>
                            <div className="d-flex align-items-start">
                              <i className="bi bi-eye-fill me-3 mt-1" style={{ color: '#28a745', fontSize: '1.5rem' }}></i>
                              <div>
                                <h6 className="fw-bold mb-2">Direito de Acesso</h6>
                                <p className="mb-0 small">Você pode solicitar uma cópia de todos os dados que temos sobre você.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-item p-3 rounded-3 h-100" style={{ background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))' }}>
                            <div className="d-flex align-items-start">
                              <i className="bi bi-pencil-square me-3 mt-1" style={{ color: '#20c997', fontSize: '1.5rem' }}></i>
                              <div>
                                <h6 className="fw-bold mb-2">Direito de Correção</h6>
                                <p className="mb-0 small">Você pode corrigir informações incorretas ou desatualizadas.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-item p-3 rounded-3 h-100" style={{ background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))' }}>
                            <div className="d-flex align-items-start">
                              <i className="bi bi-trash3-fill me-3 mt-1" style={{ color: '#dc3545', fontSize: '1.5rem' }}></i>
                              <div>
                                <h6 className="fw-bold mb-2">Direito de Exclusão</h6>
                                <p className="mb-0 small">Você pode solicitar a exclusão de seus dados pessoais.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-item p-3 rounded-3 h-100" style={{ background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))' }}>
                            <div className="d-flex align-items-start">
                              <i className="bi bi-download me-3 mt-1" style={{ color: '#0d6efd', fontSize: '1.5rem' }}></i>
                              <div>
                                <h6 className="fw-bold mb-2">Portabilidade</h6>
                                <p className="mb-0 small">Você pode receber seus dados em formato estruturado.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 6 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>6</span>
                      Cookies e Tecnologias Similares
                    </h2>
                    <p className="lead mb-3">
                      Utilizamos cookies para melhorar sua experiência na plataforma:
                    </p>
                    
                    <div className="alert alert-warning border-0 rounded-3" style={{ background: 'rgba(255, 193, 7, 0.1)' }}>
                      <div className="d-flex align-items-start">
                        <i className="bi bi-cookie me-3 mt-1" style={{ color: '#ffc107', fontSize: '1.5rem' }}></i>
                        <div>
                          <h6 className="fw-bold mb-2">Tipos de Cookies</h6>
                          <ul className="mb-0">
                            <li><strong>Essenciais:</strong> Necessários para o funcionamento da plataforma</li>
                            <li><strong>Funcionais:</strong> Lembram suas preferências e configurações</li>
                            <li><strong>Analíticos:</strong> Nos ajudam a entender como você usa nossa plataforma</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 7 */}
                  <div className="policy-section mb-5 p-4 rounded-4 shadow-sm" style={{ background: 'white', border: '1px solid #f0f0f0' }}>
                    <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>
                      <span className="badge me-3" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>7</span>
                      Alterações na Política
                    </h2>
                    <p>
                      Podemos atualizar esta política ocasionalmente. Quando isso acontecer, notificaremos você por e-mail 
                      ou através de um aviso em nossa plataforma. Recomendamos que você revise esta política periodicamente.
                    </p>
                    <div className="alert alert-info border-0 rounded-3" style={{ background: 'rgba(13, 202, 240, 0.1)' }}>
                      <i className="bi bi-bell-fill me-2" style={{ color: '#0dcaf0' }}></i>
                      Você será sempre notificado sobre mudanças significativas em nossa política de privacidade.
                    </div>
                  </div>

                  {/* Contato */}
                  <div className="contact-section p-4 rounded-4" style={{
                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                    color: 'white'
                  }}>
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-headset me-2"></i>
                      Dúvidas sobre Privacidade?
                    </h3>
                    <p className="mb-3 opacity-90">
                      Se você tiver alguma dúvida sobre nossa política de privacidade ou sobre como tratamos seus dados, 
                      entre em contato conosco. Estamos aqui para ajudar!
                    </p>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-envelope me-2"></i>
                          <span>contato@fenixconnect.com.br</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-phone me-2"></i>
                          <span>+55 (81) 98608-9100</span>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-shield-check me-2"></i>
                          <span>Encarregado de Proteção de Dados: privacidade@fenixconnect.com.br</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <style>
          {`
            .policy-section {
              transition: all 0.3s ease;
            }
            
            .policy-section:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
            }
            
            .info-card {
              transition: all 0.3s ease;
            }
            
            .info-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }
            
            .right-item {
              transition: all 0.3s ease;
            }
            
            .right-item:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(40, 167, 69, 0.2);
            }
            
            .contact-section {
              transition: all 0.3s ease;
            }
            
            .contact-section:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 40px rgba(40, 167, 69, 0.3);
            }
          `}
        </style>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Policy
