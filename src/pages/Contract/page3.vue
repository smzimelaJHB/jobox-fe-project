<template lang="pug">
PageTop
.container
  p
    span(style="margin-left:10%") Signed at
    input(type="text",style="width:40%;")
    | on
    input(type="text",style="width:40%;")
  p
    span(style="margin-left:10%")
    input(type="text", style="width:40%; border-bottom:1px solid black")
  p
    span(style="margin-left:10%") Who warrants authority on behalf of Jobox

  p(style="margin-top:10%;")
    span(style="margin-left:10%;") Signed at
    input(type="text",style="width:40%;")
    | on
    input(type="text",style="width:40%;")
  p
    span(style="margin-left:10%")
    input(type="text", style="width:40%; border-bottom:1px solid black")

  p
    span(style="margin-left:10%") Who warrants authority on behalf of
.footer
  PageBottom(pageCount='3' pageNumber='3' )
</template>

<style>
.container{
  margin-top: 10%;
  display: flex;
  flex-direction: column;
}
.footer{
  margin-top: 70%;
}

</style>

<script setup>
import PageTop from 'src/components/PageTop.vue';
import PageBottom from 'src/components/PageBottom.vue';
defineProps(["inputBgColor","signedAt"]);
</script>
