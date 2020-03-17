<template>
  <li :class="isActive ? 'gallery__item gallery__item--active' : 'gallery__item'">
    <img class="gallery__img" v-lazy="source" />
    <h1 v-if="outsideTrain" class="gallery__title" >
      {{ outsideTrain }}
    </h1>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GalleryItem',
  props: {
    item: Object,
    position: Number,
    activePhotos: Array,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState(['showPhotos']),
    source() {
      return this.item.image.display.url;
    },
    outsideTrain() {
      return this.item.title === 'outside' ? this.item.description : false;
    },
  },
  methods: {
    checkActive(photos) {
      photos
        .filter((photo) => photo === this.position)
        .map(() => {
          this.isActive = true;
          return this.isActive;
        });
    },
    checkInactive(photos) {
      photos
        .filter((photo) => photo !== this.position)
        .map(() => {
          this.isActive = false;
          return this.isActive;
        });
    },
  },
  watch: {
    showPhotos() {
      setInterval(() => {
        this.checkInactive(this.activePhotos);
        this.checkActive(this.activePhotos);
      }, 3000);
    },
  },
};
</script>
