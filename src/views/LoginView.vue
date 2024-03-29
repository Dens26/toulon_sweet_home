<script setup>
import Navbar from '../components/Navbar_secondary.vue'
import Email from '../components/forms/Email.vue'
import Password from '../components/forms/Password.vue'
import AlertMessage from '../components/AlertMessage.vue'
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();

</script>

<template>
    <Navbar></Navbar>
    <AlertMessage></AlertMessage>
    <form class="container-fluid p-5 tsh-container">
        <h1 class="mb-5 text-center">Connexion au compte</h1>
        <Email></Email>
        <Password></Password>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary w-100 mt-3" v-on:click="dataStore.userLogin()">Valider</button>
    </form>

</template>

<style scoped>
.tsh-container {
    max-width: 576px;
}

</style>