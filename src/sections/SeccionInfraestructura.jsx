import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionInfraestructura = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          2. En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los siguientes aspectos de infraestructura?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Infraestructura (aulas, auditorios, sala de auto acceso, sala de cómputo, cubículos, etc.)"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.infraestructura}
              onChange={(respuesta) => HandleInputChange("infraestructura", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Infraestructura para la actividad física y de recreación."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.infraestructuraActividad}
              onChange={(respuesta) => HandleInputChange("infraestructuraActividad", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Equipamiento de laboratorios y talleres."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.equipamiento}
              onChange={(respuesta) => HandleInputChange("equipamiento", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Acceso a equipos de cómputo suficientes y actualizados"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.acceso}
              onChange={(respuesta) => HandleInputChange("acceso", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Acceso a servicios de cómputo (acceso a internet y software especializado)"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.accesoServicios}
              onChange={(respuesta) => HandleInputChange("accesoServicios", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Suficiencia de acervo bibliográfico"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.suficienciaAcervo}
              onChange={(respuesta) => HandleInputChange("suficienciaAcervo", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionInfraestructura;
