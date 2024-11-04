import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionServicioUtil = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>8.- El servicio social fue útil en los siguientes aspectos?</h4>
        <PreguntaRadioGroup
          pregunta="La aplicación de conocimientos en la solución de problemas del área"
          opciones={["Si", "No"]}
          seleccion={formData.aplicacionconocimientos}
          onChange={(respuesta) => {
            HandleInputChange("aplicacionconocimientos", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="El ejercicio de valores, habilidades y actitudes para relacionarse con las personas"
          opciones={["Si", "No"]}
          seleccion={formData.ejercicio}
          onChange={(respuesta) => {
            HandleInputChange("ejercicio", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="La adquisición de conocimientos nuevos"
          opciones={["Si", "No"]}
          seleccion={formData.conocimientosnuevos}
          onChange={(respuesta) => {
            HandleInputChange("conocimientosnuevos", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Ser contratado en la empresa posteriormente"
          opciones={["Si", "No"]}
          seleccion={formData.contratado}
          onChange={(respuesta) => {
            HandleInputChange("contratado", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Vincularte con otras opciones de empleo"
          opciones={["Si", "No"]}
          seleccion={formData.vincularse}
          onChange={(respuesta) => {
            HandleInputChange("vincularse", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionServicioUtil;
