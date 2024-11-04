import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionProgramas = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h4>
          3 . En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
          siguientes aspectos de programas?{" "}
        </h4>
        <PreguntaRadioGroup
          pregunta="Programa de Tutoria Academica"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.tutoriaAcademica}
          onChange={(respuesta) =>
            HandleInputChange("tutoriaAcademica", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Programa de Asesoría y mentoría académica"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.asesoriaMentoria}
          onChange={(respuesta) =>
            HandleInputChange("asesoriaMentoria", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Programas de movilidad (intrainstitucional, nacional e internacional)"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.movilidad}
          onChange={(respuesta) => {
            HandleInputChange("movilidad", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Programas de becas"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.becas}
          onChange={(respuesta) => {
            HandleInputChange("becas", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="Actividades de formación integral (cuidado de la salud, promoción de la cultura, fomento al deporte, actividades artísticas, otras)."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.formacionIntegral}
          onChange={(respuesta) => {
            HandleInputChange("formacionIntegral", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionProgramas;
