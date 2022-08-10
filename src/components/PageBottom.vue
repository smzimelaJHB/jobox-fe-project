<template lang="pug">
.position
  hr(style="border: 0.5px solid #000; width:90%")
  div(style="text-align: center;")  Page {{pageNumber}} of {{pageCount}}
</template>
<style>
.position{
  position: relative;
  bottom: 0;
}
</style>

<script setup>
  defineProps(["pageNumber", "pageCount"]);
</script>
