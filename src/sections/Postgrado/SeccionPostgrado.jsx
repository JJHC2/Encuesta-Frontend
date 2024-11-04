import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionPostgrado = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <section>
        <h1>Programa de Trayectorias de Empleabilidad Profesional (ProTEP)</h1>
        <h4>Posgrado</h4>
        <PreguntaRadioGroup
          pregunta="10.- Has considerado cursar un posgrado en la UTVT?"
          opciones={["Si", "No"]}
          seleccion={formData.recursar}
          onChange={(respuesta) => {
            HandleInputChange("recursar", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="11.- En ¿Cuál espacio académico?"
          opciones={[
            "Antropología",
            "Arquitectura y Diseño",
            "Artes Visuales",
            "Biología",
            "Ciencias de la Comunicación",
            "Ciencias de la Educación",
            "Ciencias de la Salud",
            "Ciencias de la Tierra",
            "Ciencias de la Vida",
            "Ciencias Económico Administrativas",
            "Ciencias Exactas",
            "Ciencias Sociales",
            "Derecho",
            "Diseño",
            "Economía",
            "Enfermería",
            "Filosofía",
            "Física",
            "Geografía",
            "Historia",
            "Ingeniería",
            "Lenguas",
            "Matemáticas",
            "Medicina",
            "Música",
            "Nutrición",
            "Odontología",
            "Optometría",
            "Pedagogía, Psicopedagogía",
            "Psicología",
            "Química",
            "Sociología",
            "Trabajo Social",
          ]}
          seleccion={formData.espacioacademico}
          onChange={(respuesta) => {
            HandleInputChange("espacioacademico", respuesta);
          }}
        />
        <PreguntaRadioGroup
          pregunta="12.-¿Cuál es el postgrado de tu interes?"
          opciones={["Maestría en Ciencias Ambientales","Maestría en Ciencias de la Ingenieria",
            "Maestría en Ciencias de la Salud","Maestría en Ciencias de la Tierra",
            "Maestría en Ciencias de la Vida","Maestría en Ciencias Económico Administrativas",
            "Maestría en Ciencias Exactas","Maestría en Ciencias Sociales","Doctorado en Ciencias Ambientales",
            "Doctorado en Ciencias de la Ingenieria","Doctorado en Ciencias de la Salud","Doctorado en Ciencias de la Tierra",
          ]}
          seleccion={formData.posgradointeres}
          onChange={(respuesta) => {
            HandleInputChange("posgradointeres", respuesta);
          }}
        />
      </section>
    </div>
  );
};

export default SeccionPostgrado;
