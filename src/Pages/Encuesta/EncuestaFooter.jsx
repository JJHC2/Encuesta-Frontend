import React from 'react'

const EncuestaFooter = () => {
  return (
    <div>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explora</h4>
                <a href="/dashboard">
                  <i className="fas fa-angle-right me-2"></i> Home
                </a>
                <a href="/dashboard">
                  <i className="fas fa-angle-right me-2"></i> Acerca de la UTVT
                </a>
                <a href="/dashboard">
                  <i className="fas fa-angle-right me-2"></i>Contactos 
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contactos</h4>
                <a href="/dashboard">
                  <i className="fas fa-envelope me-2"></i> al222110834@utvtol.edu
                </a>
                <a href="/dashboard">
                  <i className="fas fa-envelope me-2"></i> al222110834@utvtol.edu
                </a>
                <a href="/dashboard">
                  <i className="fas fa-phone me-2"></i> +52 722 806 5372
                </a>
                <a href="/dashboard" className="mb-3">
                  <i className="fas fa-print me-2"></i> +52 722 806 5372
                </a>
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href="/dashboard">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="/dashboard">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="/dashboard">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-0" href="/dashboard">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Nombre</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">UTVT</p>
                  <a href="/encuesta" className="text-body">
                    Universidad Tecnologica del Valle de Toluca
                  </a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Ubicación</p>
                  <a href="/encuesta" className="text-body">
                  Manzana 035, 52044 Santa María Atarasquillo, Méx.
                  </a>
                </div>
                <div className="footer-btn text-start">
                  <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/gJ6454MGzye9fgqMA" className="btn btn-light rounded-pill px-4">
                    Ver Ubicación <i className="fa fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Investment</p>
                  <a href="/encuesta" className="text-body">
                    Revisiting Your Investment & Distribution Goals
                  </a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">Business</p>
                  <a href="/encuesta" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </a>
                </div>
                <div className="footer-btn text-start">
                  <a href="/encuesta" className="btn btn-light rounded-pill px-4">
                    View All Post <i className="fa fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="/encuesta" className="border-bottom text-primary">
                  <i className="fas fa-copyright text-light me-2"></i>RavenCode
                </a>
                , Todos los derechos reservados.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By{" "}
              <a
                className="border-bottom text-primary"
                href="https://htmlcodex.com"
              >
                RavenCode
              </a>{" "}
              Distributed By{" "}
              <a
                className="border-bottom text-primary"
                href="https://themewagon.com"
              >
                RavenCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EncuestaFooter
