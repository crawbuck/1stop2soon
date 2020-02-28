<template>
  <div id="app">
    <Header title="one stop" />
    <Gallery />
    <Footer title="too soon." />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Gallery,
    Footer
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background: #2C2C36;
    color: #F3EDE0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
</style>