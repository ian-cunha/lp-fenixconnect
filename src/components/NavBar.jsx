import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='nav'>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="40" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fw-semibold" id="navbarScroll">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre-nos">Sobre nós</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Documentos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/termos">Termos de serviço</a></li>
                  <li><a className="dropdown-item" href="/politica">Política de privacidade</a></li>
                </ul>
              </li>
            </ul>
            <div className='text-center'>
              <a href='https://play.google.com/store/apps/details?id=br.com.fenixconnect' target='_blank' rel="noreferrer" className="btn-orange" type="button"><i className="bi bi-google-play"></i> Google Play</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
