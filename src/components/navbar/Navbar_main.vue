<script setup>
import { RouterLink } from 'vue-router'
import NavbarTemplate from '@/components/navbar/Navbar_template.vue'
</script>

<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <div class= "navbar-container">
                <RouterLink v-bind:to="{ name:'home'}" class="navbar-brand">TSH</RouterLink>
                <div class="navbar-search">
                    <form class="d-flex" role="search">
                        <input class="form-control" type="search" placeholder="Recherchez" aria-label="Search">
                        <button class="btn" type="submit"><img src="/public/icons/search.svg" alt="Bouton rechercher" title="Recherchez" width="24"></button>
                    </form>
                </div>
                <button class="btn" type="button"><img src="/public/icons/filter.svg" alt="Bouton filtrer" title="Option d'affichage" width="26"></button>
            </div>
            <NavbarTemplate></NavbarTemplate>
        </div>
    </nav>
</template>

<style scoped>
.navbar-container {
    display: flex;
}

.navbar-search {
    display: flex;
    position: relative;
    align-items: center;
}

.navbar-search input {
    height: 40px;
    width: 120px;
}

@media screen and (min-width: 412px) {
    .navbar-search input {
        width: 100%;
    }
}
</style>