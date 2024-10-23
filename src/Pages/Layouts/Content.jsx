import React from "react";
import about1 from "../../assets/image/about-2.jpg";
import about3 from "../../assets/image/about-3.png";
import fondo from "../../assets/image/fondo.jpg";
const Content = ({ name }) => {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "600px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    caption: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "white",
    },
    paragraph: {
      fontSize: "1.25rem",
      marginBottom: "30px",
    },
    button: {
      marginRight: "10px",
    },
  };
  return (
    <div>
      <div style={styles.container}>
        <img src={fondo} alt="Header" style={styles.image} />
        <div style={styles.caption}>
          <h1 style={styles.title}>¡Bienvenido, {name}!</h1>
          <p style={styles.paragraph}>
            Nos alegra tenerte aquí en el sistema de la encuesta de egresados de
            la UTVT. Tu participación es clave para ayudarnos a entender cómo
            mejorar las oportunidades laborales de nuestros egresados. ¡Gracias
            por tomarte el tiempo para compartir tu experiencia!
          </p>
          <p style={styles.paragraph}>
            Juntos, construiremos un futuro mejor para los próximos graduados.
            💼✨
          </p>
        </div>
      </div>

      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-img">
                <img
                  src={about3}
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="About us section 1"
                />
                <img
                  src={about1}
                  className="img-fluid w-100 rounded-bottom"
                  alt="About us section 2"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">
                Acerca de la Encuesta de Egresados UTVT
              </h4>
              <h1 className="display-5 mb-4">
                Fortaleciendo el Futuro de Nuestros Egresados
              </h1>
              <p className="text ps-4 mb-4">
                En la Universidad Tecnológica del Valle de Toluca (UTVT),
                nuestro compromiso no termina cuando te gradúas. A través de
                esta encuesta, buscamos entender los retos y oportunidades que
                enfrentas como egresado(a), para poder seguir mejorando nuestros
                programas y ayudarte a tener éxito en tu carrera profesional.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Oportunidades de Desarrollo Profesional
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Conexiones con la Comunidad Laboral
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Mejora Continua de los Planes de Estudio
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Información Actualizada sobre el Mercado Laboral
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-xl-5"></div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        +
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: "25px" }}
                      >
                        100
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Ofertas de Trabajo</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        +
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: "25px" }}
                      >
                        1000
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Egresados</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        30
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: 600, fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Empresas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Beneficios de la Encuesta</h4>
            <h1 className="display-4">
              Contribuyendo a Mejorar las Oportunidades Laborales y las
              Instalaciones de la UTVT
            </h1>
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <button className="h4 mb-4 d-inline-flex text-start btn btn-link">
                      <i className="fas fa-check-circle fa-2x me-2"></i> Mejoras
                      en las Instalaciones
                    </button>
                    <p className="mb-4">
                      La encuesta permitirá identificar áreas clave para mejorar
                      las instalaciones de la UTVT y optimizar la experiencia
                      estudiantil.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <button className="h4 mb-4 d-inline-flex text-start btn btn-link">
                      <i className="fas fa-briefcase fa-2x me-2"></i> Evaluación
                      de Oportunidades Laborales
                    </button>
                    <p className="mb-4">
                      Se busca identificar los obstáculos que enfrentan los
                      egresados de la UTVT al buscar empleo, para mejorar su
                      inserción laboral.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-4.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a
                      href="/dashboard"
                      className="h4 mb-4 d-inline-flex text-start"
                    >
                      <i className="fas fa-university fa-2x me-2"></i> Calidad
                      de las Instalaciones
                    </a>
                    <p className="mb-4">
                      La encuesta incluye una evaluación detallada de las
                      instalaciones académicas, con el objetivo de mejorar los
                      recursos y el entorno de aprendizaje.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src="img/service-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a
                      href="/dashboard"
                      className="h4 mb-4 d-inline-flex text-start"
                    >
                      <i className="fas fa-user-graduate fa-2x me-2"></i>{" "}
                      Experiencia Estudiantil
                    </a>
                    <p className="mb-4">
                      Evaluamos la satisfacción de los estudiantes con los
                      servicios y las instalaciones de la universidad, para
                      fomentar un entorno más acogedor y funcional.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Our Blogs</h4>
            <h1 className="display-4">Latest Articles & News from the Blogs</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Investment</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D.
                      Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Blog post about revisiting investment goals"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-1.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="/dashboard" className="h4">
                    Revisiting Your Investment & Distribution Goals
                  </a>
                </div>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/dashbooard"
                >
                  Explore More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Business</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D.
                      Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Blog post about business"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-2.jpg"
                      data-lightbox="blog-2"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="/dashboard" className="h4">
                    Dimensional Fund Advisors Interview with Director
                  </a>
                </div>
                <button className="btn btn-primary rounded-pill py-2 px-4">
                  Explore More
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Consulting</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> Mar 14, 2024
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span> Mark D.
                      Brock
                    </p>
                  </div>
                </div>
                <div className="project-img">
                  <img
                    src="img/blog-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Blog post about consulting"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/blog-3.jpg"
                      data-lightbox="blog-3"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <a href="/dashboard" className="h4">
                    Interested in Giving Back this year? Here are some tips
                  </a>
                </div>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/dashboard"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
