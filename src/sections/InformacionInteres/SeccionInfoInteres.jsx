import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionInfoInteres = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <h1>Programa de Trayectorias de Empleabilidad Profesional (ProTEP)</h1>
      <h3>Información de interés</h3>
      <PreguntaRadioGroup
        pregunta="Información de interés que deseas conocer"
        opciones={[
          "Beneficios a Alumniversitarios",
          "Cursos de empleabilidad",
          "Resultados estadísticos de estudios anteriores de egresados",
          "Modalidades de titulación",
          "Encuentros y actividades universitarias",
          "Encuentros y actividades artísticas y culturales",
          "Cursos de formación continua",
        ]}
        seleccion={formData.infointeres}
        onChange={(respuesta) => HandleInputChange("infointeres", respuesta)}
      />
      <div style={{ marginBottom: "24px" }}>
        <label
          style={{
            display: "block",
            fontSize: "1.1rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          21. Comparte con la UTVT algunos de tus logros en el ámbito
          profesional o personal
        </label>
        <textarea
          value={formData.logros || ""}
          onChange={(e) => HandleInputChange("logros", e.target.value)}
          placeholder="Escribe aquí tus logros"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            fontSize: "1rem",
            color: "#333",
            resize: "none",
            minHeight: "120px",
            transition: "border-color 0.3s ease",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <p
          style={{
            textAlign: "right",
            fontSize: "0.9rem",
            color: "#666",
            marginTop: "4px",
          }}
        >
          {formData.logros?.length || 0}/500 caracteres
        </p>
      </div>
    </div>
  );
};

export default SeccionInfoInteres;
