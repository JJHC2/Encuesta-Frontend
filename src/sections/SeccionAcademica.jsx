import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionAcademica = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 2 }}>
          El presente cuestionario servirá para mejorar los planes de estudio, y ayudará en la toma de decisiones para la evaluación curricular. Por lo que agradecemos tanto de la veracidad de tus respuestas, como del tiempo dedicado en ello.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          1. En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los siguientes aspectos académicos? *
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Capacidad y cumplimiento de los docentes"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.capacidadDocentes}
              onChange={(respuesta) =>
                HandleInputChange("capacidadDocentes", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Docentes con estudios de posgrado (Especialidad, Maestrías o Doctorados)."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.docentesPostgrado}
              onChange={(respuesta) =>
                HandleInputChange("docentesPostgrado", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Docentes con experiencia profesional."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.docentesExperiencia}
              onChange={(respuesta) =>
                HandleInputChange("docentesExperiencia", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Contenidos teóricos, metodológicos y técnicos del plan de estudio."
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.contenidosTeoricos}
              onChange={(respuesta) =>
                HandleInputChange("contenidosTeoricos", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Suficiencia en el desarrollo de prácticas de laboratorio, talleres, campos clínicos, prácticas de campo, otras"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.desarrolloPracticas}
              onChange={(respuesta) => {
                HandleInputChange("desarrolloPracticas", respuesta);
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionAcademica;
