<template lang="pug">
PageTop
h5(style="text-align:center; font-weight: bold;") FIXED TERM AGREEMENT
p(style="text-align:center;") between
h5(style="text-align:center; font-weight: bold;") BMF ATTORNEYS
  p with company registration number 2022/123456/07
p(style="text-align:center;") and


p(style="text-align:center; font-weight: bold;")
  input(v-model='ClientName'
  placeholder="[INSERT CLIENT NAME]" style="text-align:center; border: 0px solid #ccc; border-radius: 4px; padding: 10px; min-width: 50%;" :style="inputBgColor")


p(style="text-align: center;") Collectively referred herein as the parties
</template>

<script setup>
import PageTop from 'src/components/PageTop.vue';
import PageBottom from 'src/components/PageBottom.vue';
defineProps(["ClientName","inputBgColor"]);
</script>
