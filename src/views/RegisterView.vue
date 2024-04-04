<script setup>
import Navbar from '@/components/Navbar_secondary.vue'
import Email from '@/components/forms/Email.vue'
import UserName from '@/components/forms/UserName.vue'
import FirstName from '@/components/forms/FirstName.vue'
import LastName from '@/components/forms/LastName.vue'
import PhoneNumber from '@/components/forms/PhoneNumber.vue'
import Password from '@/components/forms/Password.vue'
import PasswordConfirmation from '@/components/forms/Password_confirmation.vue'
import AlertMessage from '@/components/features/AlertMessage.vue'
import { useDataStore } from '@/stores/data'
import { RouterLink } from 'vue-router'
const dataStore = useDataStore();

</script>

<template>
  <Navbar></Navbar>
  <AlertMessage></AlertMessage>
  <form class="container-fluid p-5 tsh-container">
    <h1 class="mb-5 text-center">Création de compte</h1>
    <Email></Email>
    <UserName></UserName>
    <FirstName></FirstName>
    <LastName></LastName>
    <PhoneNumber></PhoneNumber>
    <Password></Password>
    <PasswordConfirmation></PasswordConfirmation>

    <p>Déjà un compte ?
      <RouterLink v-bind:to="{ name: 'login' }">Identifiez vous ici</RouterLink>
    </p>

    <button type="button" class="btn btn-primary w-100 mt-3" v-on:click="dataStore.userRegister()">Valider</button>
  </form>

</template>

<style scoped>
.tsh-container {
  max-width: 576px;
}
</style>