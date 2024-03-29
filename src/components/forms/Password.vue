<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="password" class="form-label m-0 p-1">Mot de passe</label>
        <span class="d-flex">
            <input v-model="dataStore.user.password" type="password" class="form-control" id="password"
        placeholder="Saisissez votre mot de passe" required>
            <span v-if="dataStore.user.password">
                <img v-if="dataStore.passwordVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.password" class="text-danger m-1 text-left">{{ dataStore.error.passwordError }}</p>
    </div>
</template>