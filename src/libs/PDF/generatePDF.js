import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/image/cuervo.png";

const generatePDF = () => {
  const input = document.getElementById("pdf-content");
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    
    const margin = 15;
    const imgWidth = pdf.internal.pageSize.width - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; 
    let position = margin;

    pdf.addImage(logo, "PNG", margin, position, 50, 20);
    position += 30;

    pdf.setFontSize(22);
    pdf.text("Reporte de Alumnos Sin Trabajo", margin, position);

    position += 10;
    pdf.setFontSize(16);
    pdf.text("Universidad Tecnológica del Valle de Toluca - UTVT", margin, position);

    position += 10;
    pdf.setFontSize(12);
    const descriptionLines = [
      "Este reporte presenta un análisis gráfico sobre el porcentaje de alumnos",
      "egresados que actualmente no se encuentran laborando.",
      "El objetivo de este documento es brindar información relevante sobre la",
      "inserción laboral de nuestros graduados y identificar áreas de mejora."
    ];
    
    const maxWidth = pdf.internal.pageSize.width - 2 * margin;
    descriptionLines.forEach((line) => {
      pdf.text(pdf.splitTextToSize(line, maxWidth), margin, position);
      position += 10;
    });
    
    position += 10;
    pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);

    position += imgHeight + 10;
    pdf.setFontSize(12);
    pdf.text("Conclusiones", margin, position);

    position += 10;
    pdf.setFontSize(12);
    const conclusionLines = [
      "1. Se observa que un porcentaje significativo de egresados no ha logrado",
      "integrarse al mercado laboral, lo que resalta la necesidad de mejorar los",
      "programas de prácticas profesionales y vinculación laboral.",
      "",
      "2. Se recomienda realizar encuestas periódicas a los egresados para obtener",
      "información más detallada sobre sus situaciones laborales y las dificultades",
      "que enfrentan.",
      "",
      "3. Implementar charlas informativas y talleres sobre búsqueda de empleo y",
      "desarrollo de habilidades blandas puede ser beneficioso para aumentar la",
      "empleabilidad."
    ];
    
    conclusionLines.forEach((line) => {
      pdf.text(pdf.splitTextToSize(line, maxWidth), margin, position);
      position += 10;
    });
    
    pdf.save("reporte_alumnos_trabajo.pdf");
  });
};

export default generatePDF;
