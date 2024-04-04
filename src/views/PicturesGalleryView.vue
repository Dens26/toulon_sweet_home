<script setup>
import { useDataStore } from '@/stores/data'
import { RouterLink } from 'vue-router'
const dataStore = useDataStore()

const accommodation = dataStore.getAccommodation()

</script>

<template>
    <div class="sticky-top tsh-sticky bg-light">
        <RouterLink class="btn btn-secondary btn-sm text-decoration-none m-3" v-bind:to="{ name: 'accommodation', params: { id: accommodation.id } }">Retour au Logement</RouterLink>
    </div>
    <div class="container-fluid p-4 tsh-container">
        <div class="tsh-container tsh-grid">
            <div v-for="(picture, index) in accommodation.pictures" :key="index">
                <div v-if="index % 3 == 0">
                    <RouterLink v-bind:to="{ name: 'picture', params: { id: picture.id } }"><img class="w-100 img-16_10 p-1" v-bind:src="picture.file_big" :alt="picture.name"></RouterLink>
                </div>
                <div v-else-if="(index + 2) % 3 == 0">
                    <img class="w-50 img-16_10 p-1" :src="picture.file_big" :alt="picture.name">
                    <span v-if="index + 1 < accommodation.pictures.length">
                        <img class="w-50 img-16_10 p-1" v-bind:src="accommodation.pictures[index + 1].file_big" v-bind:alt="accommodation.pictures[index + 1].name">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.tsh-container {
    max-width: 992px;
    margin: 0 auto;
    margin-top: 15px;
    display: grid;
}
</style>