import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function Terms() {
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
                <h1 className="display-4 fw-bold mb-4">Termos de Serviço</h1>
                <p className="lead fs-5 opacity-90 mb-4">
                  Conheça os termos e condições de uso da plataforma Fenix Connect
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
                    <i className="bi bi-info-circle-fill me-3" style={{ color: '#ff6b35', fontSize: '1.5rem' }}></i>
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
                      Bem-vindo ao <strong>Fenix Connect</strong>. Ao acessar e utilizar nossa plataforma, você concorda 
                      em cumprir e estar sujeito aos seguintes termos e condições de uso.
                    </p>
                    <p className="mb-0">
                      Estes termos se aplicam a todos os usuários do site, incluindo visitantes, clientes e 
                      contribuidores de conteúdo.
                    </p>
                  </div>
                </div>

                {/* Definições */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>2. Definições</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <strong>"Plataforma":</strong> Refere-se ao website Fenix Connect e todos os serviços relacionados.
                      </li>
                      <li className="mb-3">
                        <strong>"Usuário":</strong> Qualquer pessoa que acesse ou utilize nossa plataforma.
                      </li>
                      <li className="mb-3">
                        <strong>"Conteúdo":</strong> Todas as informações, textos, imagens e materiais disponíveis na plataforma.
                      </li>
                      <li className="mb-0">
                        <strong>"Serviços":</strong> Todos os produtos e funcionalidades oferecidos pelo Fenix Connect.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Uso da Plataforma */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>3. Uso da Plataforma</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <h5 className="fw-bold mb-3">Você concorda em:</h5>
                    <ul className="mb-4">
                      <li>Utilizar a plataforma apenas para fins legais e autorizados</li>
                      <li>Não violar qualquer lei ou regulamento aplicável</li>
                      <li>Respeitar os direitos de propriedade intelectual</li>
                      <li>Não interferir no funcionamento adequado da plataforma</li>
                    </ul>
                    
                    <h5 className="fw-bold mb-3">É proibido:</h5>
                    <ul className="mb-0">
                      <li>Usar a plataforma para atividades ilegais ou não autorizadas</li>
                      <li>Transmitir vírus, malware ou códigos maliciosos</li>
                      <li>Tentar obter acesso não autorizado a qualquer parte da plataforma</li>
                      <li>Reproduzir, duplicar ou copiar qualquer parte dos serviços</li>
                    </ul>
                  </div>
                </div>

                {/* Propriedade Intelectual */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>4. Propriedade Intelectual</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Todo o conteúdo presente na plataforma Fenix Connect, incluindo textos, gráficos, logos, 
                      imagens, vídeos, software e outros materiais, é propriedade do Fenix Connect ou de seus 
                      licenciadores e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
                    </p>
                    <p className="mb-0">
                      Você não pode modificar, reproduzir, distribuir, criar obras derivadas, exibir publicamente 
                      ou de qualquer forma explorar qualquer conteúdo sem nossa permissão expressa por escrito.
                    </p>
                  </div>
                </div>

                {/* Privacidade */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>5. Privacidade e Dados</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Sua privacidade é importante para nós. O tratamento de seus dados pessoais é regido por 
                      nossa Política de Privacidade, que constitui parte integrante destes Termos de Serviço.
                    </p>
                    <p className="mb-0">
                      Ao usar nossa plataforma, você consente com a coleta e uso de suas informações conforme 
                      descrito em nossa Política de Privacidade.
                    </p>
                  </div>
                </div>

                {/* Limitação de Responsabilidade */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>6. Limitação de Responsabilidade</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      O Fenix Connect não será responsável por qualquer dano direto, indireto, incidental, 
                      especial ou consequente resultante do uso ou incapacidade de usar nossos serviços.
                    </p>
                    <p className="mb-0">
                      Fornecemos nossos serviços "como estão" e não garantimos que sejam livres de erros, 
                      vírus ou outros componentes prejudiciais.
                    </p>
                  </div>
                </div>

                {/* Modificações */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>7. Modificações dos Termos</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-3">
                      Reservamos o direito de modificar estes termos a qualquer momento. As alterações 
                      entrarão em vigor imediatamente após a publicação na plataforma.
                    </p>
                    <p className="mb-0">
                      É sua responsabilidade revisar periodicamente estes termos. O uso continuado da 
                      plataforma após as modificações constitui aceitação dos novos termos.
                    </p>
                  </div>
                </div>

                {/* Lei Aplicável */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#2c3e50' }}>8. Lei Aplicável</h2>
                  <div className="card border-0 shadow-sm rounded-4 p-4" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))'
                  }}>
                    <p className="mb-0">
                      Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer 
                      disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
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
                      Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-2">
                          <i className="bi bi-envelope-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Email:</strong> contato@fenixconnect.com.br
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-0">
                          <i className="bi bi-telephone-fill me-2" style={{ color: '#ff6b35' }}></i>
                          <strong>Telefone:</strong> (11) 9999-9999
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

export default Terms