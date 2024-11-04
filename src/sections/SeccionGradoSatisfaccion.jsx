import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionGradoSatisfaccion = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>¿Cuál es tu grado de satisfacción? respecto a: </h4>
        <PreguntaRadioGroup
          pregunta="El desarrollo de tu carrera profesional"
          opciones={[
            "Nada Satisfecho",
            "Poco Satisfecho",
            "Satisfecho",
            "Muy Satisfecho",
          ]}
          seleccion={formData.carreraProfesional}
          onChange={(respuesta) =>
            HandleInputChange("carreraProfesional", respuesta)
          }
        />
        <PreguntaRadioGroup
        pregunta="La formacion recibida en la UTVT"
        opciones={[
            "Nada Satisfecho",
            "Poco Satisfecho",
            "Satisfecho",
            "Muy Satisfecho",
          ]}
          seleccion={formData.formacion}
          onChange={(respuesta) =>{
            HandleInputChange("formacion", respuesta);
          }}/>
      </section>
    </div>
  );
};

export default SeccionGradoSatisfaccion;
