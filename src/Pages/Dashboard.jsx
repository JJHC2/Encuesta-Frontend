import React, { Fragment } from "react";
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
import Slider from "react-slick";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/image/utvtfondo.jpg";
import utvtImage from "../assets/image/alumnos.jpg";
import ofertaeducativa from "../assets/image/Ofertaeducativa.jpg";

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: "#3b5998", // Azul oscuro
    },
    secondary: {
      main: "#f39c12", // Naranja
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" minHeight="100vh" bgcolor="background.default">
        {/* Sidebar estilizado */}
        <Box
          sx={{
            width: { xs: "100%", sm: "250px" }, // Sidebar se oculta en pantallas xs
            bgcolor: "primary.main",
            color: "white",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            display: { xs: "none", sm: "flex" }, // Oculatar en xs
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Menú de Usuario
          </Typography>
          <Button
            component={Link}
            to="/encuesta"
            color="inherit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Encuesta
          </Button>
          <Button
            component={Link}
            to="/oferts-job"
            color="inherit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Ofertas de trabajo
          </Button>
          <Button
            onClick={logout}
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 4 }}
          >
            Logout
          </Button>
        </Box>

        {/* Contenido principal */}
        <Box
          flex={1}
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* Slider Promocional */}
          <Box sx={{ width: "100%", maxWidth: 1100, mb: 4 }}>
            <Slider {...sliderSettings}>
              <Box>
                <CardMedia
                  component="img"
                  height="400"
                  image={logo}
                  alt="Imagen de UTVT"
                />
              </Box>
              <Box>
                <CardMedia
                  component="img"
                  height="400"
                  image={utvtImage}
                  alt="Otra imagen de UTVT"
                />
              </Box>
            </Slider>
          </Box>

          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            color="primary.main"
            fontWeight="bold"
          >
            Bienvenido a la pantalla principal de usuario
          </Typography>

          {/* Grid de Cards Responsivas */}
          <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
            {/* Card de Opciones */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ofertaeducativa}
                    alt="Universidad Tecnológica del Valle de Toluca"
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      Modelo Educativo
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      Actualmente la Universidad Tecnológica del Valle de
                      Toluca, cuenta con los siguientes Programas Educativos que
                      atienden las necesidades del Sector Productivo de la
                      Región:
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
                      Visitar Pagina de la UTVT
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            {/* Card Promocional de la UTVT */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={logo}
                    alt="Universidad Tecnológica del Valle de Toluca"
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      Sistema de Calificaciones (SAIIUT)
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
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

            {/* Otra Card de Ejemplo */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ borderRadius: 3 }}>
                <Card sx={{ boxShadow: 4 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      Ubicación
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      La Universidad Tecnológica del Valle de Toluca se
                      encuentra ubicada en la dirección:
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
