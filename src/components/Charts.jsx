import React, { useCallback } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import JobCharts from "../libs/JobCharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import generatePDF from "../libs/PDF/generatePDF";
import SeccionChart from "../libs/SeccionChart";
import GenerateExcel from "../libs/Excel/GenerateExcel";
import AcademicoChart from "../libs/AcademicoChart";
import PDFacademico from "../libs/PDF/PDFacademico";

const Charts = ({ jobData, encuesta, seccionData, academicData, role }) => {
  const handleGeneratePDF = () => {
    if (!jobData || !encuesta) {
      toast.error("Datos insuficientes para generar el PDF.");
      return;
    }

    const toastId = toast.loading("Generando PDF...");
    generatePDF(jobData, encuesta)
      .then(() => {
        toast.update(toastId, {
          render: "PDF generado exitosamente!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.error("Error al generar PDF:", error);
        toast.update(toastId, {
          render: "Error al generar el PDF",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  const handleGeneratePDFacademico = useCallback(() => {
    if (!academicData) {
      toast.error("Datos insuficientes para generar el PDF.");
      return;
    }
    const toastId = toast.loading("Generando PDF...");
    PDFacademico(academicData)
      .then(() => {
        toast.update(toastId, {
          render: "PDF generado exitosamente!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.error("Error al generar PDF:", error);
        toast.update(toastId, {
          render: "Error al generar el PDF",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  }, [academicData]);

  const handleGenerateExcel = useCallback(() => {
    if (!seccionData) {
      toast.error("Datos insuficientes para generar el Excel.");
      return;
    }

    const toastId = toast.loading("Generando Excel...");
    GenerateExcel(seccionData)
      .then(() => {
        toast.update(toastId, {
          render: "Excel generado exitosamente!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.error("Error al generar Excel:", error);
        toast.update(toastId, {
          render: "Error al generar el Excel",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  }, [seccionData]);

  return (
    <div>
      <ToastContainer />
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "white",
              border: "1px solid #4caf50",
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-5px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Gráfico de Trabajo
              </Typography>
              <div id="pdf-pie-chart">
                <JobCharts jobData={jobData} />
              </div>
              {jobData && encuesta && (
                <Button
                  onClick={handleGeneratePDF}
                  variant="contained"
                  color="success"
                  startIcon={<i className="fa-solid fa-file-pdf"></i>}
                  sx={{
                    marginTop: 2,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#388e3c",
                    },
                  }}
                >
                  PDF
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "white",
              border: "1px solid #4caf50",
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-5px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Respuestas por sección
              </Typography>
              <SeccionChart seccionData={seccionData} />
              {seccionData && (
                <Button
                  onClick={handleGenerateExcel}
                  variant="contained"
                  color="success"
                  startIcon={<i className="fa-solid fa-file-excel"></i>}
                  sx={{
                    marginTop: 2,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#388e3c",
                    },
                  }}
                >
                  EXCEL
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>

        {role !== 4 && (
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "white",
                border: "1px solid #4caf50",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-5px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Evaluación Académica
                </Typography>
                <AcademicoChart academicData={academicData} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: 16,
                  }}
                >
                  {academicData && (
                    <Button
                      onClick={handleGeneratePDFacademico}
                      variant="contained"
                      color="success"
                      startIcon={<i className="fa-solid fa-file-pdf"></i>}
                      sx={{
                        marginTop: 2,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#388e3c",
                        },
                      }}
                    >
                      PDF
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Charts;
