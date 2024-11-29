import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";

const SeccionServicios = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
          4. En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los siguientes aspectos de servicios? *
        </Typography>

        <Grid container sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Servicios de Biblioteca"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.serviciosBiblioteca}
              onChange={(respuesta) =>
                HandleInputChange("serviciosBiblioteca", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Apoyo en el proceso de titulación"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.apoyoTitulacion}
              onChange={(respuesta) =>
                HandleInputChange("apoyoTitulacion", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Trámites de servicio social y prácticas profesionales"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.tramitesServicioSocial}
              onChange={(respuesta) =>
                HandleInputChange("tramitesServicioSocial", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Servicios de control escolar"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.serviciosControl}
              onChange={(respuesta) =>
                HandleInputChange("serviciosControl", respuesta)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <PreguntaRadioGroup
              pregunta="Promoción de la bolsa de trabajo de la Universidad"
              opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
              seleccion={formData.promocion}
              onChange={(respuesta) =>
                HandleInputChange("promocion", respuesta)
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionServicios;
