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

const Charts = ({ jobData, encuesta, seccionData, academicData }) => {
  const handleGeneratePDF = () => {
    if (!jobData || !encuesta) {
      toast.error("Datos insuficientes para generar el PDF.");
      return;
    }

    console.log("Datos a generar PDF:", jobData, encuesta);
    const toastId = toast.loading("Generando PDF...");

    // Generar el PDF
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

  const HandleGeneratePDFacademico = useCallback(() => {
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

  const HandleGenerateExcel = useCallback(() => {
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
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gráfico de Trabajo
              </Typography>
              {jobData &&
              (jobData.yes?.length > 0 || jobData.no?.length > 0) ? (
                <>
                  <div id="pdf-pie-chart">
                    <JobCharts jobData={jobData} />
                  </div>
                  <Button
                    onClick={handleGeneratePDF}
                    variant="contained"
                    color="error"
                    startIcon={<i className="fa-solid fa-file-pdf"></i>}
                  >
                    PDF
                  </Button>
                </>
              ) : (
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  No hay datos por mostrar
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Respuestas por seccion
              </Typography>
              {seccionData && seccionData.length > 0 ? (
                <>
                  <SeccionChart seccionData={seccionData} />
                  <Button
                    onClick={HandleGenerateExcel}
                    variant="contained"
                    color="success"
                    startIcon={<i className="fa-solid fa-file-excel"></i>}
                  >
                    EXCEL
                  </Button>
                </>
              ) : (
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  No hay datos por mostrar
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Evaluación Académica
              </Typography>
              {academicData && academicData.length > 0 ? (
                <>
                  <AcademicoChart academicData={academicData} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 16,
                    }}
                  >
                    <Button
                      onClick={HandleGeneratePDFacademico}
                      variant="contained"
                      color="error"
                      startIcon={<i className="fa-solid fa-file-pdf"></i>}
                    >
                      PDF
                    </Button>
                  </div>
                </>
              ) : (
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  No hay datos por mostrar
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Charts;
