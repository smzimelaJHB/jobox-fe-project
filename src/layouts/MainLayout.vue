<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="display">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.display{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>



