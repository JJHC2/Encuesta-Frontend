import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import cuervo from '../../assets/image/cuervo.png';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/reset-password`,
        { newPassword, token }
      );
      if (response.status === 401) {
        toast.error(response.error);
        return;
      }
      navigate("/");
      console.log(response.data);
    } catch (error) {
      toast.error("No se puede restablecer la contraseña");
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
              <h4 className="mb-1">Actualización de contraseña 🔒</h4>
              <p className="mb-5">
                Ingresa tu nueva contraseña para restablecer tu cuenta.
              </p>
              <form
                id="formAuthentication"
                className="mb-5"
                onSubmit={handleSubmit}
              >
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    autofocus
                  />
                  <label>Password</label>
                </div>
                <button type="submit" className="btn btn-primary d-grid w-100 mb-5">
                  Restablecer contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
