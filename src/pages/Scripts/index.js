import {ref} from 'vue'
import html2pdf from "html2pdf.js";

export function downloadPdf(){

const condition = ref(true);

function processPdf(elementToPrint) {
  condition.value = false;
  html2pdf(elementToPrint, {
    margin: 0,
    filename: `document_${new Date().toLocaleDateString()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { dpi: 192, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }).then((res) => {
    condition.value = true;
    location.reload();
  });
}

return{
  condition,
  processPdf,
}
}
