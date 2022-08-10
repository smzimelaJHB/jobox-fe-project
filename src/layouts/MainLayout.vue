<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar style="flex-direction:column">
        <q-btn
          flat
          dense
          round
        />
        <q-toolbar-title>
          RECRUITMENT RATES AND TERMS AGREEMENT
        </q-toolbar-title>

      </q-toolbar>
    </q-header>


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



