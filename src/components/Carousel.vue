<template>
    <div class="carousel-inner">
        <div v-for="(picture, index) in accommodation.pictures" v-bind:key="index" class="carousel-item"
            v-bind:class="{ 'active': index === 0 }">
            <img v-bind:src="pictureSmall ? picture.file_small : picture.file_big" class="d-block w-100 img-fluid img-4-3"
                v-bind:alt="'photo ' + picture.name">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" v-bind:data-bs-target="'#carousel-' + accommodation.id" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" v-bind:data-bs-target="'#carousel-' + accommodation.id" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</template>
<script>
export default {
    props : {
        accommodation : {},
        pictureSmall : Boolean
    }
}
</script>
<style lang="">

</style>