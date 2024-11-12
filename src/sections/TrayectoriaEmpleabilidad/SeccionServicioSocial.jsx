import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionServicioSocial = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 3 }}>
          Programa de Trayectorias de Empleabilidad Profesional (ProTEP)
        </Typography>

        <Typography variant="h6" gutterBottom>
          7.- Servicio social y prácticas profesionales
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="El servicio social estuvo de acuerdo con tu perfil profesional"
              opciones={["Si", "No"]}
              seleccion={formData.serviciosocial}
              onChange={(respuesta) =>
                HandleInputChange("serviciosocial", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Las prácticas profesionales fueron de acuerdo con tu perfil"
              opciones={["Si", "No"]}
              seleccion={formData.practicas}
              onChange={(respuesta) =>
                HandleInputChange("practicas", respuesta)
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionServicioSocial;
