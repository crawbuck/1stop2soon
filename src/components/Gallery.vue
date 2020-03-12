<template>
<slick ref="slick" v-if="showPhotos" class="gallery" :options="options">
  <GalleryItem v-for="(item, index) in items"
    :key="index"
    :item="item"
  />
</slick>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Slick from 'vue-slick';
import GalleryItem from './GalleryItem.vue';

export default {
  name: 'Gallery',
  computed: {
    ...mapState(['showPhotos']),
    ...mapGetters([
      'items',
    ]),
  },
  components: {
    GalleryItem,
    Slick,
  },
  data() {
    return {
      options: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 0,
        pauseOnHover: false,
        pauseOnFocus: false,
        mobileFirst: true,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        swipe: false,
        touchMove: false,
      },
    };
  },
  mounted() {
    console.log('mounted');
  },
};
</script>
