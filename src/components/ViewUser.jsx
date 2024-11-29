import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Drawer,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./templates/Sidebar";
import { toast, ToastContainer } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const ViewUser = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleUsersMenu = () => setOpenUsers(!openUsers);
  const toggleSurveyMenu = () => setOpenSurvey(!openSurvey);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/admin/users/${id}`, {
          headers: { token: localStorage.token },
        });
        setData(response.data);
      } catch (error) {
        toast.error("Error al cargar los detalles del usuario");
        console.error("Error al cargar usuario:", error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", color: "#2e7d32" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Detalles del Usuario
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={sidebarOpen} onClose={toggleSidebar}>
        <Sidebar
          role={data.role_name}
          openUsers={openUsers}
          toggleUsersMenu={toggleUsersMenu}
          openSurvey={openSurvey}
          toggleSurveyMenu={toggleSurveyMenu}
        />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: "#f9fbe7" }}>
            <Typography variant="h4" component="h2" gutterBottom color="#2e7d32">
              Detalles del Usuario
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mb: 2 }}
              href="/gestion"
            >
              Regresar
            </Button>

            <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" variant="head">Usuario</TableCell>
                    <TableCell align="center" variant="head">Email</TableCell>
                    <TableCell align="center" variant="head">Matrícula</TableCell>
                    <TableCell align="center" variant="head">Rol</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{data.user_name}</TableCell>
                    <TableCell align="center">{data.user_email}</TableCell>
                    <TableCell align="center">{data.user_matricula}</TableCell>
                    <TableCell align="center">{data.role_name}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default ViewUser;
