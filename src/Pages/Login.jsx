import React, { Fragment, useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fondo from "../assets/image/utvtfondo.jpg";
//Usar variable de entrono

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (response.status === 401) {
        toast.error(parseRes);
        return;
      }

      localStorage.setItem("token", parseRes.token);
      localStorage.setItem("role", parseInt(parseRes.role, 10));
      setAuth(true, parseInt(parseRes.role, 10));
    } catch (err) {
      console.error("Hubo un error", err);
      toast.error("Error de registro, intenta nuevamente.");
    }
  };

  React.useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <Fragment>
      <ToastContainer transition={Flip} />
      <main className="main-content  mt-0">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Bienvenido!</h1>
                <p className="text-lead text-white">
                  Inicia sesión en tu cuenta ahora mismo para acceder a todos
                  los recursos y oportunidades que nuestra plataforma tiene para
                  ti.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Iniciar Sesión</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitForm}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Aun no tienes una cuenta?{" "}
                      <a
                        href="/register"
                        className="text-dark font-weight-bolder"
                      >
                        Registrate
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer py-5" style={{ backgroundColor: "white" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-4 mx-auto text-center">
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Company
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                About Us
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Team
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Products
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Blog
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Pricing
              </a>
            </div>
            <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-dribbble"></span>
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-twitter"></span>
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-instagram"></span>
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-pinterest"></span>
              </a>
              <a
                href="/login"
                target="_blank"
                class="text-secondary me-xl-4 me-4"
              >
                <span class="text-lg fab fa-github"></span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-secondary">
                Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script> Raven
                Code
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Login;
