<script setup>
import { RouterLink } from 'vue-router'
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();

dataStore.getConnectionStatus();

</script>

<template>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-ul">
            <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" v-bind:to="{name:'login'}">{{ dataStore.navbar.account.name
                    }}</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" v-bind:to="{name : 'register'}">
                    {{ dataStore.navbar.inscription.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar-ul {
    display: flex;
    flex-direction: column;
    color: black;
    list-style-type: none;
    gap: 1rem;
    margin: 0 auto;
    padding: 10px 0;
}

@media screen and (min-width: 768px) {
    .navbar-ul {
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
    }
}
</style>