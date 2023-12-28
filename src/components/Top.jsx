import smartphone from '../assets/images/smartphone.png'
import logo from '../assets/logo.svg'

const Top = () => {
  return (
    <div className="d-flex flex-sm-row flex-column align-items-center justify-content-center cont">
      <div className="top p-5 text-center text-md-start">
        <h4 className='m-0'>Conheça o</h4>
        <h1>Fenix Connect</h1>
        <h6 className="mb-4">Um espaço inovador projetado para fornecer oportunidades transformadoras e impulsionar o reinício de suas trajetórias profissionais. Reconhecemos a importância da reintegração social e estamos comprometidos em oferecer recursos significativos para apoiar sua jornada.</h6>
        <a href='https://play.google.com/store/apps/details?id=br.com.fenixconnect' className="btn-base heartbeat" target='_blank' rel="noreferrer"><i className="bi bi-google-play"></i> Google Play</a>
      </div>
      <div className="top2 p-5">
        <img className='scale-up-center smartphone' src={smartphone} />
      </div>
      <img className='rotate-scale-up-diag-2 logo' src={logo} />
    </div>
  )
}

export default Top
