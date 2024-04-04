<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="email" class="form-label m-0 p-1">Adresse e-mail</label>
        <span class="d-flex">
            <input v-model="dataStore.user.email" type="email" class="form-control" id="email"
                aria-describedby="emailHelp" placeholder="Saisissez votre adresse e-mail" required>
            <span v-if="dataStore.user.email">
                <img v-if="dataStore.emailVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.email" class="text-danger m-1">{{ dataStore.error.emailError }}</p>
    </div>
</template>