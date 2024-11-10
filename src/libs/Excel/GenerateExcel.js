import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const GenerateExcel = async (seccionData) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Reporte de Respuestas");

    worksheet.mergeCells("A1", "B1");
    const titleCell = worksheet.getCell("A1");
    titleCell.value = "UNIVERSIDAD TECNOLÓGICA DEL VALLE DE TOLUCA";
    titleCell.font = { size: 16, bold: true, color: { argb: 'FFFFFF' } };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1E4E79' } };

    worksheet.addRow([]);  

    
    worksheet.mergeCells("A3", "B3");
    const subtitleCell = worksheet.getCell("A3");
    subtitleCell.value = "Reporte de Análisis de Respuestas por Sección";
    subtitleCell.font = { size: 14, bold: true, color: { argb: '1E4E79' } };
    subtitleCell.alignment = { horizontal: 'center' };

    worksheet.addRow([]);
    worksheet.mergeCells("A5", "B5");
    const descriptionCell = worksheet.getCell("A5");
    descriptionCell.value = "Este documento muestra un análisis detallado de las respuestas obtenidas en el sistema de encuestas de la UTVT. Este reporte está diseñado para proporcionar una visión clara de la participación y las áreas de enfoque de cada sección. A continuación, se desglosan los datos recopilados de cada sección para un análisis más profundo.";
    descriptionCell.font = { size: 12, italic: true, color: { argb: '1E4E79' } };
    descriptionCell.alignment = { wrapText: true }; 

    worksheet.addRow(["Fecha de generación:", new Date().toLocaleDateString()]);
    worksheet.addRow([]); 
    worksheet.addRow(["Resumen de Respuestas:"]);

    // Información de contexto
    worksheet.mergeCells("A10", "B10");
    worksheet.getCell("A10").value = "Objetivo del Reporte:";
    worksheet.getCell("A10").font = { bold: true };
    worksheet.addRow(["Este reporte tiene como objetivo facilitar la toma de decisiones basada en la respuesta de los estudiantes y analizar áreas de mejora dentro del programa educativo. La información aquí presentada ha sido recopilada en un periodo específico para ofrecer una perspectiva precisa."]);
    worksheet.getRow(worksheet.rowCount).alignment = { wrapText: true };
    
    worksheet.addRow([]);
    worksheet.mergeCells("A13", "B13");
    worksheet.getCell("A13").value = "Resumen de Resultados:";
    worksheet.getCell("A13").font = { bold: true };
    worksheet.addRow(["Cada sección refleja la cantidad total de respuestas recibidas, lo cual indica el nivel de interés y participación. Estas estadísticas son esenciales para identificar secciones con alta o baja participación y evaluar la efectividad de las estrategias implementadas."]);
    worksheet.getRow(worksheet.rowCount).alignment = { wrapText: true };

    worksheet.addRow([]);  

   
    worksheet.addRow(["Sección", "Cantidad de Respuestas"]);
    const headerRow = worksheet.getRow(worksheet.rowCount);
    headerRow.font = { bold: true, color: { argb: 'FFFFFF' } };
    headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1E4E79' } };
    headerRow.alignment = { horizontal: 'center', wrapText: true };  
    headerRow.eachCell((cell) => {
      cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });

    
    seccionData.forEach((seccion) => {
      const row = worksheet.addRow([seccion.seccion, seccion.count]);
      row.alignment = { horizontal: 'center', wrapText: true };  
      row.eachCell((cell) => {
        cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
      });
    });

   
    worksheet.columns = [
      { width: 40 },  
      { width: 25 },  
    ];


    worksheet.addRow([]);
    const footerRow = worksheet.addRow([
      `Reporte generado automáticamente por el sistema de encuestas UTVT el ${new Date().toLocaleString()}.`
    ]);
    worksheet.mergeCells(`A${footerRow.number}`, `B${footerRow.number}`);
    footerRow.font = { italic: true, color: { argb: '888888' } };
    footerRow.alignment = { horizontal: 'left' };

    worksheet.addRow([
      "Nota: Este reporte es confidencial y se recomienda su uso exclusivamente para análisis interno de la universidad. Los datos aquí reflejados están sujetos a las políticas de privacidad de la UTVT."
    ]);
    worksheet.mergeCells(`A${footerRow.number + 1}`, `B${footerRow.number + 1}`);
    worksheet.getRow(footerRow.number + 1).font = { italic: true, color: { argb: '888888' } };
    worksheet.getRow(footerRow.number + 1).alignment = { horizontal: 'left', wrapText: true };

    // Generar y descargar el archivo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "Reporte_Respuestas_UTVT.xlsx");
  } catch (error) {
    console.error("Error al generar el archivo Excel:", error);
  }
};

export default GenerateExcel;
