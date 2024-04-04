<script setup>

</script>

<template>
    <div class="col-6 text-center">
        <img :src="pictureSmall ? picture.file_small : picture.file_big" class="d-block w-100 img-fluid"
            v-bind:class="lg ? 'img-16_10' : 'img-square'" v-bind:alt="'photo ' + picture.name">
    </div>
</template>

<script>
export default {
    props : {
        picture : {},
        pictureSmall : Boolean,
        lg: Boolean
    }
}
</script>
<style scroped>

</style>