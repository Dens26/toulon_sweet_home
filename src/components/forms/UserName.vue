<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="userName" class="form-label m-0 p-1">Nom d'utilisateur</label>
        <span class="d-flex">
            <input v-model="dataStore.user.userName" type="text" class="form-control" id="userName" placeholder="Saisissez votre pseudo" required>
            <span v-if="dataStore.user.userName">
                <img v-if="dataStore.userNameVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.userName" class="text-danger m-1">{{ dataStore.error.userNameError }}</p>
    </div>
</template>