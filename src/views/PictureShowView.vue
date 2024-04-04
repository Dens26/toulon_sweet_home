<script setup>
import Navbar from '@/components/navbar/Navbar_secondary.vue'
import Carousel from '@/components/common/Carousel.vue'
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore()
const accommodation = dataStore.getAccommodation()
</script>

<template>
    <Navbar></Navbar>
    <RouterLink class="btn btn-secondary btn-sm text-decoration-none m-2" v-bind:to="{ name: 'photo_gallery' }">Retour</RouterLink>

    <div v-bind:id="'carousel-' + accommodation.id" class="carousel slide container-fluid pl-4 tsh-container">
        <Carousel v-bind:accommodation=accommodation v-bind:pictureSmall=false></Carousel>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>