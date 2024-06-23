import logo from "../assets/white-logo.svg";

const Footer = () => {
  return (
    <div className="bg-dark p-2">
      <div className="row justify-content-center text-center mt-4 mb-4">
        `{/* Logo */}`
        <div className="col-sm-3 m-1">
          <a href="/">
            <img src={logo} className="logoFooter" />
          </a>
        </div>
        `{/* Contatos */}`
        <div className="col-sm-3 m-1">
          <h5 className="text-light">Contatos</h5>
          <p className="text-light m-0 mt-3">+55 (81) 98608-9100</p>
          <p className="text-light m-0 mb-3">contato@fenixconnect.com.br</p>
        </div>
        `{/* Redes Sociais  */}`
        <div className="col-sm-3 m-1">
          <h5 className="text-light">Redes</h5>
          <a href="https://www.instagram.com/">
            <i className="bi bi-instagram fs-2 m-2 colorOrange"></i>
          </a>
          <a href="https://linkedin.com/">
            <i className="bi bi-linkedin fs-2 m-2 colorOrange"></i>
          </a>
          <a href="https://x.com/">
            <i className="bi bi-twitter-x fs-2 m-2 colorOrange"></i>
          </a>
        </div>
      </div>
      <div>
        <p className="text-light text-center m-2">&copy;2024 Fenix Connect</p>
      </div>
    </div>
  );
};

export default Footer;
