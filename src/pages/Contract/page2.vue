<template lang="pug">
PageTop
p
div
  ol
    li
      p(style="font-weight: bold;") Payment Terms:
  ul
    li
      p
        | BMF Attorney&rsquo;s fee R
        input(v-model='paymentAmount' placeholder="[Payment Amount]" :style="inputBgColor" @click="changeInputBgColor")
        | (excluding VAT) . The retainer fee can
        | be paid upfront, or month-to-month and the payment terms can be payable as
        | follows:
    ul
      li
        p Upfront:
      ul
        li
          p
            | Three-twelfths of the fee during the probation period in 3 equal instalments
            | by the 7th day of each month
        li
          p
            | Nine-twelfths of the fee upon conclusion of the probation period of
            | employment payable on the 7th day of the 4th month.
      li
        p Month-to-month:
      ul
        li
          p The month-to-month fee shall be paid by the 7th day of each month
    li
      p
        | No variation or amendment to this Agreement shall be of any effect unless such
        | amendment is put in writing and signed by all parties
    li
      p
      | Any documentation prepared by
      span(style="font-weight: bold;") &nbsp; BMF Attorneys
      span(style="font-weight:light;") &nbsp; remains its property
  br
  ol(start='2')
    li
      p(style="font-weight: bold;")
        | Appointment
        br
        br
    ol
      li
        p
          | The Client has procured the services of
          span(style="font-weight: bold;") &nbsp; BMF Attorneys
          span(style="font-weight:light;")  &nbsp; and hereby accepts the
          | appointment as an independent contractor of the Client for a fixed period of
          | time.
      li
        p
          | The reason for this fixed-term contract is
          span(style="font-weight: bold;")  for the appointment and completion of the
          input(v-model='serviceDescription' :style="inputBgColor" placeholder="[Service Description]")
    li
      p(style="font-weight: bold;") Duration
    ol
      li
        p
          | Notwithstanding the date of signature hereof, this fixed term contract shall
          | be deemed to have commenced on the
          input(v-model='startDate' type='date' :style="inputBgColor")
          | and will terminate, without further notice, on the
          input(v-model='endDate' type='date' :style="inputBgColor")

      li
        p
          | The automatic termination of the contract on the Termination Date shall not be
          | construed as a dismissal but as the completion of a fixed term contract.
        p(style="margin-top:200px")
PageBottom(pageCount='3' pageNumber='2')
</template>

<style>
  input{
    border: 0px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    width:150px;
  }


</style>

<script setup>
import {ref} from 'vue';
import PageTop from 'src/components/PageTop.vue';
import PageBottom from 'src/components/PageBottom.vue';


const props = defineProps(["paymentAmount", "startDate", "endDate","serviceDescription","inputBgColor"]);

</script>

