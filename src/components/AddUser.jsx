import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMatricula, setUserMatricula] = useState("");
  const [roleid, setRoleid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${BACKEND_URL}/admin/users`,
        {
          user_name: userName,
          user_email: userEmail,
          user_password: userPassword,
          user_matricula: userMatricula,
          role_id: roleid,
        },
        {
          headers: { token: localStorage.token },
        }
      );
      toast.success("Usuario agregado con éxito");
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setUserMatricula("");
      setRoleid("");
    } catch (error) {
      toast.error("Error al agregar el usuario");
      console.error("Error al agregar usuario:", error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-5">
      <ToastContainer />
      <h2 className="text-center text-primary display-4 mb-4">
        Agregar Usuario
      </h2>
      <Link to="/gestion" className="text-decoration-none text-secondary mb-3">
        <i className="bi bi-arrow-left"></i> Volver
      </Link>
      <form
        className="bg-light p-4 rounded shadow-lg w-100 col-md-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre"
            name="user_name"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control"
            name="user_password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Matrícula"
            className="form-control"
            name="user_matricula"
            value={userMatricula}
            onChange={(e) => setUserMatricula(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <select
            name="role_id"
            value={roleid}
            className="form-select"
            onChange={(e) => setRoleid(e.target.value)}
          >
            <option value="2">Usuario</option>
            <option value="3">Administrador Nivel 1</option>
            <option value="4">Administrador Nivel 2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Agregar Usuario
        </button>
      </form>
    </div>
  );
};

export default AddUser;
