<script setup>
  import Navbar from '../components/Navbar_main.vue'
  import GetAccommodations from '../components/GetAccommodations.vue'
</script>

<template>
  <Navbar></Navbar>
  <Suspense>
    <template #default>
      <GetAccommodations></GetAccommodations>
    </template>
    <template #fallback>
      En cours de chargement ...
    </template>
  </Suspense>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>