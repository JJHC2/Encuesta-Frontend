import React from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

//Grafica de barras para mostrar la cantidad de sesiones por día
const SeccionChart = ({ seccionData }) => {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (canvasRef.current && seccionData) {
      const ctx = canvasRef.current.getContext("2d");

      // Destruir el gráfico anterior si ya existe
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: seccionData.map((seccion) => seccion.seccion),
          datasets: [
            {
              label: "Cantidad de Respuestas",
              data: seccionData.map((seccion) => seccion.count), 
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [seccionData]);

  return (
    <div className="card">
      <div className="card-header">
        <h5>Gráfico de Respuestas por Sección(Encuesta)</h5>
      </div>
      <div className="card-body">
        <canvas ref={canvasRef} style={{ height: "200px", width: "100%" }}></canvas>
      </div>
    </div>
  );
};


export default SeccionChart;