<script setup>
  import Navbar from '../components/navbar/Navbar_main.vue'
  import Accommodations from '../components/accommodation/Accommodations.vue'
</script>

<template>
  <!-- <Navbar></Navbar> -->
  <Suspense>
    <template #default>
      <Accommodations></Accommodations>
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