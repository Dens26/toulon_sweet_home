<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="firstname" class="form-label m-0 p-1">Prénom</label>
        <span class="d-flex">
            <input v-model="dataStore.user.firstName" type="text" class="form-control" id="firstname" placeholder="Saisissez votre prénom" required>
            <span v-if="dataStore.user.firstName">
                <img v-if="dataStore.firstNameVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.firstName" class="text-danger m-1">{{ dataStore.error.firstNameError }}</p>
    </div>
</template>