<template lang="pug">
q-header
  q-toolbar(style='flex-direction:column')
    q-btn(flat='' dense='' round='')
      q-toolbar-title
        | RECRUITMENT RATES AND TERMS AGREEMENT
    q-btn(round  dence color="green" style="background-color:blue" icon="download" @click="checkFields")

div(id="element-to-print" style="")
  .page
    Page1(@client-name='(n)=>setClientName(n)')
    div(class="html2pdf__page-break")
  .page
    Page2(@service-description='(n)=>setServiceDescription(n)' @start-date='(n)=>setStartDate(n)' @end-date='(n)=>setEndDate(n)' @payment-amount='(n)=>setPaymentAmount(n)')

    div(class="html2pdf__page-break")
  .page
    Page3
    div(class="html2pdf__page-break")

</template>

<style>
.page {
  width: 210mm;
  min-height: 297mm;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
}
</style>

<script setup>
import { ref } from "vue";
import Page1 from "./Contract/page1.vue";
import Page2 from "./Contract/page2.vue";
import Page3 from "./Contract/page3.vue";
import { downloadPdf } from "./Scripts/";
import { useQuasar } from "quasar";
const $q = useQuasar();

const paymentAmount = ref();
const startDate = ref();
const endDate = ref();
const serviceDescription = ref();
const clientName = ref();
const elementToPrint = ref(null);

function setClientName(name) {
  clientName.value = name;
}
function setServiceDescription(description) {
  serviceDescription.value = description;
}
function setStartDate(date) {
  startDate.value = date;
}
function setEndDate(date) {
  endDate.value = date;
}
function setPaymentAmount(amount) {
  paymentAmount.value = amount;
}

function checkFields() {
  if (
    clientName.value &&
    serviceDescription.value &&
    startDate.value &&
    endDate.value &&
    paymentAmount.value
  ) {
    downloadPDF();
    triggerPositive("File Downloaded");
  } else {
    triggerNegative("Not all fields have values");
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
function downloadPDF() {
  elementToPrint.value = document.getElementById("element-to-print");
  downloadPdf().processPdf(elementToPrint.value);
}
</script>
