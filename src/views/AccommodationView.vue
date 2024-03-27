<script setup>
import GetAccommodation from '../components/GetAccommodation.vue'
import Navbar from '../components/Navbar_secondary.vue'
</script>

<template>
  <Navbar></Navbar>
  <Suspense>
    <template #default>
      <GetAccommodation></GetAccommodation>
    </template>
    <template #fallback>
      En cours de chargement ...
    </template>
  </Suspense>
</template>
