<template>
  <li class="gallery__item">
    <img class="gallery__img" v-lazy="source" />
    <h1 v-if="outsideTrain" class="gallery__title" >
      {{ outsideTrain }}
    </h1>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GalleryItem',
  props: {
    item: Object,
    position: Number,
  },
  data() {
    return {
      index: this.position,
    };
  },
  computed: {
    ...mapGetters([
      'activePhotos',
    ]),
    source() {
      return this.item.image.display.url;
    },
    outsideTrain() {
      return this.item.title === 'outside' ? this.item.description : false;
    },
  },
};
</script>
