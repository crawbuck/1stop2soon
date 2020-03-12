<template>
  <div class="slide">
    <img class="gallery__img" v-lazy="source" />
    <h1 v-if="outsideTrain" class="gallery__title" >
      {{ outsideTrain }}
    </h1>
  </div>
</template>

<script>

export default {
  name: 'GalleryItem',
  props: {
    item: Object,
  },
  computed: {
    source() {
      return this.item.image.thumb.url;
    },
    outsideTrain() {
      return this.item.title === 'outside' ? this.item.description : false;
    },
  },
};
</script>
