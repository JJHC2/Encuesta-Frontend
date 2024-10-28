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
    <div className="flex flex-col items-center p-5">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-5">Agregar Usuario</h2>
      <Link to="/gestion" className="text-blue-500 hover:underline mb-5">
        Volver
      </Link>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            name="user_name"
            className="form-control border border-gray-300 p-2 rounded-md w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="form-control border border-gray-300 p-2 rounded-md w-full"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control border border-gray-300 p-2 rounded-md w-full"
            name="user_password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Matrícula"
            className="form-control border border-gray-300 p-2 rounded-md w-full"
            name="user_matricula"
            value={userMatricula}
            onChange={(e) => setUserMatricula(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="role_id"
            value={roleid}
            className="form-select border border-gray-300 p-2 rounded-md w-full"
            onChange={(e) => setRoleid(e.target.value)}
          >
            <option value="2">Usuario</option>
            <option value="3">Administrador Nivel 1</option>
            <option value="4">Administrador Nivel 2</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-success text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
        >
          Agregar Usuario
        </button>
      </form>
    </div>
  );
};

export default AddUser;
