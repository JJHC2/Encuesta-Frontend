import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import cuervo from "../../assets/image/cuervo.png";
import { Link } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
      `${BACKEND_URL}/auth/forgot-password`,
        { user_email: email }
      );
      console.log(response.data);
      toast.success("Se ha enviado un correo para restablecer la contraseña");
    } catch (error) {
      toast.error("El usuario no existe");
      console.log("No se puede enviar el token", error);
      console.error(error);
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
              <h4 className="mb-1">Olvidaste tu Contraseña? 🔒</h4>
              <p className="mb-5">
                Ingresa tu correo electrónico y te enviaremos un enlace para
                restablecer tu contraseña.
              </p>
              <form
                id="formAuthentication"
                className="mb-5"
                onSubmit={handleSubmit}
              >
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    autofocus
                  />
                  <label>Email</label>
                </div>
                <button type="submit" className="btn btn-primary d-grid w-100 mb-5">
                  Enviar enlace de restablecimiento
                </button>
              </form>
              <div className="text-center">
                <Link
                  to="/"
                  className="d-flex align-items-center justify-content-center"
                  style={{ color: "green" }}
                >
                  <i className="ri-arrow-left-s-line ri-20px me-1_5"></i>
                  Regresar al inicio de sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPasswordReset;
