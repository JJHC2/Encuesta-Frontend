import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionGradoSatisfaccion = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          ¿Cuál es tu grado de satisfacción? respecto a:
        </Typography>

        <Grid container sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="El desarrollo de tu carrera profesional"
              opciones={[
                "Nada Satisfecho",
                "Poco Satisfecho",
                "Satisfecho",
                "Muy Satisfecho",
              ]}
              seleccion={formData.carreraProfesional}
              onChange={(respuesta) =>
                HandleInputChange("carreraProfesional", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="La formación recibida en la UTVT"
              opciones={[
                "Nada Satisfecho",
                "Poco Satisfecho",
                "Satisfecho",
                "Muy Satisfecho",
              ]}
              seleccion={formData.formacion}
              onChange={(respuesta) => HandleInputChange("formacion", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionGradoSatisfaccion;
