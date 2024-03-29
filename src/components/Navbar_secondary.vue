<script setup>
import { RouterLink } from 'vue-router'
import NavbarTemplate from '../components/Navbar_template.vue'
</script>

<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <div class="navbar-container">
                <RouterLink v-bind:to="{ name: 'home' }" class="navbar-brand">TSH</RouterLink>
            </div>
            <NavbarTemplate></NavbarTemplate>
        </div>
    </nav>
</template>

<style scoped>
.navbar-d- {
    display: flex;
}
</style>