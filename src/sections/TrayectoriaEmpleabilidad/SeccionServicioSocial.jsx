import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionServicioSocial = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h1>Programa de Trayectorias de Empleabilidad Profesional (ProTEP)</h1>
        <h4>7.- Servicio social y prácticas profesionales</h4>
        <PreguntaRadioGroup
          pregunta="El servicio social estuvo de acuerdo con tu perfil profesional"
          opciones={["Si", "No"]}
          seleccion={formData.serviciosocial}
          onChange={(respuesta) => {
            HandleInputChange("serviciosocial", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Las prácticas profesionales fueron de acuerdo con tu perfil"
          opciones={["Si", "No"]}
          seleccion={formData.practicas}
          onChange={(respuestas) => {
            HandleInputChange("practicas", respuestas);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionServicioSocial;
