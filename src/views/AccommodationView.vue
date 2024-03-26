<script setup>
  import GetAccommodation from '../components/GetAccommodation.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <GetAccommodation></GetAccommodation>
    </template>
    <template #fallback>
      En cours de chargement ...
    </template>
  </Suspense>
</template>
