<template>
<ul class="gallery">
  <GalleryItem v-for="(item, index) in items"
    :active-photos="activePhotos"
    :key="index"
    :position="index"
    :item="item">
  </GalleryItem>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import GalleryItem from './GalleryItem.vue';

export default {
  name: 'Gallery',
  computed: {
    ...mapGetters([
      'items',
      'activePhotos',
    ]),
  },
  components: {
    GalleryItem,
  },
};
</script>
