import React from "react";
import { Box, Typography, Paper } from "@mui/material";
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

        <PreguntaRadioGroup
          pregunta="13.- Trabajas Actualmente?"
          opciones={["Si", "No"]}
          seleccion={formData.trabajas}
          onChange={(respuesta) => HandleInputChange("trabajas", respuesta)}
        />

        <Typography variant="h6" gutterBottom>
          14. Califica del 1 (nada importante o no influyente) al 5 (muy importante o muy influyente) las razones o los factores que hicieron que te contratarán: (excepto becarios, autónomos por cuenta propia y dueños de negocio propio o familiar)
        </Typography>

       
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 2 }}>
          <PreguntaRadioGroup
            pregunta="Los conocimientos teóricos"
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.conocimientosteoricos}
            onChange={(respuesta) => HandleInputChange("conocimientosteoricos", respuesta)}
          />
          <PreguntaRadioGroup
            pregunta="Los conocimientos prácticos"
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.conocimientospracticos}
            onChange={(respuesta) => HandleInputChange("conocimientospracticos", respuesta)}
          />
          <PreguntaRadioGroup
            pregunta="Dominio del inglés"
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.dominioingles}
            onChange={(respuesta) => HandleInputChange("dominioingles", respuesta)}
          />
          <PreguntaRadioGroup
            pregunta="La formación en el uso de la informática y de las nuevas tecnologías"
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.formacioninformatica}
            onChange={(respuesta) => HandleInputChange("formacioninformatica", respuesta)}
          />
          <PreguntaRadioGroup
            pregunta="La manera de ser: personalidad, habilidades sociales, comunicación..."
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.personalidad}
            onChange={(respuesta) => HandleInputChange("personalidad", respuesta)}
          />
          <PreguntaRadioGroup
            pregunta="La capacidad de gestión y planificación"
            opciones={["1", "2", "3", "4", "5"]}
            seleccion={formData.capacidadgestion}
            onChange={(respuesta) => HandleInputChange("capacidadgestion", respuesta)}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SeccionTrabajo;
