<template>
  <div id="app">
    <Intro v-if="!showPhotos" />
    <main :class="showPhotos ? 'show' :  'hide'">
      <Header title="one stop too soon" />
      <Gallery />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Intro from './components/Intro.vue';
import Header from './components/Header.vue';
import Gallery from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    Intro,
    Header,
    Gallery,
  },
  computed: {
    ...mapGetters([
      'showPhotos',
    ]),
  },
};
</script>

<style lang="scss">
  @import './styles/style.scss';
</style>
