<script setup>

</script>

<template>
    <div>
        <h1 class="card-title">{{ accommodation.name }}</h1>
        <p class="card-text fs-6 m-1">{{ accommodation.streetNumber }} {{ accommodation.streetName }} - ({{
            accommodation.postal }}) {{ accommodation.city }} - {{ accommodation.country }}</p>
        <p class="card-text fs-6 m-1">{{ accommodation.nbrOfRooms }} chambres - {{ accommodation.maxPerson }} personnes.
        </p>
        <hr>
        <div class="d-flex">
            <img class="tsh-picture" v-bind:src="accommodation.host.picture" alt="Photo de l'hote">
            <div>
                <p class="card-text fs-6 m-1">Proposé par : {{ accommodation.host.firstName }} {{
            accommodation.host.lastName }}</p>
                <p class="card-text fs-6 m-1">Déjà {{ seniority(accommodation.host.createdAt) }} ans d'expérience</p>
            </div>
        </div>
        <hr>
        <p class="card-text fs-6 m-1" v-html="accommodation.description"></p>
    </div>
</template>

<script>
export default {
    props : {
        accommodation : {}
    },
    methods: {
        seniority(date) {
            return parseInt((Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24 * 365))
        }
    }
}
</script>

<style scoped></style>