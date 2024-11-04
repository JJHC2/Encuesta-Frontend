import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const EditUser = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMatricula, setUserMatricula] = useState("");
  const [roleid, setRoleid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${BACKEND_URL}/admin/users/${id}`, {
        headers: { token: localStorage.token },
      });
      setUserName(response.data.user_name);
      setUserEmail(response.data.user_email);
      setUserMatricula(response.data.user_matricula);
      setRoleid(response.data.role_id);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${BACKEND_URL}/admin/users/${id}`,
        {
          user_name: userName,
          user_email: userEmail,
          user_matricula: userMatricula,
          role_id: roleid,
        },
        {
          headers: { token: localStorage.token },
        }
      );
      toast.success("Usuario editado con éxito");
    } catch (error) {
      toast.error("Error al editar el usuario");
      console.error("Error al editar usuario:", error);
    }
  };

  return (
    <div className="app flex flex-col md:flex-row">
    <ToastContainer />
    <div className="sidebar bg-gray-800 text-white p-5 md:w-1/4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Panel de Administración</h2>
      <Link
        to="/gestion"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 w-full text-center"
      >
        Regresar
      </Link>
    </div>

    <div className="content flex-1 p-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Editar Usuario</h2>
      <form className="bg-white p-5 rounded-lg shadow-md" onSubmit={handleSubmit}>
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
            type="text"
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
          className="btn btn-danger text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
        >
          Actualizar Usuario
        </button>
      </form>
    </div>
  </div>
  );
};

export default EditUser;
