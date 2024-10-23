import React, { useState } from "react";
import EncuestaHeader from "./Encuesta/EncuestaHeader";
import { Button, Form, Row, Col } from "react-bootstrap";
import EncuestaFooter from "./Encuesta/EncuestaFooter";
import EncuestaImage from "./Encuesta/EncuestaImage";
const Encuesta = () => {
  const [formData, setFormData] = useState({
    capacidadDocentes: "",
    docentesPosgrado: "",
    docentesExperiencia: "",
    contenidosPlanEstudio: "",
    practicas: "",
    infraestructura: "",
    equipamiento: "",
    computo: "",
    bibliografia: "",
    programas: "",
    servicioBibliotecario: "",
    titulacion: "",
    trabajo: "",
    satisfaccionCarrera: "",
    satisfaccionUAEM: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <EncuestaHeader />
      <EncuestaImage/>
      <div className="container my-5">
        <h2 className="text-center mb-4">Encuesta de Satisfacción</h2>
        <p className="text-center text-muted mb-5">
          Por favor, responde las siguientes preguntas para ayudarnos a mejorar
          nuestros servicios.
        </p>

        <Form onSubmit={handleSubmit}>
          {/* Sección Académica */}
          <section className="mb-5">
            <h4 className="mb-4">
              1 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
              siguientes aspectos académicos? *
            </h4>
            {[
              "capacidadDocentes",
              "docentesPosgrado",
              "docentesExperiencia",
              "contenidosPlanEstudio",
              "practicas",
            ].map((aspecto) => (
              <Form.Group key={aspecto} className="mb-4">
                <Form.Label>
                  {aspecto === "capacidadDocentes" &&
                    "Capacidad y cumplimiento de los docentes"}
                  {aspecto === "docentesPosgrado" &&
                    "Docentes con estudios de posgrado (Especialidad, Maestrías o Doctorados)"}
                  {aspecto === "docentesExperiencia" &&
                    "Docentes con experiencia profesional"}
                  {aspecto === "contenidosPlanEstudio" &&
                    "Contenidos teóricos, metodológicos y técnicos del plan de estudio"}
                  {aspecto === "practicas" &&
                    "Suficiencia en el desarrollo de prácticas de laboratorio, talleres, campos clínicos"}
                </Form.Label>
                <Row>
                  {["Insatisfactoria", "Regular", "Buena", "Excelente"].map(
                    (opcion) => (
                      <Col key={opcion} xs={6} md={3}>
                        <Form.Check
                          type="radio"
                          label={opcion}
                          name={aspecto}
                          value={opcion}
                          checked={formData[aspecto] === opcion}
                          onChange={handleInputChange}
                          className="d-inline-block"
                        />
                      </Col>
                    )
                  )}
                </Row>
              </Form.Group>
            ))}
          </section>

          {/* Sección Infraestructura */}
          <section className="mb-5">
            <h4 className="mb-4">
              2 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
              siguientes aspectos de infraestructura?{" "}
            </h4>
            {["infraestructura", "equipamiento", "computo", "bibliografia"].map(
              (infra) => (
                <Form.Group key={infra} className="mb-4">
                  <Form.Label>
                    {infra === "infraestructura" &&
                      "Infraestructura (aulas, auditorios, salas de cómputo, etc.)"}
                    {infra === "equipamiento" &&
                      "Equipamiento de laboratorios y talleres"}
                    {infra === "computo" &&
                      "Acceso a equipos de cómputo suficientes y actualizados"}
                    {infra === "bibliografia" &&
                      "Suficiencia de acervo bibliográfico"}
                  </Form.Label>
                  <Row>
                    {["Insatisfactoria", "Regular", "Buena", "Excelente"].map(
                      (opcion) => (
                        <Col key={opcion} xs={6} md={3}>
                          <Form.Check
                            type="radio"
                            label={opcion}
                            name={infra}
                            value={opcion}
                            checked={formData[infra] === opcion}
                            onChange={handleInputChange}
                          />
                        </Col>
                      )
                    )}
                  </Row>
                </Form.Group>
              )
            )}
          </section>
          {/* Sección Programas */}
          <section className="mb-5">
            <h4 className="mb-4">
              3 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
              siguientes aspectos de programas?{" "}
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>Programas de tutoria academicá</Form.Label>
              <Row>
                {["Insatisfactoria", "Regular", "Buena", "Excelente"].map(
                  (opcion) => (
                    <Col key={opcion} xs={6} md={3}>
                      <Form.Check
                        type="radio"
                        label={opcion}
                        name="programatutoria"
                        value={opcion}
                        checked={formData.programas === opcion}
                        onChange={handleInputChange}
                      />
                    </Col>
                  )
                )}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Programa de asesoría y mentoría académica</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="programaAsesoria"
                      value={opcion}
                      checked={formData.satisfaccionUAEM === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                Programa de movilidad(instrainstitucional, nacional e
                internacional)
              </Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="programaMovilidad"
                      value={opcion}
                      checked={formData.satisfaccionUAEM === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Programa de Becas</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="programaBecas"
                      value={opcion}
                      checked={formData.satisfaccionUAEM === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                Actividades de formación integral (cuidado de la salud,
                promoción de la cultura, fomento al deporte, actividades
                artísticas, otras).
              </Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="programaFormacionIntegral"
                      value={opcion}
                      checked={formData.satisfaccionUAEM === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* Sección Servicios */}
          <section className="mb-5">
            <h4 className="mb-4">
              4 .  En tu opinión, ¿cómo calificarías a la UTVT en cuanto a los
              siguientes servicios?{" "}
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>Servicio bibliotecario</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioBibliotecario"
                      value={opcion}
                      checked={formData.servicioBibliotecario === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Apoyo en el proceso de titulación</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="titulacion"
                      value={opcion}
                      checked={formData.servicioBibliotecario === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Tramites de servicio social y prácticas profesionales
              </Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="trabajo"
                      value={opcion}
                      checked={formData.servicioBibliotecario === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Servicios de control escolar</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="controlEscolar"
                      value={opcion}
                      checked={formData.servicioBibliotecario === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                Promoción de la bolsa de trabajo de la Universidad.
              </Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="bolsaTrabajo"
                      value={opcion}
                      checked={formData.servicioBibliotecario === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* Sección Satisfacción */}
          <section className="mb-5">
            <h4 className="mb-4">
              5 .  ¿Cuál es tu grado de satisfacción? respecto a:
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>El desarrollo de tu carrera profesional</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="satisfaccionCarrera"
                      value={opcion}
                      checked={formData.satisfaccionCarrera === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>La formación recibida en la UAEM</Form.Label>
              <Row>
                {[
                  "Nada satisfecho",
                  "Poco satisfecho",
                  "Satisfecho",
                  "Muy satisfecho",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="satisfaccionUAEM"
                      value={opcion}
                      checked={formData.satisfaccionUAEM === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* Sección Cursar Nuevamente*/}
          <section className="mb-5">
            <h4 className="mb-4">
              6 .  Si tuvieras que cursar nuevamente tu licenciatura u otra
              ¿elegirías inscribirte en la UTVT?
            </h4>
            <Form.Group className="mb-4">
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="cursarNuevamente"
                      value={opcion}
                      checked={formData.cursarNuevamente === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* Seccion Servicios y Practicas Profesionales*/}
          <section className="mb-5">
            <h4 className="mb-4">
              7 .  Servicio social y prácticas profesionales
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>
                El servicio social estuvo de acuerdo con tu perfil profesional?
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioSocial"
                      value={opcion}
                      checked={formData.servicioSocial === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Las prácticas profesionales estuvieron de acuerdo con tu perfil
                profesional?
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesionales"
                      value={opcion}
                      checked={formData.practicasProfesionales === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* 8 .  El servicio social fue útil en los siguientes aspectos*/}

          <section className="mb-5">
            <h4 className="mb-4">
              8 .  El servicio social fue útil en los siguientes aspectos
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>
                La aplicación de conocimientos en la solución de problemas del
                área
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioSocialUtil"
                      value={opcion}
                      checked={formData.servicioSocialUtil === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                El ejercicio de valores, habilidades y actitudes para
                relacionarse con las personas
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioSocialValores"
                      value={opcion}
                      checked={formData.servicioSocialValores === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>La adquisición de conocimientos nuevos</Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioSocialConocimientos"
                      value={opcion}
                      checked={formData.servicioSocialConocimientos === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Ser contratado por la empresa posteriormente
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="servicioSocialContratado"
                      value={opcion}
                      checked={formData.servicioSocialContratado === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Vincularte con otras opciones de empleo</Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="vinculoEmpleo"
                      value={opcion}
                      checked={formData.servicioSocialInteres === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* 9 .  Las prácticas profesionales fueron útiles en los siguientes aspectos*/}

          <section className="mb-5">
            <h4 className="mb-4">
              9 .  Las prácticas profesionales fueron útiles en los siguientes
              aspectos
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>
                La aplicación de conocimientos en la solución de problemas del
                área
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesionalesUtil"
                      value={opcion}
                      checked={formData.practicasProfesionalesUtil === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                El ejercicio de valores, habilidades y actitudes para
                relacionarse con las personas
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesionalesValores"
                      value={opcion}
                      checked={
                        formData.practicasProfesionalesValores === opcion
                      }
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>La adquisición de conocimientos nuevos</Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesionalesConocimientos"
                      value={opcion}
                      checked={
                        formData.practicasProfesionalesConocimientos === opcion
                      }
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Ser contratado por la empresa posteriormente
              </Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesinalesContratado"
                      value={opcion}
                      checked={
                        formData.practicasProfesinalesContratado === opcion
                      }
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Vincularte con otras opciones de empleo</Form.Label>
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="practicasProfesionalesVinculo"
                      value={opcion}
                      checked={
                        formData.practicasProfesionalesVinculo === opcion
                      }
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/* 10 .  ¿Has considerado cursar un posgrado en la UTVT?*/}

          <section className="mb-5">
            <h4 className="mb-4">
              10 .  ¿Has considerado cursar un posgrado en la UTVT?
            </h4>
            <Form.Group className="mb-4">
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="cursarPosgrado"
                      value={opcion}
                      checked={formData.cursarPosgrado === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*11 .  En ¿cuál espacio académico? */}

          <section className="mb-5">
            <h4 className="mb-4">11 .  En ¿cuál espacio académico?</h4>
            <Form.Group className="mb-4">
              <Form.Label>En ¿cuál espacio académico?</Form.Label>
              <Row>
                {[
                  "Ingeniería en Sistemas Computacionales",
                  "Ingeniería en Tecnologías de la Información y Comunicaciones",
                  "Ingeniería en Mecatrónica",
                  "Ingeniería en Energías Renovables",
                  "Ingeniería en Logística",
                  "Ingeniería en Gestión Empresarial",
                  "Ciencias Agricolas",
                  "Antropologia",
                  "Arquitectura y Diseño",
                  "Derecho",
                  "Economía",
                  "Educación",
                  "Enfermería",
                  "Gastronomía",
                  "Medicina",
                  "Odontología",
                  "Psicología",
                  "Química Farmacéutica Biológica",
                  "Trabajo Social",
                  "Turismo",
                  "Veterinaria",
                  "Turismo y Gastronomía",
                  "Centro Universitario UAEM Atlacomulco",
                  "Centro Universitario UAEM Ecatepec",
                  "Centro Universitario UAEM Temascaltepec",
                  "Centro Universitario UAEM Valle de Bravo",
                  "Temascaltepec",
                  "Valle de Bravo",
                  "Zumpahuacan",
                  "Zinacantepec",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="espacioAcademico"
                      value={opcion}
                      checked={formData.espacioAcademico === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*12 .  ¿Cuál es el posgrado de tu interés? */}

          <section className="mb-5">
            <h4 className="mb-4">12 .  ¿Cuál es el posgrado de tu interés?</h4>
            <Form.Group className="mb-4">
              <Form.Label>¿Cuál es el posgrado de tu interés?</Form.Label>
              <Row>
                {[
                  "Maestría en Ciencias Ambientales",
                  "Maestría en Ciencias de la Ingeniería",
                  "Maestría en Ciencias del Agua",
                  "Maestría en Ingeniería de la Cadena de Suministro",
                  "Doctorado en Diseño",
                  "Doctorado en Ciencias Ambientales",
                  "Doctorado en Ciencias de la Ingeniería",
                  "Doctorado en Ciencias del Agua",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="posgradoInteres"
                      value={opcion}
                      checked={formData.posgradoInteres === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*13 .  ¿Trabajas actualmente? */}

          <section className="mb-5">
            <h4 className="mb-4">13 .  ¿Trabajas actualmente?</h4>
            <Form.Group className="mb-4">
              <Row>
                {["Sí", "No"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="trabajas"
                      value={opcion}
                      checked={formData.trabajas === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*14 .  Califica del 1 (nada importante o no influyente) al 5 (muy importante o muy influyente) las razones o los
factores que hicieron que te contratarán: (excepto becarios, autónomos por cuenta propia y dueños de
negocio propio o familiar) * */}

          <section className="mb-5">
            <h4 className="mb-4">
              14. Califica del 1 (nada importante o no influyente) al 5 (muy
              importante o muy influyente) las razones o los factores que
              hicieron que te contrataran: (excepto becarios, autónomos por
              cuenta propia y dueños de negocio propio o familiar) *
            </h4>
            {[
              "Los Conocimientos Teóricos",
              "Los Conocimientos Prácticos",
              "Dominio del Ingles",
              "La formación en el uso de la informática y de las nuevas tecnologías",
              "La manera de ser: personalidad, habilidades sociales, comunicación...",
              "La capacidad de gestión y planificación",
              "La capacidad de trabajar en grupo",
              "El prestigio de la UTVT",
            ].map((factor) => (
              <Form.Group key={factor} className="mb-4">
                <Form.Label>{factor}</Form.Label>
                <Row>
                  {[1, 2, 3, 4, 5].map((opcion) => (
                    <Col key={opcion} xs={6} md={3}>
                      <Form.Check
                        type="radio"
                        label={opcion}
                        name={factor}
                        value={String(opcion)}
                        checked={formData[factor] === String(opcion)}
                        onChange={handleInputChange}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
            ))}
          </section>

          {/*15 .  Nombre de la empresa, institución u organismo donde laboras */}

          <section className="mb-5">
            <h4 className="mb-4">
              15. Nombre de la empresa, institución u organismo donde laboras
            </h4>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
              />
            </Form.Group>
          </section>

          {/*16 .  Régimen jurídico al que pertenece la empresa, institución u organización en la que trabajas: */}

          <section className="mb-5">
            <h4 className="mb-4">
              16. Régimen jurídico al que pertenece la empresa, institución u
              organización en la que trabajas:
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>Régimen jurídico</Form.Label>
              <Row>
                {[
                  "Sector Público",
                  "Sector Privado",
                  "Sector Social(ONG,patronato)",
                  "Autoempleados",
                  "Empresa Propia",
                ].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="regimenJuridico"
                      value={opcion}
                      checked={formData.regimenJuridico === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*17 .  Indica el nivel de relación que tienen las actividades laborales que desempeñas con tu formación
profesional*/}

          <section className="mb-5">
            <h4 className="mb-4">
              17. Indica el nivel de relación que tienen las actividades
              laborales que desempeñas con tu formación profesional
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>
                Nivel de relación que tienen las actividades laborales que
                desempeñas con tu formación profesional
              </Form.Label>
              <Row>
                {["20%", "40%", "60%", "80%", "100%"].map((opcion) => (
                  <Col key={opcion} xs={6} md={3}>
                    <Form.Check
                      type="radio"
                      label={opcion}
                      name="relacionActividades"
                      value={opcion}
                      checked={formData.relacionActividades === opcion}
                      onChange={handleInputChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </section>

          {/*18 .  Indica el mes y año de la contratación de tu empleo actual */}

          <section className="mb-5">
            <h4 className="mb-4">
              18. Indica el mes y año de la contratación de tu empleo actual
            </h4>
            <Form.Group className="mb-4">
              <Row>
                <Col xs={6}>
                  <Form.Control
                    type="text"
                    name="mesContratacion"
                    placeholder="Mes"
                    value={formData.mesContratacion}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col xs={6}>
                  <Form.Control
                    type="text"
                    name="anioContratacion"
                    placeholder="Año"
                    value={formData.anioContratacion}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </section>

          {/*19 .  La UTVT está realizando un estudio sobre opinión de empleadores, si consideras que tu jefe inmediato
participaría, proporciona una forma de contactarlo*/}

          <section className="mb-5">
            <h4 className="mb-4">
              19. La UTVT está realizando un estudio sobre opinión de empleadores,
              si consideras que tu jefe inmediato participaría, proporciona una
              forma de contactarlo
            </h4>
            <Form.Group className="mb-4">
              <Form.Label>Nombre de tu jefe inmediato</Form.Label>
              <Form.Control
                type="text"
                name="nombreJefe"
                value={formData.nombreJefe}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Cargo / Puesto</Form.Label>
              <Form.Control
                type="text"
                name="cargoJefe"
                value={formData.telefonoJefe}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Correo de tu jefe inmediato</Form.Label>
              <Form.Control
                type="email"
                name="correoJefe"
                value={formData.correoJefe}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Teléfono de tu jefe inmediato</Form.Label>
              <Form.Control
                type="number"
                name="telefonoJefe"
                value={formData.telefonoJefe}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Ext.</Form.Label>
              <Form.Control
                type="number"
                name="extensionJefe"
                value={formData.telefonoJefe}
                onChange={handleInputChange}
              />
            </Form.Group>
          </section>

          {/*20 .  Información de interés que deseas conocer (opcional, puedes elegir más de uno): */}

          <section className="mb-5">
            <h4 className="mb-4">
              20. Información de interés que deseas conocer (opcional, puedes
              elegir más de uno):
            </h4>
            {[
              "Beneficios a Alumniversitarios",
              "Cursos de empleabilidad",
              "Resultados estadísticos de estudios anteriores de egresados",
              "Modalidades de titulación",
              "Encuentros y actividades universitarias",
              "Encuentros y actividades artísticas y culturales",
              "Cursos de formación continua"
            ].map((interes) => (
              <Form.Group key={interes} className="mb-4">
                <Form.Check
                  type="checkbox"
                  label={interes}
                  name={interes}
                  checked={formData[interes]}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
          </section>

          {/* 21 .  Comparte con la UTVT algunos de tus logros en el ámbito profesional o personal: */}

          <section className="mb-5">
            <h4 className="mb-4">
              21. Comparte con la UTVT algunos de tus logros en el ámbito
              profesional o personal:
            </h4>
            <Form.Group className="mb-4">
              <Form.Control
                as="textarea"
                rows={3}
                name="logros"
                value={formData.logros}
                onChange={handleInputChange}
              />
            </Form.Group>
          </section>

          {/* Botones */}
          <div className="text-center">
            <Button variant="primary" type="submit" className="mr-3">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
      <EncuestaFooter />
    </div>
  );
};

export default Encuesta;
