import React from "react";

const Navigation = ({
  seccionActual,
  totalSecciones,
  onPrevious,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md">
      <span style={{color: 'red'}}>Pagina: {seccionActual} de {totalSecciones}</span>
      {seccionActual > 1 && (
        <button
          onClick={onPrevious}
          className=" btn btn-success px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition duration-200"
        >
          Atrás
        </button>
      )}
      {seccionActual < totalSecciones ? (
        <button
          onClick={onNext}
          className="btn btn-danger px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Siguiente
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="btn btn-primary px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
        >
          Enviar
        </button>
      )}
    </div>
  );
};

export default Navigation;
