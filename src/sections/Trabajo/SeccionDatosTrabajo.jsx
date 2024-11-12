import React from "react";
import { Box, Typography, TextField, Grid, Paper } from "@mui/material";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";

const SeccionDatosTrabajo = ({ formData, HandleInputChange }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: 3 }}>
          15. Nombre de la empresa, institución u organismo donde laboras
        </Typography>
        <TextField
          fullWidth
          label="Nombre de la Empresa"
          variant="outlined"
          value={formData.empresa || ""}
          onChange={(e) => HandleInputChange("empresa", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <PreguntaRadioGroup
          pregunta="16. Régimen jurídico al que pertenece la empresa, institución u organización en la que trabajas:"
          opciones={[
            "Sector Público",
            "Sector Privado",
            "Sector Social(ONG,Patronato)",
            "Autoempleados",
            "Empresa Propia",
          ]}
          seleccion={formData.regimen}
          onChange={(respuesta) => HandleInputChange("regimen", respuesta)}
        />

        <PreguntaRadioGroup
          pregunta="17. Indica el nivel de relación que tienen las actividades laborales que desempeñas con tu formación profesional"
          opciones={["20%", "40%", "60%", "80%", "100%"]}
          seleccion={formData.actividadeslaborales}
          onChange={(respuesta) => HandleInputChange("actividadeslaborales", respuesta)}
        />

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          18. Indica el mes y año de la contratación de tu empleo actual
        </Typography>
        <TextField
          fullWidth
          label="Mes y Año de Contratación"
          variant="outlined"
          value={formData.fechacontratacion || ""}
          onChange={(e) => HandleInputChange("fechacontratacion", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          19. La UTVT está realizando un estudio sobre opinión de empleadores, si consideras que tu jefe inmediato participaría, proporciona una forma de contactarlo
        </Typography>
        <TextField
          fullWidth
          label="Nombre del Jefe"
          variant="outlined"
          value={formData.nombrejefe || ""}
          onChange={(e) => HandleInputChange("nombrejefe", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label="Cargo del Jefe"
          variant="outlined"
          value={formData.cargojefe || ""}
          onChange={(e) => HandleInputChange("cargojefe", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label="Correo del Jefe"
          variant="outlined"
          value={formData.correojefe || ""}
          onChange={(e) => HandleInputChange("correojefe", e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label="Teléfono del Jefe"
          variant="outlined"
          value={formData.telefono || ""}
          onChange={(e) => HandleInputChange("telefono", e.target.value)}
          type="number"
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label="Extensión del Jefe"
          variant="outlined"
          value={formData.extencion || ""}
          onChange={(e) => HandleInputChange("extencion", e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </Paper>
    </Box>
  );
};

export default SeccionDatosTrabajo;
