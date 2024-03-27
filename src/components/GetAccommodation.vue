<script setup>
import { useDataStore } from '../stores/data.js'
import { RouterLink } from 'vue-router'

const dataStore = useDataStore()

let accommodation = dataStore.getAccommodation()

const response = await fetch("http://localhost/api/accommodations/" + accommodation.id)
const data = await response.json()
dataStore.updateAccommodation(data.streetName, data.streetNumber, data.postal, data.city, data.country, data.pictures, data.host)

accommodation = dataStore.getAccommodation()

</script>

<template>
    <div v-if="accommodation" class="container-fluid mt-4 tsh-container">
        <div class="mt-4">
            <RouterLink to="/galerie-photo">
                <div class="card border-0">
                    <div v-if="md" id="carousel-accommodation" class="carousel slide">
                        <div class="carousel-inner">
                            <div v-for="(picture, index) in accommodation.pictures" v-bind:key="index"
                                class="carousel-item" v-bind:class="{ 'active': index === 0 }">
                                <img v-bind:src="picture.file_big" class="d-block w-100 img-fluid img-4-3"
                                    v-bind:alt="'photo ' + accommodation.name">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-accommodation"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-accommodation"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div v-else>
                        <div class="row g-2">
                            <div class="col-6 text-center align-self-center">
                                <img :src="accommodation.pictures[0].file_big" class="d-block w-100 img-fluid"
                                    v-bind:class="lg ? 'img-16_10' : 'img-square'"
                                    v-bind:alt="'photo ' + accommodation.name">
                            </div>
                            <div class="col-6">
                                <div class="row align-items-center g-2 mb-2">
                                    <div class="col-6 text-center">
                                        <img :src="accommodation.pictures[1].file_small" class="d-block w-100 img-fluid"
                                            v-bind:class="lg ? 'img-16_10' : 'img-square'"
                                            v-bind:alt="'photo ' + accommodation.name">
                                    </div>
                                    <div class="col-6 text-center">
                                        <img :src="accommodation.pictures[2].file_small" class="d-block w-100 img-fluid"
                                            v-bind:class="lg ? 'img-16_10' : 'img-square'"
                                            v-bind:alt="'photo ' + accommodation.name">
                                    </div>
                                </div>
                                <div class="row align-items-center g-2">
                                    <div class="col-6 text-center">
                                        <img v-bind:src="accommodation.pictures[3].file_small"
                                            class="d-block w-100 img-fluid"
                                            v-bind:class="lg ? 'img-16_10' : 'img-square'"
                                            v-bind:alt="'photo ' + accommodation.name">
                                    </div>
                                    <div class="col-6 text-center">
                                        <img :src="accommodation.pictures[4].file_small" class="d-block w-100 img-fluid"
                                            v-bind:class="lg ? 'img-16_10' : 'img-square'"
                                            v-bind:alt="'photo ' + accommodation.name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RouterLink>
            <div v-if="lg" class="row g-4 mt-2">
                <div class="col-7">
                    <h1 class="card-title">{{ accommodation.name }}</h1>
                    <p class="card-text fs-6 m-1">{{ accommodation.streetNumber }} {{ accommodation.streetNam }} - ({{
        accommodation.postal }}) {{ accommodation.city }} - {{ accommodation.country }}</p>
                    <p class="card-text fs-6 m-1">{{ accommodation.nbrOfRooms }} chambres - {{ accommodation.maxPerson
                        }} personnes.</p>
                    <hr>
                    <div class="d-flex">
                        <img class="tsh-picture" v-bind:src="accommodation.host.picture" alt="Photo de l'hote">
                        <div>
                            <p class="card-text fs-6 m-1">Proposé par : {{ accommodation.host.firstName }} {{
        accommodation.host.lastName }}</p>
                            <p class="card-text fs-6 m-1">Déjà {{ seniority(accommodation.host.createdAt) }} ans
                                d'expérience</p>
                        </div>
                    </div>
                    <hr>
                    <p class="card-text fs-6 m-1" v-html="accommodation.description"></p>
                </div>
                <div class="col-5">
                    <div class="tsh-sticky">
                        <div class="border bg-light rounded-4 text-center p-2">
                            <button class="btn btn-lg btn-success m-3">Réserver</button>
                            <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-else class="row g-4 mt-2">
                <div>
                    <h1 class="card-title">{{ accommodation.name }}</h1>
                    <p class="card-text fs-6 m-1">{{ accommodation.streetNumber }} {{ accommodation.streetName }} - ({{
        accommodation.postal }}) {{ accommodation.city }} - {{ accommodation.country }}</p>
                    <p class="card-text fs-6 m-1">{{ accommodation.nbrOfRooms }} chambres - {{ accommodation.maxPerson
                        }} personnes.</p>
                    <hr>
                    <div class="d-flex">
                        <img class="tsh-picture" v-bind:src="accommodation.host.picture" alt="Photo de l'hote">
                        <div>
                            <p class="card-text fs-6 m-1">Proposé par : {{ accommodation.host.firstName }} {{
        accommodation.host.lastName }}</p>
                            <p class="card-text fs-6 m-1">Déjà {{ seniority(accommodation.host.createdAt) }} ans
                                d'expérience</p>
                        </div>
                    </div>
                    <hr>
                    <p class="card-text fs-6 m-1" v-html="accommodation.description"></p>
                </div>
                <div class="border fixed-bottom bg-light">
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-lg btn-success m-3">Réserver</button>
                        <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit
                        </p>
                    </div>
                </div>
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
        },
        seniority(date) {
            return parseInt((Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24 * 365))
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