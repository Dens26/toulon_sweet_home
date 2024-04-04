<script setup>
import Carousel from '@/components/common/Carousel.vue'
import Picture from '@/components/common/Picture.vue'
import AccommodationDescription from '@/components/accommodation/Accommodation_description.vue'
import { useDataStore } from '@/stores/data.js'
import { RouterLink } from 'vue-router'

const dataStore = useDataStore()

let accommodation = dataStore.getAccommodation()

const response = await fetch("http://localhost/api/accommodations/" + accommodation.id)
const data = await response.json()
dataStore.updateAccommodation(data.streetName, data.streetNumber, data.postal, data.city, data.country, data.pictures, data.host)

accommodation = dataStore.getAccommodation()

</script>

<template>
    <div v-if="accommodation" class="container-fluid p-4 tsh-container mt-4">
        <RouterLink class="card border-0" v-bind:to="{ name: 'photo_gallery' }">
            <div v-if="md" v-bind:id="'carousel-' + accommodation.id" class="carousel slide">
                <Carousel v-bind:accommodation=accommodation v-bind:pictureSmall=false></Carousel>
            </div>

            <div v-else class="row g-2">
                <Picture v-bind:picture=accommodation.pictures[0] v-bind:pictureSmall=false v-bind:lg=lg></Picture>
                <div class="col-6">
                    <div class="row align-items-center g-2 mb-2">
                        <Picture v-bind:picture=accommodation.pictures[1] v-bind:pictureSmall=true v-bind:lg=lg></Picture>
                        <Picture v-bind:picture=accommodation.pictures[2] v-bind:pictureSmall=true v-bind:lg=lg></Picture>
                    </div>
                    <div class="row align-items-center g-2">
                        <Picture v-bind:picture=accommodation.pictures[3] v-bind:pictureSmall=true v-bind:lg=lg></Picture>
                        <Picture v-bind:picture=accommodation.pictures[4] v-bind:pictureSmall=true v-bind:lg=lg></Picture>
                    </div>
                </div>
            </div>
        </RouterLink>

        <div v-if="lg" class="row g-4 mt-2">
            <div class="col-7">
                <AccommodationDescription v-bind:accommodation=accommodation></AccommodationDescription>
            </div>
            <div class="col-5 ">
                <div class="tsh-sticky border bg-light rounded-4 text-center p-2">
                    <button class="btn btn-lg btn-success m-3">Réserver</button>
                    <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit</p>
                </div>
            </div>
        </div>

        <div v-else class="row g-4 mt-2">
            <div>
                <AccommodationDescription v-bind:accommodation=accommodation></AccommodationDescription>
            </div>
            <div class="border fixed-bottom bg-light d-flex justify-content-between align-items-center">
                <button class="btn btn-lg btn-success m-3">Réserver</button>
                <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            md: false,
            lg: false
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateDisplay)
        this.updateDisplay()
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateDisplay)
    },
    methods: {
        updateDisplay() {
            this.md = window.innerWidth < 768
            this.lg = window.innerWidth > 992
        }
    }
}
</script>

<style scoped>
.tsh-sticky {
    position: sticky;
    top: 5.5rem;
}

.tsh-picture {
    width: 60px;
    border-radius: 30px;
}
</style>