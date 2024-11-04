import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionServicios = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>
          4 . En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
          siguientes aspectos de servicios? *
        </h4>
        <PreguntaRadioGroup
          pregunta="Servicios de Biblioteca"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.serviciosBiblioteca}
          onChange={(respuesta) =>
            HandleInputChange("serviciosBiblioteca", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Apoyo en el proceso de titulación"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.apoyoTitulacion}
          onChange={(respuesta) => {
            HandleInputChange("apoyoTitulacion", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Trámites de servicio social y prácticas profesionales"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.tramitesServicioSocial}
          onChange={(respuesta) => {
            HandleInputChange("tramitesServicioSocial", respuesta);
          }}
        />
        <PreguntaRadioGroup
        pregunta="Servicios de control escolar"
        opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
        seleccion={formData.serviciosControl}
        onChange={(respuesta) => {
          HandleInputChange("serviciosControl", respuesta);
        }}/>
        <PreguntaRadioGroup
        pregunta="Promoción de la bolsa de trabajo de la Universidad"
        opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
        seleccion={formData.promocion}
        onChange={(respuesta) => {
          HandleInputChange("promocion", respuesta);
        }}/>
      </section>
    </div>
  );
};

export default SeccionServicios;
