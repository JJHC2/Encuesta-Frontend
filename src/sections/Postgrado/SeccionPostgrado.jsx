import React from "react";
import { Box, Typography, Grid, Paper, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
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
          {/* Pregunta 10 en formato horizontal */}
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="10.- Has considerado cursar un posgrado en la UTVT?"
              opciones={["Si", "No"]}
              seleccion={formData.recursar}
              onChange={(respuesta) => HandleInputChange("recursar", respuesta)}
            />
          </Grid>

          {/* Pregunta 11 como Select */}
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>11.- En ¿Cuál espacio académico?</InputLabel>
              <Select
                value={formData.espacioacademico}
                onChange={(e) => HandleInputChange("espacioacademico", e.target.value)}
                label="11.- En ¿Cuál espacio académico?"
              >
                {[
                  "Antropología", "Arquitectura y Diseño", "Artes Visuales", "Biología", "Ciencias de la Comunicación",
                  "Ciencias de la Educación", "Ciencias de la Salud", "Ciencias de la Tierra", "Ciencias de la Vida",
                  "Ciencias Económico Administrativas", "Ciencias Exactas", "Ciencias Sociales", "Derecho", "Diseño",
                  "Economía", "Enfermería", "Filosofía", "Física", "Geografía", "Historia", "Ingeniería", "Lenguas",
                  "Matemáticas", "Medicina", "Música", "Nutrición", "Odontología", "Optometría", "Pedagogía, Psicopedagogía",
                  "Psicología", "Química", "Sociología", "Trabajo Social"
                ].map((opcion, index) => (
                  <MenuItem key={index} value={opcion}>
                    {opcion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Pregunta 12 como Select */}
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>12.- ¿Cuál es el postgrado de tu interés?</InputLabel>
              <Select
                value={formData.posgradointeres}
                onChange={(e) => HandleInputChange("posgradointeres", e.target.value)}
                label="12.- ¿Cuál es el postgrado de tu interés?"
              >
                {[
                  "Maestría en Ciencias Ambientales", "Maestría en Ciencias de la Ingenieria", "Maestría en Ciencias de la Salud",
                  "Maestría en Ciencias de la Tierra", "Maestría en Ciencias de la Vida", "Maestría en Ciencias Económico Administrativas",
                  "Maestría en Ciencias Exactas", "Maestría en Ciencias Sociales", "Doctorado en Ciencias Ambientales",
                  "Doctorado en Ciencias de la Ingenieria", "Doctorado en Ciencias de la Salud", "Doctorado en Ciencias de la Tierra"
                ].map((opcion, index) => (
                  <MenuItem key={index} value={opcion}>
                    {opcion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionPostgrado;
