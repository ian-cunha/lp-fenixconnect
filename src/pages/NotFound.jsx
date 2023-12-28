import logo from '../assets/white-logo.svg'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='notfound d-flex flex-column justify-content-center align-items-center text-center'>
      <img src={logo} width={100} />
      <h2 className='text-light fs-1 mt-3 col-md-4 col-9'>OOPS! PÁGINA NÃO ENCONTRADA.</h2>
      <p className='text-light m-2 col-md-4 col-9'>Acesse a página inicial do Fenix Connect clicando no botão abaixo</p>
      <Link className='btn-base mt-3' to='/'>Voltar ao Início</Link>
    </div>
  )
}

export default NotFound
