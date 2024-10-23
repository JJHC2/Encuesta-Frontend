import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({logout}) => {
  return (
    <div>
       <div className="container-fluid topbar px-0 d-none d-lg-block">
            <div className="container px-0">
                <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <button className="text-muted me-4 btn btn-link p-0"><i className="fas fa-map-marker-alt text-primary me-2"></i>Ubicacion</button>
                            <a href="/dashboard" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+52 722 806 5372</a>
                            <a href="/dashboard" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>al222110834@utvtol.edu.mx</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end">
                            <button className="btn btn-success btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></button>
                            <button className="btn btn-success btn-square rounded-circle nav-fill me-3"><i className="fab fa-twitter text-white"></i></button>
                            <button className="btn btn-success btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></button>
                            <button className="btn btn-success btn-square rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in text-white"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid sticky-top px-0">
            <div className="position-absolute bg-dark" style={{ left: 0, top: 0, width: '100%', height: '100%' }}>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                    <a href="/dashboard" className="navbar-brand p-0">
                        <h1 className="text-success m-0"><i class="fa-solid fa-crow"></i>UTVT</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/dashboard" className="nav-item nav-link active">Inicio</a>
                            <a href="/dashboard" className="nav-item nav-link">Acerca</a>
                            <a href="/dashboard" className="nav-item nav-link">Contacto</a>
                            <Link to="/encuesta" className="nav-item nav-link">Encuesta</Link>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                            <button onClick={logout} className="btn btn-success rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">Cerrar Sesión</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </div>
  )
}

export default Header
