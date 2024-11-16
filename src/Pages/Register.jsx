import React, { useState } from "react";
import cuervo from "../assets/image/cuervo.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    matricula: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, name, password, matricula } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, name, password, matricula, role_id: 2 };
      const response = await axios.post(`${BACKEND_URL}/auth/register`, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (response.status === 401) {
        toast.error(parseRes.error);
        return;
      }
      localStorage.setItem("role", parseRes.role);
      localStorage.setItem("token", parseRes.token);
      setAuth(true, parseRes.role);
    } catch (err) {
      console.error("Hubo un error", err);
      alert(err.error || "Error de registro, intenta nuevamente.");
    }
  };

  return (
    <div className="position-relative">
      <ToastContainer />
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
              >
                Registro
              </h4>
              <p className="mb-5">
                Registrate y conoce todos lo beneficios que nuestra plataforma
                tiene para ti 🚀
              </p>

              <form id="formAuthentication" className="mb-5" onSubmit={onSubmitForm}>
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                    placeholder="Enter your username"
                    autoFocus
                  />
                  <label htmlFor="username">Usuario</label>
                </div>
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={onChange}
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="mb-5 form-password-toggle">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        placeholder="••••••••"
                        aria-describedby="password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                    </button>
                  </div>
                </div>
                <div className="mb-5 form-password-toggle">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="number"
                        id="matricula"
                        required
                        className="form-control"
                        name="matricula"
                        value={matricula}
                        onChange={onChange}
                        placeholder="Ingrese su matrícula"
                        aria-describedby="matricula"
                      />
                      <label htmlFor="matricula">Matrícula</label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success d-grid w-100 mb-5">
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
