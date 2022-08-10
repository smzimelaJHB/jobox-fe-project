<template lang="pug">
PageTop
h5(style="text-align:center; font-weight: bold;") FIXED TERM AGREEMENT
p(style="text-align:center;") between
h5(style="text-align:center; font-weight: bold;") BMF ATTORNEYS
  p with company registration number 2022/123456/07
p(style="text-align:center;") and


p(style="text-align:center; font-weight: bold;")
  input(v-model='clientName' :onchange="$emit('clientName', clientName)"
  placeholder="[INSERT CLIENT NAME]"
  style="text-align:center; border: 0px solid #ccc; border-radius: 4px; padding: 10px; min-width: 50%;" :style="inputBgColor"
  @click="changeColor")


p(style="text-align: center;") Collectively referred herein as the parties
</template>

<script setup>
import { ref } from "vue";
import PageTop from "src/components/PageTop.vue";

const changeColor = () => {
  inputBgColor.value = "background-color:white";
};
const inputBgColor = ref("background-color:yellow;");
const emits = defineEmits(["clientName"]);
const clientName = ref("");
</script>
