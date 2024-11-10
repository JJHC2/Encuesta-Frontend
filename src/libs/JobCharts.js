import React from "react";
import { Chart, registerables } from "chart.js";


Chart.register(...registerables);

const JobCharts = ({ jobData }) => {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (canvasRef.current && (jobData.yes || jobData.no)) {
      const ctx = canvasRef.current.getContext('2d');

      // Destruir el gráfico anterior si ya existe
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Trabajan', 'No Trabajan'],
          datasets: [{
            data: [jobData.yes, jobData.no],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Para poder ajustar el tamaño 
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Distribución de Trabajo entre Alumnos',
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
  }, [jobData]);

  return (
    <div className="card">
      <div className="card-header">
        <h5>Gráfico de Trabajo</h5>
      </div>
      <div className="card-body">
        <canvas ref={canvasRef} style={{ height: '200px', width: '100%' }}></canvas>
      </div>
    </div>
  );
};

export default JobCharts;
