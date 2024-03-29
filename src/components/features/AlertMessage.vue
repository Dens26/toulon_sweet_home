<script setup>
import { useDataStore } from '@/stores/data';
const dataStore = useDataStore();

const alertMessage = () => {
    return dataStore.getAlertMessage();
}
</script>

<template>
<div v-if="alertMessage().type !== ''" v-bind:class="['alert', 'alert-' + alertMessage().type, 'alert-dismissible m-3']" role="alert">
    <div>{{ alertMessage().message }}</div>
</div>
</template>

<script>
export default {

}
</script>

<style></style>