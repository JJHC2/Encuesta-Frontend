import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import logo from '../../assets/image/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionUsuarios = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
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

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="admin-container container mt-4">
      <ToastContainer />
      <header className="admin-header d-flex justify-content-between align-items-center mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          &#9776; Menú
        </button>
        <h3>Panel de Administración</h3>
        <img src={logo} alt="Perfil" className="profile-img" />
      </header>

      <aside className={`admin-sidebar ${sidebarVisible ? "visible" : ""}`}>
        <nav className="nav flex-column bg-light p-3">
          <Link className="nav-link" to="/admin">Inicio</Link>
          {role === 1 && <Link className="nav-link" to="/gestion">Gestión de Usuarios</Link>}
          <Link className="nav-link" to="/admin">Gestionar Encuestas</Link>
          <Link className="nav-link" to="/home">Perfil</Link>
          <Link className="nav-link" to="/admin"></Link> 
        </nav>
      </aside>

      <main className="admin-main">
        <h2 className="mb-4">Gestión de Usuarios</h2>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-success" onClick={() => navigate("/admin/add")}>
            Agregar Usuario
          </button>
          <input
            type="text"
            placeholder="Buscar por nombre, matrícula o correo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control w-50"
          />
        </div>
        <MDBTable align="middle" className="table table-striped table-bordered">
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
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td></td>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>{user.user_matricula}</td>
                <td>{user.role_name}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate(`/admin/edit/${user.id}`)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    onClick={() => navigate(`/admin/view/${user.id}`)}
                    className="btn btn-primary me-2"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <nav>
          <ul className="pagination justify-content-center mt-3">
            {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="admin-footer text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Panel de Administración. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default GestionUsuarios;
