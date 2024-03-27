<script setup>
import { RouterLink } from 'vue-router'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()

</script>

<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <div class="navbar-container">
                <RouterLink to="/" class="navbar-brand">TSH</RouterLink>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-ul">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/connexion">Connexion</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/inscription">Inscription
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-container {
    display: flex;
}

.navbar-ul{
    display: flex;
    flex-direction: column;
    color: black;
    list-style-type: none;
    gap: 1rem;
    margin: 0 auto;
    padding: 10px 0;
}

@media screen and (min-width: 412px) {
    .navbar-search input {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .navbar-ul{
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
    }
}
</style>