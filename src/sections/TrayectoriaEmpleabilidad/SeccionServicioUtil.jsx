import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionServicioUtil = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 3 }}>
          8.- El servicio social fue útil en los siguientes aspectos?
        </Typography>

        {/* Contenedor Grid en modo horizontal */}
        <Grid container spacing={4} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="La aplicación de conocimientos en la solución de problemas del área"
              opciones={["Si", "No"]}
              seleccion={formData.aplicacionconocimientos}
              onChange={(respuesta) => HandleInputChange("aplicacionconocimientos", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="El ejercicio de valores, habilidades y actitudes para relacionarse con las personas"
              opciones={["Si", "No"]}
              seleccion={formData.ejercicio}
              onChange={(respuesta) => HandleInputChange("ejercicio", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="La adquisición de conocimientos nuevos"
              opciones={["Si", "No"]}
              seleccion={formData.conocimientosnuevos}
              onChange={(respuesta) => HandleInputChange("conocimientosnuevos", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="Ser contratado en la empresa posteriormente"
              opciones={["Si", "No"]}
              seleccion={formData.contratado}
              onChange={(respuesta) => HandleInputChange("contratado", respuesta)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PreguntaRadioGroup
              pregunta="Vincularte con otras opciones de empleo"
              opciones={["Si", "No"]}
              seleccion={formData.vincularse}
              onChange={(respuesta) => HandleInputChange("vincularse", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionServicioUtil;
