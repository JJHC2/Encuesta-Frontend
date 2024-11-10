import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const AcademicoChart = ({ academicData }) => {
   
    const canvasRef = useRef(null); 

    useEffect(() => {
        
        if (academicData && academicData.length > 0) {
            const groupedData = {};
            academicData.forEach((item) => {
                if (!groupedData[item.pregunta]) {
                    groupedData[item.pregunta] = {};
                }
                groupedData[item.pregunta][item.respuesta] = item.total_respuestas;
            });

            const labels = ['Insatisfactoria', 'Regular', 'Buena', 'Excelente'];
            const preguntas = Object.keys(groupedData);

            const datasets = preguntas.map((pregunta) => {
                return {
                    label: pregunta,
                    data: labels.map((respuesta) => groupedData[pregunta][respuesta] || 0),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                };
            });

        
            if (canvasRef.current) {
                const chart = new Chart(canvasRef.current, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: datasets,
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Respuestas',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Total Respuestas',
                                },
                                beginAtZero: true,
                            },
                        },
                    },
                });

               
                return () => chart.destroy();
            }
        }
    }, [academicData]); 

    if (!academicData || academicData.length === 0) {
        return <div>No hay datos disponibles para mostrar el gráfico.</div>;
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5>Gráfico de Académico</h5>
                </div>
                <div className="card-body">
                    <canvas ref={canvasRef} style={{ height: '200px', width: '100%' }}></canvas>
                </div>
            </div>
        </div>
    );
};

export default AcademicoChart;
