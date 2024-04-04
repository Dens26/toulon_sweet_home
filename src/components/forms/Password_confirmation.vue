<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();
</script>

<template>
    <div class="mb-2">
        <label for="password-confirm" class="form-label m-0 p-1">Confirmation du mot de passe</label>
        <span class="d-flex">
            <input v-model="dataStore.user.passwordConfirm" type="password" class="form-control" id="password-confirm"
        placeholder="Confirmez votre mot de passe" required>
            <span v-if="dataStore.user.passwordConfirm">
                <img v-if="dataStore.passwordConfirmationVerification" class="m-2" src="/public/icons/circle-check-solid.svg"
                    alt="logo de vérification" width="24">
                <img v-else class="m-2" src="/public/icons/circle-exclamation-solid.svg" alt="logo de vérification"
                    width="24">
            </span>
        </span>
        <p v-if="dataStore.user.passwordConfirm" class="text-danger m-1 text-left">{{ dataStore.error.passwordConfirmError }}</p>
    </div>
</template>