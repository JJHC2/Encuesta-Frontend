import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionProgramas = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          3. En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los siguientes aspectos de programas?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Programa de Tutoria Academica"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.tutoriaAcademica}
              onChange={(respuesta) => HandleInputChange("tutoriaAcademica", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Programa de Asesoría y mentoría académica"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.asesoriaMentoria}
              onChange={(respuesta) => HandleInputChange("asesoriaMentoria", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Programas de movilidad (intrainstitucional, nacional e internacional)"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.movilidad}
              onChange={(respuesta) => HandleInputChange("movilidad", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Programas de becas"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.becas}
              onChange={(respuesta) => HandleInputChange("becas", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Actividades de formación integral (cuidado de la salud, promoción de la cultura, fomento al deporte, actividades artísticas, otras)."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.formacionIntegral}
              onChange={(respuesta) => HandleInputChange("formacionIntegral", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionProgramas;
