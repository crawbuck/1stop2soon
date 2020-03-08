<template>
  <li class="gallery__item">
    <img class="gallery__img" v-lazy="source" />
    <h1 v-if="outsideTrain">
      {{ outsideTrain }}
    </h1>
  </li>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    item: Object,
  },
  computed: {
    source() {
      return this.item.image.display.url;
    },
    outsideTrain() {
      return this.item.title === 'outside' ? this.item.description : false;
    },
  },
};
</script>
