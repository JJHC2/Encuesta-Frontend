import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
  AppBar,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  Drawer,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../templates/Sidebar";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionEncuesta = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [responses, setResponses] = useState([]);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);
  const [role, setRole] = useState(null);

  React.useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/admin`, {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setRole(parseRes.role_id);
      } catch (err) {
        console.error("Error", err.message);
      }
    };

    fetchAdminData();
  }, []);

  // Paginación
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);

  const fetchResponses = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/admin/responses/${userName}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (response.data.length === 0) {
        toast.warning("No se encontraron respuestas para el usuario ingresado");
      } else {
        setResponses(response.data);
        setPage(1);
      }
    } catch (err) {
      console.error("Error al obtener respuestas:", err.message);
      toast.error("Error al obtener respuestas");
    }
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResponses = responses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(responses.length / itemsPerPage)) {
      setPage(newPage);
    }
  };

  
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
    },
    searchButton: {
      backgroundColor: "#2e7d32",
      color: "#ffffff",
      borderRadius: "8px",
      padding: "10px 15px",
      textTransform: "none",
      '&:hover': {
        backgroundColor: "#1b5e20",
      },
    },
    tableHeader: {
      backgroundColor: "#c8e6c9", 
    },
    tableBody: {
      backgroundColor: "#ffffff",
    },
    paginationButton: {
      backgroundColor: "#2e7d32",
      color: "#ffffff",
      borderRadius: "8px",
      padding: "8px 12px",
      '&:hover': {
        backgroundColor: "#1b5e20",
      },
    },
  };


  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" style={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" style={styles.menuButton} onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={styles.title}>
            Gestión de Encuestas
          </Typography>
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
      <Container style={styles.mainContent}>
        <h2>Encuestas</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
          <input
            type="text"
            placeholder="Buscar por nombre de usuario"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={styles.input}
          />
          <Button
            variant="contained"
            style={styles.searchButton}
            onClick={fetchResponses}
          >
            Buscar
          </Button>
        </div>
        <MDBTable align="middle" className="table table-striped table-bordered">
          <MDBTableHead style={styles.tableHeader}>
            <tr>
              <th>Sección</th>
              <th>Pregunta</th>
              <th>Respuesta</th>
              <th>Nombre de Usuario</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody style={styles.tableBody}>
            {currentResponses.length > 0 ? (
              currentResponses.map((response, index) => (
                <tr key={index}>
                  <td>{response.seccion}</td>
                  <td>{response.pregunta}</td>
                  <td>{response.respuesta}</td>
                  <td>{response.user_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay respuestas para mostrar.
                </td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
        {/* Controles de paginación */}
        <div className="d-flex justify-content-between mt-3">
          <Button
            variant="contained"
            style={styles.paginationButton}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </Button>
          <span>
            Página {page} de {Math.ceil(responses.length / itemsPerPage)}
          </span>
          <Button
            variant="contained"
            style={styles.paginationButton}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(responses.length / itemsPerPage)}
          >
            Siguiente
          </Button>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

export default GestionEncuesta;
