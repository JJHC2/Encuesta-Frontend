import React from "react";
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SeccionInfoInteres = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Programa de Trayectorias de Empleabilidad Profesional (ProTEP)
      </Typography>
      <Typography variant="h6" gutterBottom>
        Información de interés
      </Typography>

      {/* Pregunta 20 como Select */}
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>20. Información de interés que deseas conocer</InputLabel>
        <Select
          value={formData.infointeres}
          onChange={(e) => HandleInputChange("infointeres", e.target.value)}
          label="20. Información de interés que deseas conocer"
        >
          {[
            "Beneficios a Alumniversitarios",
            "Cursos de empleabilidad",
            "Resultados estadísticos de estudios anteriores de egresados",
            "Modalidades de titulación",
            "Encuentros y actividades universitarias",
            "Encuentros y actividades artísticas y culturales",
            "Cursos de formación continua",
          ].map((opcion, index) => (
            <MenuItem key={index} value={opcion}>
              {opcion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Pregunta 21 en formato de texto */}
      <div style={{ marginBottom: "24px" }}>
        <Typography variant="body1" component="label" gutterBottom>
          21. Comparte con la UTVT algunos de tus logros en el ámbito profesional o personal
        </Typography>
        <TextField
          value={formData.logros || ""}
          onChange={(e) => HandleInputChange("logros", e.target.value)}
          placeholder="Escribe aquí tus logros"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          style={{
            marginBottom: "8px",
            fontSize: "1rem",
          }}
          inputProps={{
            maxLength: 500,
          }}
        />
        <Typography variant="body2" color="textSecondary" align="right">
          {formData.logros?.length || 0}/500 caracteres
        </Typography>
      </div>
    </div>
  );
};

export default SeccionInfoInteres;
