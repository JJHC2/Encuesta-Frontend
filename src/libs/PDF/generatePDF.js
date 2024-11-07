import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/image/cuervo.png";

const generatePDF = (jobData,encuesta) => {
  const input = document.getElementById("pdf-content");
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();

    const margin = 15;
    const imgWidth = pdf.internal.pageSize.width - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let position = margin;

    // Logo y encabezado
    pdf.addImage(logo, "PNG", margin, position, 50, 35);
    position += 40;
    pdf.setFontSize(22);
    pdf.text("Reporte de Inserción Laboral de Alumnos", margin, position);

    position += 15;
    pdf.setFontSize(16);
    pdf.text("Universidad Tecnológica del Valle de Toluca - UTVT", margin, position);

    position += 10;
    pdf.setFontSize(12);
    const descriptionLines = [
      "Este reporte presenta un análisis detallado de la inserción laboral de nuestros egresados.",
      "A continuación, se muestran los resultados de la encuesta de empleo realizada a los alumnos.",
    ];
    const maxWidth = pdf.internal.pageSize.width - 2 * margin;
    descriptionLines.forEach((line) => {
      pdf.text(pdf.splitTextToSize(line, maxWidth), margin, position);
      position += 10;
    });

    // Tabla de resultados
    position += 20;
    pdf.setFontSize(14);
    pdf.text("Resumen de Inserción Laboral", margin, position);

    position += 10;
    pdf.setFontSize(12);
    const tableHeaders = ["Descripción", "Cantidad"];
    const tableData = [
      ["Alumnos que trabajan", jobData.yes],
      ["Alumnos que no trabajan", jobData.no],
      ["Total de alumnos encuestados", encuesta],
    ];

    const cellPadding = 5;
    let currentX = margin;
    let currentY = position;

    // Encabezados de la tabla
    pdf.setFontSize(12);
    pdf.setTextColor(255, 255, 255);
    pdf.setFillColor(0, 112, 192);
    tableHeaders.forEach((header, i) => {
      pdf.rect(currentX, currentY, 60, 10, "F");
      pdf.text(header, currentX + cellPadding, currentY + 7);
      currentX += 60;
    });

    // Datos de la tabla
    currentX = margin;
    currentY += 10;
    pdf.setTextColor(0, 0, 0);
    tableData.forEach((row) => {
      row.forEach((cell) => {
        pdf.rect(currentX, currentY, 60, 10);
        pdf.text(cell.toString(), currentX + cellPadding, currentY + 7);
        currentX += 60;
      });
      currentX = margin;
      currentY += 10;
    });

    position = currentY + 20;

    // Gráfico
    pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    position += imgHeight + 10;

    // Conclusión y recomendaciones
    pdf.setFontSize(14);
    pdf.text("Conclusión", margin, position);
    position += 10;
    pdf.setFontSize(12);

    if (jobData.yes > jobData.no) {
      pdf.text(
        pdf.splitTextToSize(
          "La mayoría de los alumnos egresados se encuentran trabajando, lo cual refleja un éxito en los programas de inserción laboral implementados. Se recomienda continuar reforzando los programas de vinculación profesional para asegurar una alta tasa de empleo entre los futuros graduados.",
          maxWidth
        ),
        margin,
        position
      );
    } else {
      const recommendations = [
        "1. Fomentar programas de prácticas profesionales y fortalecer la relación universidad-empresa.",
        "2. Organizar ferias de empleo y talleres de preparación profesional para mejorar las oportunidades de los alumnos.",
        "3. Incentivar el desarrollo de habilidades blandas y técnicas de búsqueda de empleo, esenciales para la inserción laboral.",
      ];
      pdf.text(
        pdf.splitTextToSize(
          "Se recomienda implementar las siguientes acciones para mejorar la inserción laboral de los egresados:",
          maxWidth
        ),
        margin,
        position
      );
      position += 10;

      recommendations.forEach((line) => {
        pdf.text(pdf.splitTextToSize(line, maxWidth), margin, position);
        position += 10;
      });
    }

    pdf.save("reporte_insercion_laboral_alumnos.pdf");
  });
};

export default generatePDF;
