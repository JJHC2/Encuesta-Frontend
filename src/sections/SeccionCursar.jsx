import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionCursar = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>
          6.- Si tuvieras que cursar nuevamente tu licenciatura u otra
          ¿Eligirias inscribirte en la UTVT?
        </h4>
        <PreguntaRadioGroup
          pregunta="Selecciona una opción"
          opciones={["Si", "No"]}
          seleccion={formData.cursar}
          onChange={(respuesta) => HandleInputChange("cursar", respuesta)}
        />
      </section>
    </div>
  );
};

export default SeccionCursar;
