<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="lastName" class="form-label m-0 p-1">Nom</label>
        <span class="d-flex">
            <input v-model="dataStore.user.lastName" type="text" class="form-control" id="lastName" placeholder="Saisissez votre nom" required>
            <span v-if="dataStore.user.lastName">
                <img v-if="dataStore.lastNameVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.lastName" class="text-danger m-1">{{ dataStore.error.lastNameError }}</p>
    </div>
</template>