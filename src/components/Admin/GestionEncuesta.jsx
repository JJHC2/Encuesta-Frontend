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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../templates/Sidebar";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const GestionEncuesta = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userEmail, setUserEmail] = useState("");
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
        `${BACKEND_URL}/admin/responses/${userEmail}`,
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

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Gestión de Encuesta</Typography>
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
        <h2>Encuestas</h2>
        <div className="d-flex justify-content-between mb-3">
          <input
            type="email"
            placeholder="Buscar por el correo del usuario"
            className="form-control w-50"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-success"
            onClick={fetchResponses}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <MDBTable align="middle" className="table table-striped table-bordered">
          <MDBTableHead>
            <tr>
              <th>Sección</th>
              <th>Pregunta</th>
              <th>Respuesta</th>
              <th>Nombre de Usuario</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
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
            color="primary"
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
            color="primary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(responses.length / itemsPerPage)}
          >
            Siguiente
          </Button>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default GestionEncuesta;
