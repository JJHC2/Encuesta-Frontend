import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import cuervo from "../assets/image/cuervo.png";
import { Link } from "react-router-dom";
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

  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-6 mx-4">
          <ToastContainer />
          <div className="card p-7">
            <div className="app-brand justify-content-center mt-5">
              <img
                src={cuervo}
                alt="cuervo"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>

            <div className="card-body mt-1">
              <h4 className="mb-1">Bienvenido! 👋🏻</h4>
              <p className="mb-5">
                Porfavor ingresa tus credenciales para acceder a la plataforma.
              </p>

              <form
                id="formAuthentication"
                className="mb-5"
                onSubmit={onSubmitForm}
              >
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your email or username"
                    autofocus
                  />
                  <label for="email">Email or Username</label>
                </div>
                <div className="mb-5">
                  <div className="form-password-toggle">
                    <div className="input-group input-group-merge">
                      <div className="form-floating form-floating-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          onChange={onChange}
                          value={password}
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                        />
                        <label for="password">Password</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 pb-2 d-flex justify-content-between pt-2 align-items-center">
                  <label>Olvidaste tu Contraseña?</label>
                  <Link to="/forgot-password" className="float-end mb-1">
                    <span>Recuperar Contraseña?</span>
                  </Link>
                </div>
                <div className="mb-5">
                  <button
                    className="btn btn-success d-grid w-100"
                    type="submit"
                  >
                    login
                  </button>
                </div>
              </form>

              <p className="text-center mb-5">
                <span>No tienes una cuenta?</span>
                <Link to="/register">Registrarse</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
