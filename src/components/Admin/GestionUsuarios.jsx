import React, { useState, useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import logo from '../../assets/image/logo.png';


const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionUsuarios = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
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
    <div className="admin-container">
      <ToastContainer />
      <header className="admin-header">
        <button
          className="menu-toggle"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          &#9776;
        </button>
        <h3>Panel de Administración</h3>
        <div className="header-actions">
          <img src={logo} alt="Perfil" className="profile-img" />
        </div>
      </header>

      <aside className={`admin-sidebar ${sidebarVisible ? "visible" : ""}`}>
        <h2>Menú</h2>
        <nav>
          <Link to="/admin">Inicio</Link>
          {role === 1 && <Link to="/gestion">Gestión de Usuarios</Link>}
          <Link to="/admin">Generar Reporte</Link>
          <Link to="/admin">Gestionar Encuestas</Link>
          <Link to="/home">Gestionar Preguntas</Link>
        </nav>
      </aside>

      <main className="admin-main">
        <h2>Gestión de Usuarios</h2>
        <button
          className="btn btn-success md-4"
          onClick={() => navigate("/admin/add")}
        >
          Agregar Usuario
        </button>
        <input
          type="text"
          placeholder="Buscar por nombre, matrícula o correo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Matrícula</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td></td>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <MDBBadge color="success" pill>
                  Active
                </MDBBadge>
                <td>{user.user_matricula}</td>
                <td>{user.role_name}</td>
                {user.role_name === "admin" ? (
                  <td className="py-2 px-4">
                    <i style={{ color: "red" }} className="fa-solid fa-ban"></i>
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
          </MDBTableBody>
        </MDBTable>
      </main>

      <footer className="admin-footer">
        <p>
          &copy; {new Date().getFullYear()} Panel de Administración. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default GestionUsuarios;
