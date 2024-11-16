import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Drawer,
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./templates/Sidebar";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const EditUser = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMatricula, setUserMatricula] = useState("");
  const [roleid, setRoleid] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/admin/users/${id}`, {
          headers: { token: localStorage.token },
        });
        if (response.status === 401) {
          toast.error(response.error);
          return;
        }
        setUserName(response.data.user_name);
        setUserEmail(response.data.user_email);
        setUserMatricula(response.data.user_matricula);
        setRoleid(response.data.role_id);
      } catch (error) {
        console.error("Error al cargar usuario:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
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
  
      if (response.status !== 200) {
        toast.error(response.data.error || "Hubo un error en la actualización");
        return;
      }
  
      toast.success("Usuario editado con éxito");
      navigate("/gestion");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Hubo un error al actualizar el usuario");
      } else if (error.request) {
        toast.error("No se pudo conectar con el servidor. Intenta nuevamente.");
      } else {
        toast.error("Hubo un problema con la solicitud. Intenta nuevamente.");
      }
      console.error("Hubo un error:", error);
    }
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Editar Usuario
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={sidebarOpen} onClose={toggleSidebar}>
        <Sidebar
          role={roleid}
          openUsers={openUsers}
          toggleUsersMenu={toggleUsersMenu}
          openSurvey={openSurvey}
          toggleSurveyMenu={toggleSurveyMenu}
        />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <ToastContainer />
        <Typography variant="h4" component="h2" gutterBottom>
          Editar Usuario
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Matrícula"
            variant="outlined"
            value={userMatricula}
            onChange={(e) => setUserMatricula(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            select
            label="Rol"
            value={roleid}
            onChange={(e) => setRoleid(e.target.value)}
            variant="outlined"
            margin="normal"
          >
            <MenuItem value="2">Usuario</MenuItem>
            <MenuItem value="3">Administrador Nivel 1</MenuItem>
            <MenuItem value="4">Administrador Nivel 2</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Actualizar Usuario
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditUser;
