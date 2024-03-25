<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <div class= "tsh-navbar-container">
                <RouterLink to="/" class="navbar-brand">TSH</RouterLink>
                <div class="tsh-navbar-search">
                    <form class="d-flex" role="search">
                        <input class="form-control" type="search" placeholder="Recherchez" aria-label="Search">
                        <button class="btn" type="submit"><img src="/public/icons/search.svg" alt="Bouton rechercher" title="Recherchez" width="24"></button>
                    </form>
                </div>
                <button class="btn" type="button"><img src="/public/icons/filter-solid.svg" alt="Bouton filtrer" title="Option d'affichage" width="26"></button>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="tsh-navbar-ul">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/connexion">Connexion</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/inscription">Inscription</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="">

</style>