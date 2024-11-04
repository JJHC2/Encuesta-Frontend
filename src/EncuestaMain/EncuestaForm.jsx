import React, { useState, useEffect } from "react";
import SeccionAcademica from "../sections/SeccionAcademica";
import SeccionInfraestructura from "../sections/SeccionInfraestructura";
import SeccionServicios from "../sections/SeccionServicios";
import Navigation from "../components/Encuesta/Navigation";
import SeccionProgramas from "../sections/SeccionProgramas";
import SeccionGradoSatisfaccion from "../sections/SeccionGradoSatisfaccion";
import SeccionCursar from "../sections/SeccionCursar";
import SeccionServicioSocial from "../sections/TrayectoriaEmpleabilidad/SeccionServicioSocial";
import SeccionServicioUtil from "../sections/TrayectoriaEmpleabilidad/SeccionServicioUtil";
import SeccionPracticas from "../sections/TrayectoriaEmpleabilidad/SeccionPracticas";
import SeccionPostgrado from "../sections/Postgrado/SeccionPostgrado";
import SeccionTrabajo from "../sections/Trabajo/SeccionTrabajo";
import SeccionDatosTrabajo from "../sections/Trabajo/SeccionDatosTrabajo";
import SeccionInfoInteres from "../sections/InformacionInteres/SeccionInfoInteres";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const EncuestaForm = () => {
  const [formData, setFormData] = useState({});
  const [seccionActual, setSeccionActual] = useState(1);
  const [respondido, setRespondido] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkResponse = async () => {
      const res = await fetch("http://localhost:5000/dashboard/encuesta/check", {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (res.ok) {
        const data = await res.json();
        setRespondido(data.responded);
      }
    };

    checkResponse();
  }, []);

  const HandleInputChange = (seccion, pregunta, respuesta) => {
    setFormData((prev) => ({
      ...prev,
      [seccion]: {
        ...prev[seccion],
        [pregunta]: respuesta,
      },
    }));
  };

  const HandleNextSection = () => {
    setSeccionActual((prev) => prev + 1);
  };

  const HandlePreviousSection = () => {
    setSeccionActual((prev) => prev - 1);
  };

  const HandleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/encuesta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        toast.success("Encuesta enviada con éxito");
        setFormData({});
        navigate("/dashboard")
      } else {
        const errorMessage = await res.text();
        toast.error(`Error al enviar la encuesta: ${errorMessage}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error en la conexión con el servidor");
    }
  };

  if (respondido) {
    return (
      <div className="container my-5">
        <ToastContainer />
        <h2 className="text-center mb-4">Ya has respondido la encuesta. Gracias.</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="container my-5">
        <ToastContainer />
        <h2 className="text-center mb-4">Encuesta de Satisfaccion</h2>
        {seccionActual === 1 && (
          <SeccionAcademica
            formData={formData.academica || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("academica", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 2 && (
          <SeccionInfraestructura
            formData={formData.infraestructura || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("infraestructura", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 3 && (
          <SeccionProgramas
            formData={formData.programas || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("programas", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 4 && (
          <SeccionServicios
            formData={formData.servicios || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("servicios", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 5 && (
          <SeccionGradoSatisfaccion
            formData={formData.satisfaccion || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("satisfaccion", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 6 && (
          <SeccionCursar
            formData={formData.cursar || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("cursar", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 7 && (
          <SeccionServicioSocial
            formData={formData.serviciosocial || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("serviciosocial", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 8 && (
          <SeccionServicioUtil
            formData={formData.servicioutil || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("servicioutil", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 9 && (
          <SeccionPracticas
            formData={formData.practicas || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("practicas", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 10 && (
          <SeccionPostgrado
            formData={formData.postgrado || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("postgrado", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 11 && (
          <SeccionTrabajo
            formData={formData.trabajo || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("trabajo", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 12 && (
          <SeccionDatosTrabajo
            formData={formData.datostrabajo || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("datostrabajo", pregunta, respuesta);
            }}
          />
        )}
        {seccionActual === 13 && (
          <SeccionInfoInteres
            formData={formData.interes || {}}
            HandleInputChange={(pregunta, respuesta) => {
              HandleInputChange("interes", pregunta, respuesta);
            }}
          />
        )}
        <Navigation
          seccionActual={seccionActual}
          totalSecciones={13}
          onPrevious={HandlePreviousSection}
          onNext={HandleNextSection}
          onSubmit={HandleSubmit}
        />
      </div>
    </div>
  );
};

export default EncuestaForm;
