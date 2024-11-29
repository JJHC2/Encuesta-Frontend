import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionTrabajo = ({ formData, HandleInputChange }) => {
  return (
    <Box mb={3}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Programa de Trayectorias de Empleabilidad Profesional (ProTEP)
        </Typography>
        <Typography variant="h6" gutterBottom>
          Trayectoria Profesional
        </Typography>

        <Grid container spacing={3} direction="row">
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="13.- Trabajas Actualmente?"
              opciones={["Si", "No"]}
              seleccion={formData.trabajas}
              onChange={(respuesta) => HandleInputChange("trabajas", respuesta)}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1rem", // tamaño de texto en pantallas pequeñas
                    sm: "1.2rem", // tamaño de texto en pantallas medianas
                    md: "1.5rem", // tamaño de texto en pantallas grandes
                  },
                  wordBreak: "break-word", // para evitar que el texto se salga de la card
                }}
              >
                14. Califica del 1 (nada importante o no influyente) al 5 (muy importante o muy influyente) las razones o los factores que hicieron que te contratarán: (excepto becarios, autónomos por cuenta propia y dueños de negocio propio o familiar)
              </Typography>
            </Box>
          </Grid>

          {/* Las siguientes preguntas estarán en una fila horizontal */}
          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Los conocimientos teóricos"
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.conocimientosteoricos}
              onChange={(respuesta) => HandleInputChange("conocimientosteoricos", respuesta)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Los conocimientos prácticos"
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.conocimientospracticos}
              onChange={(respuesta) => HandleInputChange("conocimientospracticos", respuesta)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="Dominio del inglés"
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.dominioingles}
              onChange={(respuesta) => HandleInputChange("dominioingles", respuesta)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="La formación en el uso de la informática y de las nuevas tecnologías"
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.formacioninformatica}
              onChange={(respuesta) => HandleInputChange("formacioninformatica", respuesta)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="La manera de ser: personalidad, habilidades sociales, comunicación..."
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.personalidad}
              onChange={(respuesta) => HandleInputChange("personalidad", respuesta)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <PreguntaRadioGroup
              pregunta="La capacidad de gestión y planificación"
              opciones={["1", "2", "3", "4", "5"]}
              seleccion={formData.capacidadgestion}
              onChange={(respuesta) => HandleInputChange("capacidadgestion", respuesta)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeccionTrabajo;
