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
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../templates/Sidebar";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
    color: "#2e7d32",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  menuButton: {
    color: "#2e7d32",
  },
  mainContent: {
    padding: "20px",
    backgroundColor: "#f1f8e9",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    flex: 1,
    overflowX: "auto",
  },
  title: {
    fontSize: "1.5rem",
    color: "#2e7d32",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    maxWidth: "400px",
    marginRight: "10px",
    borderColor: "#2e7d32",
    padding: "8px",
    borderRadius: "8px",
  },
  searchButton: {
    backgroundColor: "#2e7d32",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "10px 15px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#1b5e20",
    },
  },
  tableContainer: {
    overflowX: "auto",
    marginTop: "15px",
  },
  paginationButton: {
    backgroundColor: "#2e7d32",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "8px 12px",
    "&:hover": {
      backgroundColor: "#1b5e20",
    },
  },
};

const GestionUsuarios = () => {
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/admin`, {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
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
      toast.error(
        "El usuario no se puede eliminar debido a que tiene encuestas asociadas"
      );
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <AppBar position="sticky" style={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            style={styles.menuButton}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={styles.title}>
            Usuarios
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarOpen} onClose={toggleSidebar}>
        <Sidebar
          role={role}
          openUsers={openUsers}
          toggleUsersMenu={() => setOpenUsers(!openUsers)}
          openSurvey={openSurvey}
          toggleSurveyMenu={() => setOpenSurvey(!openSurvey)}
        />
      </Drawer>
      <main
        style={{
          flex: 1,
          marginLeft: sidebarOpen && !isMobile ? 240 : 0,
          ...styles.mainContent,
        }}
      >
        <h2 style={styles.title}>Gestión de Usuarios</h2>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Buscar por nombre, matrícula o correo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />
          <button style={styles.searchButton}>Buscar</button>
        </div>
        <div style={styles.tableContainer}>
          <MDBTable
            align="middle"
            style={{ border: "1px solid #2e7d32", borderRadius: "12px" }}
          >
            <MDBTableHead style={{ backgroundColor: "#c8e6c9" }}>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Matrícula</th>
                <th scope="col">Role</th>
                {role === 1 && <th>Actions</th>}
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ backgroundColor: "#ffffff" }}>
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
                          style={{ ...styles.searchButton, marginRight: "5px" }}
                          onClick={() => navigate(`/admin/edit/${user.id}`)}
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          style={styles.searchButton}
                          onClick={() => navigate(`/admin/view/${user.id}`)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button
                          style={{
                            ...styles.searchButton,
                            backgroundColor: "#f44336",
                          }}
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    ) : (
                      <td>
                        <span style={{ color: "#9e9e9e" }}>
                          Usuario no se puede modificar
                        </span>
                      </td>
                    ))}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
        <nav>
          <ul className="pagination justify-content-center mt-3">
            {[...Array(Math.ceil(filteredUsers.length / usersPerPage))].map(
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
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
    </Box>
  );
};

export default GestionUsuarios;
