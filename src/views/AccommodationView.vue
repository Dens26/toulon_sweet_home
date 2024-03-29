<script setup>
import Accommodation from '../components/Accommodation.vue'
import Navbar from '../components/Navbar_secondary.vue'
</script>

<template>
  <Navbar></Navbar>
  <Suspense>
    <template #default>
      <Accommodation></Accommodation>
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
