import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionTrabajo = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h1>Programa de Trayectorias de Empleabilidad Profesional (ProTEP)</h1>
        <h4>Trayectoria Profesional</h4>
      </section>
      <PreguntaRadioGroup
        pregunta="13.- Trabajas Actualmente?"
        opciones={["Si", "No"]}
        seleccion={formData.trabajas}
        onChange={(respuesta) => {
          HandleInputChange("trabajas", respuesta);
        }}
      />
      <h4>
        14 . Califica del 1 (nada importante o no influyente) al 5 (muy
        importante o muy influyente) las razones o los factores que hicieron que
        te contratarán: (excepto becarios, autónomos por cuenta propia y dueños
        de negocio propio o familiar)
      </h4>
      <PreguntaRadioGroup
        pregunta="Los conocimientos teóricos"
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.conocimientosteoricos}
        onChange={(respuesta) => {
          HandleInputChange("conocimientosteoricos", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="Los conocimientos practícos"
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.conocimientospracticos}
        onChange={(respuesta) => {
          HandleInputChange("conocimientospracticos", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="Dominio del ingles"
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.dominioingles}
        onChange={(respuesta) => {
          HandleInputChange("dominioingles", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="La formación en el uso de la informática y de las nuevas tecnologías"
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.formacioninformatica}
        onChange={(respuesta) => {
          HandleInputChange("formacioninformatica", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="La manera de ser: personalidad, habilidades sociales, comunicación..."
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.personalidad}
        onChange={(respuesta) => {
          HandleInputChange("personalidad", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="La capacidad de gestión y planificación"
        opciones={["1", "2", "3", "4", "5"]}
        seleccion={formData.capacidadgestion}
        onChange={(respuesta) => {
          HandleInputChange("capacidadgestion", respuesta);
        }}
      />
    </div>
  );
};

export default SeccionTrabajo;
