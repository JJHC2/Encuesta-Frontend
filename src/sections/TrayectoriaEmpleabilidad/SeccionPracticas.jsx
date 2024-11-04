import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionPracticas = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>
          9.- Las practicas profesionales fueron útiles en los siguientes
          aspectos?
        </h4>
        <PreguntaRadioGroup
          pregunta="La aplicación de conocimientos en la solución de problemas del área"
          opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
          seleccion={formData.aplicacionconocimientos}
          onChange={(respuesta) => {
            HandleInputChange("aplicacionconocimientos", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="El ejercicio de valores, habilidades y actitudes para relacionarse con las personas"
          opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
          seleccion={formData.habilidades}
          onChange={(respuesta) => {
            HandleInputChange("habilidades", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="La adquisición de conocimientos nuevos"
          opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
          seleccion={formData.adquisicion}
          onChange={(respuesta) => {
            HandleInputChange("adquisicion", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Ser contratado por la empresa posteriomente"
          opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
          seleccion={formData.contratacion}
          onChange={(respuesta) => {
            HandleInputChange("contratacion", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Vincularte con otras opciones de empleo"
          opciones={["Muy útil", "Útil", "Poco útil", "Nada útil"]}
          seleccion={formData.opcionesempleo}
          onChange={(respuesta) => {
            HandleInputChange("opcionesempleo", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionPracticas;
