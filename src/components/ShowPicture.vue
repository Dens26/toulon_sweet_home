<script setup>
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore()
const pictures = dataStore.getPictures()
</script>

<template>
    <div class="sticky-top tsh-sticky bg-light">
        <RouterLink class="btn btn-secondary btn-sm text-decoration-none m-3" v-bind:to="{ name: 'photo_gallery' }">Galerie
            photo</RouterLink>
    </div>
    <div id="carousel" class="carousel slide container-fluid p-4 tsh-container">
        <div class="carousel-inner">
            <div v-for="(picture, index) in pictures" v-bind:key="index" class="carousel-item"
                v-bind:class="{ 'active': index === 0 }">
                <img v-bind:src="picture.file_big" class="d-block w-100 img-fluid img-16_10"
                    v-bind:alt="'photo ' + picture.name">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>