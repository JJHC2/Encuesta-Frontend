import React from "react";
import PreguntaRadioGroup from "../../components/Encuesta/PreguntaRadioGroup";
const SeccionDatosTrabajo = ({ formData, HandleInputChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          15 . Nombre de la empresa, institución u organismo donde laboras
        </label>
        <input
          type="email"
          className="form-control"
          value={formData.empresa || ""}
          onChange={(e) => HandleInputChange("empresa", e.target.value)}
          placeholder="Nombre de la Empresa"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <PreguntaRadioGroup
        pregunta="16 .  Régimen jurídico al que pertenece la empresa, institución u organización en la que trabajas:"
        opciones={[
          "Sector Público",
          "Sector Privado",
          "Sector Social(ONG,Patronato)",
          "Autoempleados",
          "Empresa Propia",
        ]}
        seleccion={formData.regimen}
        onChange={(respuesta) => {
          HandleInputChange("regimen", respuesta);
        }}
      />
      <PreguntaRadioGroup
        pregunta="17 .  Indica el nivel de relación que tienen las actividades laborales que desempeñas con tu formación profesional"
        opciones={["20%", "40%", "60%", "80%", "100%"]}
        seleccion={formData.actividadeslaborales}
        onChange={(respuesta) => {
          HandleInputChange("actividadeslaborales", respuesta);
        }}
      />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          18 . Indica el mes y año de la contratación de tu empleo actual
        </label>
        <input
          type="text"
          className="form-control"
          value={formData.fechacontratacion || ""}
          onChange={(e) =>
            HandleInputChange("fechacontratacion", e.target.value)
          }
          placeholder="Mes y Año de Contratación"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      {/*19 .  La UTVT está realizando un estudio sobre opinión de empleadores, si consideras que tu jefe inmediato participaría, proporciona una forma de contactarlo */}
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          19 . La UTVT está realizando un estudio sobre opinión de empleadores,
          si consideras que tu jefe inmediato participaría, proporciona una
          forma de contactarlo
        </label>
        <input
          type="text"
          className="form-control"
          value={formData.nombrejefe || ""}
          onChange={(e) => HandleInputChange("nombrejefe", e.target.value)}
          placeholder="Nombre del Jefe"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <span>Cargo / Puesto</span>
        <input
          type="text"
          className="form-control"
          value={formData.cargojefe || ""}
          onChange={(e) => HandleInputChange("cargojefe", e.target.value)}
          placeholder="Cargo del Jefe"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <span>Correo Electronico</span>
        <input
          type="email"
          className="form-control"
          value={formData.correojefe || ""}
          onChange={(e) => HandleInputChange("correojefe", e.target.value)}
          placeholder="Correo del Jefe"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <span>Teléfono</span>
        <input
        type="number"
        className="form-control"
        value={formData.telefono || ""}
        onChange={(e) => HandleInputChange("telefono",e.target.value)}
        placeholder="Telefono del Jefe"/>
      </div>
      <div className="mb-3">
        <span>Ext.</span>
        <input
        type="text"
        className="form-control"
        value={formData.extencion || ""}
        onChange={(e) => HandleInputChange("extencion",e.target.value)}
        placeholder="Extensión del Jefe"/>
      </div>
    </div>
  );
};

export default SeccionDatosTrabajo;
