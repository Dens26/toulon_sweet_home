<script setup>
const promesse = await fetch('http://localhost/api/accommodations')
const response = await promesse.json()
const accommodations = response['hydra:member'];
console.log(accommodations)

</script>

<template>
    <div class="container-fluid mt-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            <div class="col" v-for="accommodation in accommodations" :key="accommodation.id">
                <div class="card h-100 border-0">
                    <img v-bind:src="accommodation.pictures[0].file" class="card-img-top img-fluid img-square"
                        v-bind:alt="'photo ' + accommodation.name">
                    <div class="card-body d-flex flex-column justifiy-content-between">
                        <h5 class="card-title h5">{{ accommodation.name.substring(0, 50) }}</h5>
                        <p class="card-text fs-6">{{ accommodation.description.substring(0, 50) + '...' }}</p>
                        <div class="mt-auto text-end">
                            <p class="card-text"><span class="h5">{{ accommodation.price + " €" }}</span> par nuit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.img-square {
    object-fit: cover;
    aspect-ratio: 50/50;
    border-radius: 15px;
}
</style>