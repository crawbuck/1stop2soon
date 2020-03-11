<template>
<ul class="gallery">
  <GalleryItem v-for="(item, index) in items" :key="index" :position="index" :item="item" />
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
    ]),
  },
  components: {
    GalleryItem,
  },
};
</script>
