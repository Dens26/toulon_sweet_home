<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="phoneNumber" class="form-label m-0 p-1">Numéro de téléphone</label>
        <span class="d-flex">
            <input v-model="dataStore.user.phoneNumber" type="text" class="form-control" id="phoneNumber" placeholder="Saisissez votre numéro de téléphone" required>
            <span v-if="dataStore.user.phoneNumber">
                <img v-if="dataStore.phoneNumberVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.phoneNumber" class="text-danger m-1">{{ dataStore.error.phoneNumberError }}</p>
    </div>
</template>