import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import robot from "../../assets/image/robot.png";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionUsuarios = ({setAuth}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/admin`, {
          method: "GET",
          headers: { token: localStorage.token },
        });

        const parseRes = await response.json();

        setName(parseRes.user_name);
        setRole(parseRes.role_id);

        // Solo obtiene usuarios si el rol es 1
        if (parseRes.role_id === 1) {
          const usersResponse = await axios.get(`${BACKEND_URL}/admin/users`, {
            headers: { token: localStorage.token },
          });
          setUsers(usersResponse.data);
        }
      } catch (err) {
        console.error("Error", err.message);
      }
    };

    fetchAdminData();
  }, []);

  // Petición para eliminar usuario
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${BACKEND_URL}/admin/users/${userId}`, {
        headers: { token: localStorage.token },
      });
      setUsers(users.filter((user) => user.id !== userId));
      toast.success("Usuario eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      user.user_name.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.user_email.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.user_matricula.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.role_name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  return (
    <div>
      <div className="app flex flex-col md:flex-row">
        <ToastContainer />
        <div className="sidebar bg-gray-800 text-white p-5 md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">
            Panel de Administración de Usuarios
          </h2>
          <Link to="/admin" className="btn btn-danger">
          Regresar
          </Link>
        </div>

        <div className="content flex-1 p-5">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
            Bienvenid@, {name}
          </h1>

          {role !== 1 ? (
            <div
              style={{
                textAlign: "center",
                color: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  color: "red",
                  fontFamily: "cursive",
                }}
              >
                No tienes los permisos para estar en esta sección
              </h2>
              <img
                src={robot}
                style={{ width: "30%", height: "auto", maxWidth: "300px" }}
                alt="imagen"
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <h1 className="text-xl font-semibold mb-4">
                Administración de Usuarios
              </h1>
              <button
                className="btn btn-success md-4"
                onClick={() => navigate("/admin/add")}
              >
                Agregar Usuario
              </button>

              {/* Campo de búsqueda */}
              <input
                type="text"
                placeholder="Buscar por nombre, matrícula o correo"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded p-2 mb-4"
              />

              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 text-left">Nombre</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Matrícula</th>
                    <th className="py-2 px-4 text-left">Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4">{user.user_name}</td>
                      <td className="py-2 px-4">{user.user_email}</td>
                      <td className="py-2 px-4">{user.user_matricula}</td>
                      <td className="py-2 px-4">{user.role_name}</td>
                      {user.role_name === "admin" ? (
                        <td className="py-2 px-4">
                          <i
                            style={{ color: "red" }}
                            className="fa-solid fa-ban"
                          ></i>
                          <span style={{ color: "red" }}>
                            No se puede modificar un (SuperUsuario)
                          </span>
                        </td>
                      ) : (
                        <td className="py-2 px-4">
                          <button
                            className="btn btn-warning text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-300 mr-2"
                            onClick={() => navigate(`/admin/edit/${user.id}`)}
                          >
                            <i className="fa-solid fa-pencil"></i>
                          </button>
                          <button
                            onClick={() => navigate(`/admin/view/${user.id}`)}
                            className="btn btn-primary text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </button>
                          <button
                            className="btn btn-danger text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionUsuarios;
