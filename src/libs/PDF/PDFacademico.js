import jsPDF from "jspdf";
import logo from "../../assets/image/cuervo.png"; 

const PDFacademico = (academicData) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();
      const margin = 20;
      doc.setFont("times", "normal");
      doc.setFontSize(12);

      doc.setFillColor(0, 128, 0); 
      doc.rect(margin, margin, doc.internal.pageSize.width - 2 * margin, 30, "F");
      doc.addImage(logo, "PNG", margin + 10, margin + 2, 40, 30);
      
      let position = margin + 10;
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text("Evaluación Académica UTVT", margin + 60, position);

      position += 10;
      doc.setFontSize(12);
      doc.text("Universidad Tecnológica del Valle de Toluca - UTVT", margin + 60, position);

      position += 20;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); 
      const descriptionLines = [
        "Este informe presenta los resultados de la evaluación académica realizada por los estudiantes de la UTVT.",
        "A continuación, se presentan las respuestas más comunes y las recomendaciones pertinentes para mejorar las áreas con oportunidades de crecimiento."
      ];

      const maxWidth = doc.internal.pageSize.width - 2 * margin;
      descriptionLines.forEach((line) => {
        const splitDescription = doc.splitTextToSize(line, maxWidth);
        splitDescription.forEach((textLine) => {
          if (position + 8 > doc.internal.pageSize.height - margin) {
            doc.addPage();
            position = margin;
          }
          doc.text(textLine, margin, position);
          position += 8;
        });
      });

      doc.setLineWidth(0.5);
      doc.line(margin, position, doc.internal.pageSize.width - margin, position);
      position += 10;

      const groupedData = {};

      academicData.forEach(item => {
        if (!groupedData[item.pregunta]) {
          groupedData[item.pregunta] = { excelente: 0, buena: 0, regular: 0, insatisfactoria: 0 };
        }

        if (item.respuesta === "Excelente") {
          groupedData[item.pregunta].excelente += item.total_respuestas;
        } else if (item.respuesta === "Buena") {
          groupedData[item.pregunta].buena += item.total_respuestas;
        } else if (item.respuesta === "Regular") {
          groupedData[item.pregunta].regular += item.total_respuestas;
        } else if (item.respuesta === "Insatisfactoria") {
          groupedData[item.pregunta].insatisfactoria += item.total_respuestas;
        }
      });

      let yPosition = position;
      Object.keys(groupedData).forEach((pregunta) => {
        const excelenteCount = groupedData[pregunta].excelente;
        const buenaCount = groupedData[pregunta].buena;
        const regularCount = groupedData[pregunta].regular;
        const insatisfactoriaCount = groupedData[pregunta].insatisfactoria;

        let section = "";
        let totalRespuestas = 0;
        let advice = "";

        // Evaluamos la categoría con la mayor cantidad de respuestas, tomando en cuenta el orden de prioridad
        if (excelenteCount >= buenaCount && excelenteCount >= regularCount && excelenteCount >= insatisfactoriaCount) {
          section = "Excelente";
          totalRespuestas = excelenteCount;
          advice = "Consejo: ¡Excelente desempeño! Mantener el enfoque y seguir fomentando las buenas prácticas.";
        } else if (buenaCount >= excelenteCount && buenaCount >= regularCount && buenaCount >= insatisfactoriaCount) {
          section = "Buena";
          totalRespuestas = buenaCount;
          advice = "Consejo: Buen desempeño. Seguir avanzando y mejorar en las áreas que aún pueden optimizarse.";
        } else if (regularCount >= insatisfactoriaCount) {
          section = "Regular";
          totalRespuestas = regularCount;
          advice = "Consejo: Mantener el enfoque en lo que se está haciendo bien, pero no perder de vista áreas donde se puede mejorar.";
        } else {
          section = "Insatisfactoria";
          totalRespuestas = insatisfactoriaCount;
          advice = "Consejo: Es importante analizar las áreas críticas, buscar retroalimentación más detallada y mejorar los aspectos negativos.";
        }

        // Aquí definimos la sección según la respuesta seleccionada
        if (section === "Excelente" && excelenteCount > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 255, 0); 
          doc.text("Respuestas Excelentes", margin, yPosition);
          yPosition += 10;
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0); 
          doc.text(`Pregunta: ${pregunta}`, margin, yPosition);
          doc.text(`Total de respuestas: ${totalRespuestas}`, margin + 100, yPosition);
          yPosition += 15;
          doc.setFontSize(10);
          doc.text(advice, margin, yPosition);
          yPosition += 10;
        } else if (section === "Buena" && buenaCount > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 128, 0); 
          doc.text("Respuestas Buenas", margin, yPosition);
          yPosition += 10;
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0); 
          doc.text(`Pregunta: ${pregunta}`, margin, yPosition);
          doc.text(`Total de respuestas: ${totalRespuestas}`, margin + 100, yPosition);
          yPosition += 15;
          doc.setFontSize(10);
          doc.text(advice, margin, yPosition);
          yPosition += 10;
        } else if (section === "Regular" && regularCount > 0) {
          doc.setFontSize(14);
          doc.setTextColor(255, 165, 0); 
          doc.text("Respuestas Regulares", margin, yPosition);
          yPosition += 10;
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0); 
          doc.text(`Pregunta: ${pregunta}`, margin, yPosition);
          doc.text(`Total de respuestas: ${totalRespuestas}`, margin + 100, yPosition);
          yPosition += 15;
          doc.setFontSize(10);
          doc.text(advice, margin, yPosition);
          yPosition += 10;
        } else if (section === "Insatisfactoria" && insatisfactoriaCount > 0) {
          doc.setFontSize(14);
          doc.setTextColor(255, 0, 0); 
          doc.text("Respuestas Insatisfactorias", margin, yPosition);
          yPosition += 10;
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0); 
          doc.text(`Pregunta: ${pregunta}`, margin, yPosition);
          doc.text(`Total de respuestas: ${totalRespuestas}`, margin + 100, yPosition);
          yPosition += 15;
          doc.setFontSize(10);
          doc.text(advice, margin, yPosition);
          yPosition += 10;
        }
      });

      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text("Fecha de generación del informe: " + new Date().toLocaleDateString(), margin, doc.internal.pageSize.height - 10);

      doc.save("Evaluacion_Academica_UTVT_Reporte.pdf");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export default PDFacademico;
