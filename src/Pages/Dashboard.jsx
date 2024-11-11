import React from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/image/utvtfondo.jpg";
import utvtImage from "../assets/image/alumnos.jpg";
import ofertaeducativa from "../assets/image/Ofertaeducativa.jpg";

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: "#3b5998",
    },
    secondary: {
      main: "#f39c12",
    },
    background: {
      default: "#f4f6f9",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const Dashboard = ({ setAuth }) => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" minHeight="100vh" bgcolor="background.default" p={4}>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h4"
            gutterBottom
            color="primary.main"
            fontWeight="bold"
          >
            Bienvenido a la pantalla principal de usuario
          </Typography>

          {/* Botones de navegación */}
          <Box mb={4} display="flex" gap={2}>
            <Button
              component={Link}
              to="/encuesta"
              variant="contained"
              color="primary"
            >
              Encuesta
            </Button>
            <Button
              component={Link}
              to="/oferts-job"
              variant="contained"
              color="primary"
            >
              Ofertas de trabajo
            </Button>
            <Button
              onClick={logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </Box>

          {/* Grid de Cards Responsivas */}
          <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
            {/* Card de Modelo Educativo */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ofertaeducativa}
                    alt="Modelo Educativo"
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      Modelo Educativo
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Actualmente la Universidad Tecnológica del Valle de
                      Toluca cuenta con los siguientes Programas Educativos que
                      atienden las necesidades del Sector Productivo de la Región.
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

            {/* Card del Sistema de Calificaciones */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={logo}
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

            {/* Card de Ubicación */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      Ubicación
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      La Universidad Tecnológica del Valle de Toluca se encuentra
                      ubicada en la dirección:
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component="a"
                      href="https://www.utvt.edu.mx/programas"
                      target="_blank"
                      color="primary"
                      fullWidth
                    >
                      Programas
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
