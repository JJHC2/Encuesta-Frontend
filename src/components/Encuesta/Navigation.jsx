import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Navigation = ({
  seccionActual,
  totalSecciones,
  onPrevious,
  onNext,
  onSubmit,
  formData,
}) => {
  const secciones = Object.keys(formData);
  const [isFormularioCompleto, setIsFormularioCompleto] = useState(false);

  // Función para verificar si todas las preguntas están completadas en todas las secciones
  const checkFormulario = () => {
    const allSectionsComplete = secciones.every((seccion) => {
      const respuestasSeccion = formData[seccion] || {};
      // Verifica si alguna pregunta está vacía o no tiene respuesta
      return Object.values(respuestasSeccion).every(
        (respuesta) =>
          respuesta !== "" && respuesta !== undefined && respuesta !== null
      );
    });
    setIsFormularioCompleto(allSectionsComplete);
  };

  // Ejecuta la validación del formulario cada vez que el formData cambia
  useEffect(() => {
    checkFormulario();
  }, [formData]);

  // Función que maneja el siguiente paso
  const handleNext = () => {
    const seccionActualNombre = secciones[seccionActual - 1];
    const respuestasSeccion = formData[seccionActualNombre] || {};

    // Verifica si hay preguntas pendientes en esta sección
    const preguntasPendientes = Object.values(respuestasSeccion).some(
      (respuesta) =>
        respuesta === "" || respuesta === undefined || respuesta === null
    );

    if (preguntasPendientes) {
      toast.error("Completa todas las preguntas de esta sección antes de avanzar");
      return;
    }

    onNext(); // Avanza al siguiente paso
  };

  return (
    <div className="flex justify-center items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md">
      <span style={{ color: "red" }}>
        Página: {seccionActual} de {totalSecciones}
      </span>
      {seccionActual > 1 && (
        <button
          onClick={onPrevious}
          className="btn btn-success px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition duration-200"
        >
          Atrás
        </button>
      )}
      {seccionActual < totalSecciones ? (
        <button
          onClick={handleNext} // Maneja el siguiente paso
          disabled={!isFormularioCompleto} // Deshabilita si el formulario no está completo
          className={`btn btn-danger px-4 py-2 ${
            isFormularioCompleto ? "bg-blue-500" : "bg-gray-400"
          } text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200`}
        >
          Siguiente
        </button>
      ) : (
        <button
          id="submit-button"
          onClick={onSubmit}
          disabled={!isFormularioCompleto} // Deshabilita si el formulario no está completo
          className={`btn btn-primary px-4 py-2 ${
            isFormularioCompleto ? "bg-green-500" : "bg-gray-400"
          } text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200`}
        >
          Enviar
        </button>
      )}
    </div>
  );
};

export default Navigation;
