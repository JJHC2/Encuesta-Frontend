import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionPracticas = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          9.- Las practicas profesionales fueron útiles en los siguientes aspectos?
        </Typography>

        {/* Contenedor Grid en modo horizontal */}
        <Grid container spacing={4} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="La aplicación de conocimientos en la solución de problemas del área"
              opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
              seleccion={formData.aplicacionconocimientos}
              onChange={(respuesta) => HandleInputChange("aplicacionconocimientos", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="El ejercicio de valores, habilidades y actitudes para relacionarse con las personas"
              opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
              seleccion={formData.habilidades}
              onChange={(respuesta) => HandleInputChange("habilidades", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="La adquisición de conocimientos nuevos"
              opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
              seleccion={formData.adquisicion}
              onChange={(respuesta) => HandleInputChange("adquisicion", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="Ser contratado por la empresa posteriormente"
              opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
              seleccion={formData.contratacion}
              onChange={(respuesta) => HandleInputChange("contratacion", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="Vincularte con otras opciones de empleo"
              opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
              seleccion={formData.opcionesempleo}
              onChange={(respuesta) => HandleInputChange("opcionesempleo", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionPracticas;
