import {ref} from 'vue'
import html2pdf from "html2pdf.js";

export function downloadPdf(){

const clientName = ref();
const condition = ref(true);
const inputBgColor = ref('background:yellow');

function processPdf(elementToPrint) {
  condition.value = false;
  inputBgColor.value = 'background:white';
  html2pdf(elementToPrint, {
    margin: 0,
    filename: `${clientName.value}_${new Date().toLocaleDateString()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { dpi: 192, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }).then((res) => {
    condition.value = true;
    location.reload();
  });
}

return{
  clientName,
  condition,
  inputBgColor,
  processPdf
}
}
