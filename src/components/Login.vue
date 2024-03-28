<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();

</script>

<template>
    <form class="container-fluid p-5 tsh-container">
        <h1 class="mb-5 text-center">Connection au compte</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Adresse e-mail</label>
            <input v-model="dataStore.user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Saisissez votre adresse e-mail" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input v-model="dataStore.user.password" type="password" class="form-control" id="password" placeholder="Saisissez votre mot de passe" required>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="remember-me">
            <label class="form-check-label" for="remember-me">Se souvenir de moi</label>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="dataStore.userLogin()">Valider</button>
    </form>
</template>
<script>
export default {

}
</script>
<style scoped>
.tsh-container{
    max-width: 576px;
}
</style>