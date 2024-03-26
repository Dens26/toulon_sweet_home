<script setup>
import { useDataStore } from '@/stores/data'
import { RouterLink } from 'vue-router'
const dataStore = useDataStore()

const accommodation = dataStore.getAccommodation()
console.log(accommodation)
</script>

<template>
    <div class="sticky-top p-1 tsh-sticky m-0 tsh-sticky">
        <RouterLink class="btn btn-primary text-decoration-none m-3" v-bind:to="'/logement/' + accommodation.id">Revenir
            au descriptif</RouterLink>
    </div>
    <div class="container-fluid mt-4">
        <div class="tsh-container tsh-grid">
            <div v-for="(picture, index) in accommodation.pictures" :key="index">
                <div v-if="index % 3 == 0">
                    <img class="w-100 img-16_10 p-1" v-bind:src="picture.file_big" :alt="picture.name">
                </div>
                <div v-else-if="(index + 2) % 3 == 0">
                    <img class="w-50 img-16_10 p-1" :src="picture.file_big" :alt="picture.name">
                    <span v-if="index + 1 < accommodation.pictures.length">
                        <img class="w-50 img-16_10 p-1" v-bind:src="accommodation.pictures[index + 1].file_big"
                            :alt="accommodation.pictures[index + 1].name">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.tsh-sticky{
    background-color: white;
}
.tsh-container {
    max-width: 768px;
    margin: 0 auto;
    margin-top: 15px;
    display: grid;
}

.img-16_10 {
    object-fit: cover;
    aspect-ratio: 16/10;
    border-radius: 20px;
}
</style>