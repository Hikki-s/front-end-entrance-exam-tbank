import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function exportHTMLtoPDF(elementToPrint) {

	html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
		const imgData = canvas.toDataURL('image/png');

		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'a4',
			putOnlyUsedFonts: true,
			floatPrecision: 16
		});

		pdf.addImage(imgData, 'PNG', 25, 15, 396, 599, undefined, 'FAST', 0);

		pdf.save('download.pdf');
	});
}
