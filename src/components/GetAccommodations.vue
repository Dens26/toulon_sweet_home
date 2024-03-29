<script setup>
// Import
import { RouterLink } from 'vue-router'
import {useDataStore} from '../stores/data.js'
const dataStore = useDataStore()

// Get the accommodations in database
const promesse = await fetch('http://localhost/api/accommodations')
const response = await promesse.json()
const accommodations = response['hydra:member'];
console.log(accommodations)

</script>

<template>
    <div class="container-fluid p-4 tsh-container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            <div class="col" v-for="accommodation in accommodations" :key="accommodation.id">
                <RouterLink :to="{ name: 'accommodation', params: { id: accommodation.id }}" class="card h-100 border-0" v-on:click="dataStore.setAccommodation(accommodation)">
                        <div v-bind:id="'carousel-' + accommodation.id" class="carousel slide">
                            <div class="carousel-inner">
                                <div v-for="(picture, index) in accommodation.pictures" :key="index"
                                    class="carousel-item" v-bind:class="{ 'active': index === 0 }">
                                    <img v-bind:src="picture.file_small" class="d-block w-100 img-fluid img-square"
                                        v-bind:alt="'photo ' + accommodation.name">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                v-bind:data-bs-target="'#carousel-' + accommodation.id" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                v-bind:data-bs-target="'#carousel-' + accommodation.id" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div class="card-body d-flex flex-column justifiy-content-between">
                            <h5 class="card-title h5">{{ accommodation.name.substring(0, 50) }}</h5>
                            <p class="card-text fs-6">{{ accommodation.subtitle }}</p>
                            <div class="mt-auto text-end">
                                <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit
                                </p>
                            </div>
                        </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>