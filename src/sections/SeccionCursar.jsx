import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionCursar = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          6.- Si tuvieras que cursar nuevamente tu licenciatura u otra, ¿Eligirías inscribirte en la UTVT?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Selecciona una opción"
              opciones={["Si", "No"]}
              seleccion={formData.cursar}
              onChange={(respuesta) => HandleInputChange("cursar", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionCursar;
