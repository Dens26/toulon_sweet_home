<script setup>
import Navbar from '@/components/navbar/Navbar_secondary.vue'
import { useDataStore } from '@/stores/data';
import { RouterLink } from 'vue-router';
const dataStore = useDataStore()

const payload = dataStore.getpayload()
</script>

<template>
    <Navbar></Navbar>
    <div class="container-fluid tsh-container">
        <h1 class="p-2 mt-3">Gestion du compte de <b>{{ payload.userName }}</b></h1>
        <i>En cours de dévelopement ...</i>
        <ul>
            <li>Mon profil</li>
            <li>Mes locations</li>
            <ul>
                <li>Ajouter un logement</li>
                <li>Afficher mes logements</li>
            </ul>
            <li>Mes reservations</li>
            <li>Sécurité du compte</li>
            <li>Mes factures</li>
            <li>
                <RouterLink v-bind:to="{ name: 'home' }" v-on:click="dataStore.userLogout()">Se déconnecter</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>