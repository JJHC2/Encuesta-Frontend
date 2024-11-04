import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionInfraestructura = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4 className="mb-4">
          2 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
          siguientes aspectos de infraestructura?{" "}
        </h4>
        <PreguntaRadioGroup
          pregunta="Infraestructura (aulas, auditorios, sala de auto acceso, sala de cómputo, cubículos, etc.)"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.infraestructura}
          onChange={(respuesta) => {
            HandleInputChange("infraestructura", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Infraestructura para la actividad física y de recreación."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.infraestructuraActividad}
          onChange={(respuesta) => {
            HandleInputChange("infraestructuraActividad", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Equipamiento de laboratorios y talleres."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.equipamiento}
          onChange={(respuesta) => {
            HandleInputChange("equipamiento", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Acceso a equipos de cómputo suficientes y actualizados"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.acceso}
          onChange={(respuesta) => {
            HandleInputChange("acceso", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Acceso a servicios de cómputo(acceso a internet y software especializado)"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.accesoServicios}
          onChange={(respuesta) => {
            HandleInputChange("accesoServicios", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Suficiencia de acervo bibliografico"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.suficienciaAcervo}
          onChange={(respuesta) => {
            HandleInputChange("suficienciaAcervo", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionInfraestructura;
