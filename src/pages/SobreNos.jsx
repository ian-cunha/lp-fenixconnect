import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Robson from "../assets/images/integrantes/robson.jpg";
import Ian from "../assets/images/integrantes/ian.jpg";
import Cicero from "../assets/images/integrantes/cicero.jpeg";
import Anthony from "../assets/images/integrantes/anthony.png";
import Equipe1 from "../assets/images/equipe/equipe-1.jpg";
import Equipe_Reportagem from "../assets/images/equipe/equipe-reportagem.jpg";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player/youtube";


const SobreNos = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main class="div_teste">

        <div className="container marketing">
          <h1 className="p-3 display-5 fw-normal">Equipe</h1>

          <div className="row">
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <img src={Cicero} width="160" height="160" className="rounded-circle " />
              <h2 className="fw-normal">Cicero Alves</h2>
              <h3 className="fw-normal h5">CEO, Idealizador</h3>
              <p className="text-justify">And lastly this, the third column of representative placeholder content.</p>
              <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/ciceroalves_oficial/" target="_blank" className="p-1"><i class="bi bi-instagram fs-2 colorOrange"></i></a>
                <a href="#" target="_blank" className="p-1"><i class="bi bi-github fs-2 colorOrange"></i></a>
                <a href="https://www.linkedin.com/in/cicero-alves-de-lima-junior-9265b3188/" target="_blank" className="p-1"><i class="bi bi-linkedin fs-2 colorOrange"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <img src={Robson} width="160" height="160" className="rounded-circle " />
              <h2 className="fw-normal">Robson Thiago</h2>
              <h3 className="fw-normal h5">Leader, Frontend, Negócios</h3>
              <p className="text-justify">And lastly this, the third column of representative placeholder content.</p>
              <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/_r0b14/" target="_blank" className="p-1"><i class="bi bi-instagram fs-2 colorOrange"></i></a>
                <a href="https://github.com/r0b14" target="_blank" className="p-1"><i class="bi bi-github fs-2 colorOrange"></i></a>
                <a href="https://www.linkedin.com/in/r0b14/" target="_blank" className="p-1"><i class="bi bi-linkedin fs-2 colorOrange"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <img src={Ian} width="160" height="160" className="rounded-circle " />
              <h2 className="fw-normal">Ian Cunha</h2>
              <h3 className="fw-normal h5">Header Dev, Programador</h3>
              <p className="text-justify">And lastly this, the third column of representative placeholder content.</p>
              <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/ian.pictures/" target="_blank" className="p-1"><i class="bi bi-instagram fs-2 colorOrange"></i></a>
                <a href="https://github.com/ian-cunha" target="_blank" className="p-1"><i class="bi bi-github fs-2 colorOrange"></i></a>
                <a href="https://www.linkedin.com/in/iancunha/" target="_blank" className="p-1"><i class="bi bi-linkedin fs-2 colorOrange"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <img src={Anthony} width="160" height="160" className="rounded-circle " />
              <h2 className="fw-normal">Anthony Silva</h2>
              <h3 className="fw-normal h5">Frontend</h3>
              <p className="text-justify">And lastly this, the third column of representative placeholder content.</p>
              <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/putx_anthony?igsh=NXZoNWw3b3hsYTh2" target="_blank" className="p-1"><i class="bi bi-instagram fs-2 colorOrange"></i></a>
                <a href="https://github.com/Anthonylucass" target="_blank" className="p-1"><i class="bi bi-github fs-2 colorOrange"></i></a>
                <a href="https://www.linkedin.com/in/anthony-lucas-025649221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="p-1"><i class="bi bi-linkedin fs-2 colorOrange"></i></a>
              </div>
            </div>
          </div>

          <div className="row featurette pt-2">
            <h2 className="display-6 fw-normal p-3">Quem somos</h2>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Transformar vidas é nossa prioridade. <span className="text-body-secondary">Focada em entregar de resultados</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
              <img src={Equipe_Reportagem} alt="Equipe Responsável" width="500" className="rounded float-end" />
            </div>
          </div>

          <div className="row featurette pt-5">
            <div className="col-md-6 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Focada em resultados. <span className="text-body-secondary">See for yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-6 order-md-1">
              <ReactPlayer url="https://www.youtube.com/embed/XP3dbk8BEAE?si=8NElKibCoxvn4V1f" className="float-home"/>
            </div>
          </div>

          <div className="row featurette pt-5">
            <div className="col-md-8">
              <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
              <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div className="col-md-4">
              <div id="carouselExampleAutoplaying" className="carousel slide rounded float-end" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Equipe1} className="d-block w-100 rounded" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Robson} className="d-block w-100 rounded" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Ian} className="d-block w-100 rounded" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <p className="featurette-divider"></p>

        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SobreNos;
