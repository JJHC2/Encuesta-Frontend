import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/image/cuervo.png";

const generatePDF = (jobData, encuesta) => {
  return new Promise((resolve, reject) => {
    try {
      const input = document.getElementById("pdf-pie-chart");
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const margin = 20;
        const imgWidth = pdf.internal.pageSize.width - 2 * margin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = margin;

        pdf.setFillColor(0, 128, 0);
        pdf.rect(margin, position, pdf.internal.pageSize.width - 2 * margin, 30, 'F');
        pdf.addImage(logo, "PNG", margin + 10, position + 2, 40, 30);
        
        position += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255);
        pdf.text("Reporte de Inserción Laboral de Alumnos", margin + 60, position);

        position += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255);
        pdf.text("Universidad Tecnológica del Valle de Toluca - UTVT", margin + 60, position);

        position += 20;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        const descriptionLines = [
          "Este reporte presenta un análisis detallado de la inserción laboral de nuestros egresados.",
          "A continuación, se muestran los resultados de la encuesta de empleo realizada a los alumnos.",
          "Se espera que esta información sea útil para la mejora continua de nuestros programas educativos y de vinculación laboral."
        ];
        const maxWidth = pdf.internal.pageSize.width - 2 * margin;
        
        descriptionLines.forEach((line) => {
          const splitDescription = pdf.splitTextToSize(line, maxWidth);
          splitDescription.forEach((textLine) => {
            if (position + 8 > pdf.internal.pageSize.height - margin) {
              pdf.addPage();
              position = margin;
            }
            pdf.text(textLine, margin, position);
            position += 8;
          });
        });

        position += 5;
        pdf.setFontSize(14);
        pdf.setTextColor(0, 51, 102);
        pdf.text("Metodología", margin, position);
        
        position += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        const methodologyText = "La encuesta de inserción laboral fue aplicada a todos los egresados del periodo 2023-2024. Se utilizaron métodos estadísticos descriptivos para analizar los resultados obtenidos y se presenta un desglose de los mismos en las siguientes secciones.";
        
        const splitMethodology = pdf.splitTextToSize(methodologyText, maxWidth);
        splitMethodology.forEach((textLine) => {
          if (position + 10 > pdf.internal.pageSize.height - margin) {
            pdf.addPage();
            position = margin;
          }
          pdf.text(textLine, margin, position);
          position += 10;
        });

        position += 5;
        pdf.setFontSize(14);
        pdf.setTextColor(0, 51, 102);
        pdf.text("Resumen de Inserción Laboral", margin, position);

        position += 5;
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

        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255);
        pdf.setFillColor(0, 128, 0); 
        tableHeaders.forEach((header, i) => {
          pdf.rect(currentX, currentY, 75, 10, "F");
          pdf.text(header, currentX + cellPadding, currentY + 7);
          currentX += 75;
        });

        currentX = margin;
        currentY += 10;
        pdf.setTextColor(0, 0, 0); 
        tableData.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
            if (rowIndex % 2 === 0) {
              pdf.setFillColor(240, 240, 240); 
            } else {
              pdf.setFillColor(255, 255, 255); 
            }
            pdf.rect(currentX, currentY, 75, 10, "F");
            pdf.text(cell.toString(), currentX + cellPadding, currentY + 7);
            currentX += 75;
          });
          currentX = margin;
          currentY += 10;
        });


        //Grafica
        position = currentY + 20;

        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        position += imgHeight + 15;

        position += 35;
        pdf.setFontSize(14);
        pdf.setTextColor(0, 51, 102);
        pdf.text("Análisis Gráfico", margin, position);

        position += 10;
        pdf.setFontSize(12);
        const analysisText = "El gráfico a continuación muestra el porcentaje de inserción laboral de los egresados. Esta información es clave para evaluar la efectividad de los programas educativos y las oportunidades de empleo.";

        const splitAnalysis = pdf.splitTextToSize(analysisText, maxWidth);
        splitAnalysis.forEach((textLine) => {
          if (position + 10 > pdf.internal.pageSize.height - margin) {
            pdf.addPage();
            position = margin;
          }
          pdf.text(textLine, margin, position);
          position += 10;
        });

        position += 20;
        pdf.setFontSize(14);
        pdf.setTextColor(0, 51, 102);
        pdf.text("Conclusión", margin, position);
        
        position += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);

        const conclusionText = jobData.no > jobData.yes
          ? "Un porcentaje alto de egresados no está trabajando. Se recomienda reforzar los programas de vinculación profesional y las oportunidades de empleo para mejorar la tasa de inserción laboral."
          : jobData.no < jobData.yes
          ? "La mayoría de los egresados están trabajando, lo que refleja el éxito de los programas de inserción laboral. Continuar con estos esfuerzos y expandir las oportunidades de empleo será beneficioso."
          : "El número de egresados que trabajan es igual al de los que no trabajan, lo que sugiere un equilibrio en la inserción laboral. Es importante seguir monitorizando la situación para ajustar las estrategias de vinculación y empleo de manera efectiva.";

        const splitConclusion = pdf.splitTextToSize(conclusionText, maxWidth);
        splitConclusion.forEach((textLine) => {
          if (position + 10 > pdf.internal.pageSize.height - margin) {
            pdf.addPage();
            position = margin;
          }
          pdf.text(textLine, margin, position);
          position += 10;
        });

        position += 15;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        const contactText = "Para más información, por favor visita la oficina de Vinculación en la UTVT";
        pdf.text(contactText, margin, position);
        
        position += 10;
        pdf.setFontSize(10);
        pdf.setTextColor(150, 150, 150);
        pdf.text(`Página ${pdf.internal.getCurrentPageInfo().pageNumber} de ${pdf.internal.getNumberOfPages()}`, pdf.internal.pageSize.width - margin - 40, pdf.internal.pageSize.height - margin);

        
        position += 20;
        pdf.setFontSize(16);
        pdf.setTextColor(255, 0, 0); 
        pdf.text("¡Gracias por colaborar con nosotros!", margin, position);

        resolve(pdf);
        pdf.save("Reporte_Insercion_Laboral.pdf");
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default generatePDF;
