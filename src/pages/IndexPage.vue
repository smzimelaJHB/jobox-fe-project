<template lang="pug">
div(style="margin-left:95%, position: absolute; top: 80px;")
  q-btn(round  dence color="green" style="background-color:blue" icon="download" @click="checkFields")

div(id="element-to-print" style="")
  .page
    Page1(:ClientName="clientName" :inputBgColor='inputBgColor')
    div(class="html2pdf__page-break")
  .page
    Page2(:paymentAmount="paymentAmount",:startDate="startDate",:endDate="endDate",:serviceDescription="serviceDescription" :inputBgColor='inputBgColor')
    div(class="html2pdf__page-break")
  .page
    Page3(:inputBgColor='inputBgColor')
    div(class="html2pdf__page-break")

</template>

<style>
.page {
    width: 210mm;
    min-height: 297mm;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
}
</style>


<script setup>

import { ref,watch } from "vue";
import Page1 from './Contract/page1.vue'
import Page2 from './Contract/page2.vue'
import Page3 from './Contract/page3.vue'
import {downloadPdf} from './Scripts/'
import { useQuasar } from "quasar";
const $q = useQuasar();

const Download = ref(true);
const paymentAmount = ref()
const startDate = ref()
const endDate = ref()
const serviceDescription = ref()
const showDownloadButton = downloadPdf().condition;
const clientName = downloadPdf().clientName;
const elementToPrint = ref(null);
const inputBgColor = downloadPdf().inputBgColor;



function checkFields(){
 if(false){
      triggerNegative("Not all fields have values")
 }else{
      downloadPdf()
      triggerPositive("File Downloaded")
 }
}
const triggerPositive = (msg) => {
  $q.notify({
    type: "positive",
    message: msg,
    position: "top",
  });
};

const triggerNegative = (msg) => {
  $q.notify({
    type: "negative",
    message: msg,
    position: "top",
  });
};

function downloadPDF(){
  elementToPrint.value = document.getElementById('element-to-print');
  downloadPdf().processPdf(elementToPrint.value);
}

</script>




