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
    <div className="d-flex flex-column flex-md-row">
      <ToastContainer />
      <div className="sidebar bg-dark text-white p-4 col-md-3 rounded shadow-lg">
        <h2 className="text-center h4 mb-4">Panel de Administración</h2>
        <Link to="/gestion" className="btn btn-success w-100 text-white">
          Regresar
        </Link>
      </div>

      <div className="content flex-fill p-4">
        <h2 className="text-center text-secondary mb-4 h2">Editar Usuario</h2>
        <form
          className="bg-white p-4 rounded shadow-sm"
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
              name="user_email"
              className="form-control"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Matrícula"
              name="user_matricula"
              className="form-control"
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
            Actualizar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
