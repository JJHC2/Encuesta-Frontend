import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usamos Link para las rutas internas
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  CardMedia,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Container,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  ListItemIcon,
} from "@mui/material";
import logo from "../assets/image/cuervo.png";
import fondoutvt from "../assets/image/utvtfondo.jpg";
import ofertaeducativa from "../assets/image/Ofertaeducativa.jpg";
import WorkIcon from "@mui/icons-material/Work";
import PollIcon from "@mui/icons-material/Poll";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const Dashboard = ({ setAuth }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutAnimating, setLogoutAnimating] = useState(false);
  const [name, setName] = useState("");

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/dashboard`, {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        });
        setName(response.data.user_name);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  const logout = () => {
    setLogoutAnimating(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setAuth(false);
    }, 2000);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="#FFFFFF"
    >
      <AppBar position="sticky" sx={{ bgcolor: "green" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <img
              src={logo}
              alt="UTVT Logo"
              style={{ height: 50, marginRight: 16 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ffffff" }}
            >
              Universidad Tecnológica del Valle de Toluca
            </Typography>
          </Box>

          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, color: "#ffffff" }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box
            display="flex"
            gap={2}
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Button
              startIcon={<PollIcon />}
              component={Link} 
              to="/encuesta"
              sx={{ color: "#ffffff" }}
            >
              Encuesta
            </Button>
            <Button
              startIcon={<WorkIcon />}
              component={Link} 
              to="/oferts-job"
              sx={{ color: "#ffffff" }}
            >
              Oferta de Trabajo
            </Button>
          </Box>

          <Button
            color="inherit"
            onClick={logout}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: logoutAnimating ? "#f44336" : "#4caf50",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              ":hover": {
                backgroundColor: logoutAnimating ? "#d32f2f" : "#388e3c",
                transform: "scale(1.05)",
              },
              opacity: logoutAnimating ? 0.7 : 1,
              paddingX: 3,
              paddingY: 1,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            {logoutAnimating ? "Cerrando sesión..." : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250, bgcolor: "#f5f5f5", height: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 50 }} />
          </Box>
          <Divider sx={{ bgcolor: "#1976d2" }} />
          <List sx={{ paddingTop: 0 }}>
            {/* Enlace Encuesta */}
            <ListItem
              button
              component={Link}
              to="/encuesta"
              sx={{
                paddingY: 1.5,
                borderRadius: 2,
                ":hover": {
                  bgcolor: "#1976d2",
                  color: "#ffffff",
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <PollIcon
                sx={{ marginRight: 2, color: "#1976d2", fontSize: 26 }}
              />
              <ListItemText
                primary="Encuesta"
                sx={{ color: "#333", fontWeight: 600 }}
              />
            </ListItem>

            <Divider sx={{ bgcolor: "#1976d2", marginY: 0.5 }} />

            {/* Enlace Oferta de Trabajo */}
            <ListItem
              button
              component={Link}
              to="/oferts-job"
              sx={{
                paddingY: 1.5,
                borderRadius: 2,
                ":hover": {
                  bgcolor: "#1976d2",
                  color: "#ffffff",
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <WorkIcon
                sx={{ marginRight: 2, color: "#1976d2", fontSize: 26 }}
              />
              <ListItemText
                primary="Oferta de Trabajo"
                sx={{ color: "#333", fontWeight: 600 }}
              />
            </ListItem>

            <Divider sx={{ bgcolor: "#1976d2", marginY: 0.5 }} />

            {/* Botón Cerrar Sesión */}
            <ListItem
              button
              onClick={logout}
              sx={{
                bgcolor: "#f44336",
                ":hover": {
                  bgcolor: "#d32f2f",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
                borderRadius: 2,
                marginTop: 2,
                paddingY: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: "#ffffff", fontSize: 26 }} />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar Sesión"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 16,
                  letterSpacing: 1,
                }}
              />
            </ListItem>
          </List>

          {/* Footer */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#1976d2",
              color: "#ffffff",
              padding: 1.5,
              textAlign: "center",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <Typography variant="body2">
              UTVT - Todos los derechos reservados © {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Drawer>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            fontWeight="bold"
          >
            Bienvenid@ {name}
          </Typography>
        </Slide>

        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#ecf0f1" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={ofertaeducativa}
                  alt="Oferta Educativa"
                />
                <CardContent>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    Modelo Educativo
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Actualmente la Universidad Tecnológica del Valle de Toluca,
                    cuenta con los siguientes Programas Educativos que atienden
                    las necesidades del Sector Productivo de la Región:
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component="a"
                    href="https://utvt.edomex.gob.mx/node/234"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Visitar Página de la UTVT
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#ecf0f1" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={fondoutvt}
                  alt="Sistema de Calificaciones"
                />
                <CardContent>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    Sistema de Calificaciones (SAIIUT)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Accede con tu cuenta de la universidad para consultar tus
                    calificaciones.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component="a"
                    href="http://saiiut.utvtol.edu.mx/"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Visita nuestro sitio
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#ecf0f1" }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    Ubicación
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Dirección de la universidad y cómo llegar.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component="a"
                    href="https://goo.gl/maps/NTz7d34cP6Nn5rn57"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Ver Mapa
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
