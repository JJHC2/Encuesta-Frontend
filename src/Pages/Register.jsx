import React, { useState } from "react";
import cuervo from "../assets/image/cuervo.png";
import { Link } from "react-router-dom";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    matricula: "",
  });

  const { email, name, password, matricula } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, name, password, matricula, role_id: 2 };
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (!response.ok) {
        throw new Error(parseRes.message || "Error desconocido");
      }
      localStorage.setItem("role",parseRes.role)
      localStorage.setItem("token", parseRes.token);
      setAuth(true, parseRes.role);
    } catch (err) {
      console.error("Hubo un error", err);
      alert(err.message || "Error de registro, intenta nuevamente.");
    }
  };

  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-6 mx-4">
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
              <h4
                className="mb-1"
                style={{ fontFamily: "cursive", fontKerning: "inherit" }}
              >
                Registro
              </h4>
              <p className="mb-5" style={{ fontFamily: "cursive" }}>
                Registrate y conoce todos lo beneficios que nuestra plataforma
                tiene para ti 🚀
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
                    id="username"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Enter your username"
                    autofocus
                  />
                  <label for="username">Usuario</label>
                </div>
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={onChange}
                    name="email"
                    placeholder="Enter your email"
                  />
                  <label for="email">Email</label>
                </div>
                <div className="mb-5 form-password-toggle">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <label for="password">Password</label>
                    </div>
                  </div>
                </div>
                <div className="mb-5 form-password-toggle">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="number"
                        id="matricula"
                        className="form-control"
                        name="matricula"
                        value={matricula}
                        onChange={onChange}
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="matricula"
                      />
                      <label for="password">Matricula</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success d-grid w-100 mb-5"
                >
                  Sign up
                </button>
              </form>

              <p className="text-center mb-5">
                <span>Ya tienes una cuenta?</span>
                <Link to="/">Inicia Sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
