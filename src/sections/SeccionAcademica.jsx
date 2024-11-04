import React from "react";
import PreguntaRadioGroup from "../components/Encuesta/PreguntaRadioGroup";
const SeccionAcademica = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section className="mb-5">
        <span>
          El presente cuestionario servirá para mejorar los planes de estudio, y
          ayudará en la toma de decisiones para la evaluación curricular. Por lo
          que agradecemos tanto de la veracidad de tus respuestas, como del
          tiempo dedicado en ello.
        </span>
        <h4 className="mb-4">
          1 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
          siguientes aspectos académicos? *
        </h4>
        <PreguntaRadioGroup
          pregunta="Capacidad y cumplimiento de los docentes"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.capacidadDocentes}
          onChange={(respuesta) =>
            HandleInputChange("capacidadDocentes", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Docentes con estudios de posgrado (Especialidad, Maestrías o Doctorados)."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.docentesPostgrado}
          onChange={(respuesta) =>
            HandleInputChange("docentesPostgrado", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Docentes con experiencia profesional."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.docentesExperiencia}
          onChange={(respuesta) =>
            HandleInputChange("docentesExperiencia", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Contenidos teóricos, metodológicos y técnicos del plan de estudio."
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.contenidosTeoricos}
          onChange={(respuesta) =>
            HandleInputChange("contenidosTeoricos", respuesta)
          }
        />
        <PreguntaRadioGroup
          pregunta="Suficiencia en el desarrollo de prácticas de laboratorio, talleres, campos clínicos, prácticas de campo, otras"
          opciones={["Insatisfactoria", "Regular", "Buena", "Excelente"]}
          seleccion={formData.desarrolloPracticas}
          onChange={(respuesta) => {
            HandleInputChange("desarrolloPracticas", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionAcademica;
