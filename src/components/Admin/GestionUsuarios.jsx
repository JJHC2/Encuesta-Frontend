import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import {
  AppBar,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../templates/Sidebar";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionUsuarios = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);
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

        if (
          parseRes.role_id === 1 ||
          parseRes.role_id === 3 ||
          parseRes.role_id === 4
        ) {
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
      toast.error("El usuario no se puede eliminar debido a que tiene encuestas asociadas");
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
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Bienvenido {name}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarOpen} onClose={toggleSidebar}>
        <Sidebar
          role={role}
          openUsers={openUsers}
          toggleUsersMenu={toggleUsersMenu}
          openSurvey={openSurvey}
          toggleSurveyMenu={toggleSurveyMenu}
        />
      </Drawer>
      <main style={{ padding: "20px", marginLeft: sidebarOpen ? 240 : 0 }}>
        <h2>Gestión de Usuarios</h2>
        <div className="d-flex justify-content-between mb-3">
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
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Matrícula</th>
              <th scope="col">Role</th>
              {role === 1 && <th>Actions</th>}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>{user.user_matricula}</td>
                <td>{user.role_name}</td>
                {role === 1 &&
                  (user.role_id !== 1 ? (
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
                  ) : (
                    <h3 style={{ color: "red" }}>
                      Usuario no se puede modificar
                    </h3>
                  ))}
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <nav>
          <ul className="pagination justify-content-center mt-3">
            {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </main>
      <ToastContainer />
    </>
  );
};

export default GestionUsuarios;
