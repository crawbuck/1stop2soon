<template>
  <div id="app">
    <Header title="one stop too soon" />
    <Gallery />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Gallery from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    Header,
    Gallery,
  },
};
</script>

<style lang="scss">
  @import './styles/style.scss';
</style>
