import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionPostgrado = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
          Programa de Trayectorias de Empleabilidad Profesional (ProTEP)
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Posgrado
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="10.- Has considerado cursar un posgrado en la UTVT?"
              opciones={["Si", "No"]}
              seleccion={formData.recursar}
              onChange={(respuesta) => HandleInputChange("recursar", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="11.- En ¿Cuál espacio académico?"
              opciones={[
                "Antropología", "Arquitectura y Diseño", "Artes Visuales", "Biología", "Ciencias de la Comunicación",
                "Ciencias de la Educación", "Ciencias de la Salud", "Ciencias de la Tierra", "Ciencias de la Vida",
                "Ciencias Económico Administrativas", "Ciencias Exactas", "Ciencias Sociales", "Derecho", "Diseño",
                "Economía", "Enfermería", "Filosofía", "Física", "Geografía", "Historia", "Ingeniería", "Lenguas",
                "Matemáticas", "Medicina", "Música", "Nutrición", "Odontología", "Optometría", "Pedagogía, Psicopedagogía",
                "Psicología", "Química", "Sociología", "Trabajo Social"
              ]}
              seleccion={formData.espacioacademico}
              onChange={(respuesta) => HandleInputChange("espacioacademico", respuesta)}
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="12.-¿Cuál es el postgrado de tu interés?"
              opciones={[
                "Maestría en Ciencias Ambientales", "Maestría en Ciencias de la Ingenieria", "Maestría en Ciencias de la Salud",
                "Maestría en Ciencias de la Tierra", "Maestría en Ciencias de la Vida", "Maestría en Ciencias Económico Administrativas",
                "Maestría en Ciencias Exactas", "Maestría en Ciencias Sociales", "Doctorado en Ciencias Ambientales",
                "Doctorado en Ciencias de la Ingenieria", "Doctorado en Ciencias de la Salud", "Doctorado en Ciencias de la Tierra"
              ]}
              seleccion={formData.posgradointeres}
              onChange={(respuesta) => HandleInputChange("posgradointeres", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionPostgrado;
