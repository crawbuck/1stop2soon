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
  @font-face {
    font-family: 'untitled';
    src: url('assets/untitled-sans-medium.eot'); /* IE9 Compat Modes */
    src: url('assets/untitled-sans-medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('assets/untitled-sans-medium.woff2') format('woff2'), /* Super Modern Browsers */
         url('assets/untitled-sans-medium.woff') format('woff'), /* Pretty Modern Browsers */
         url('assets/untitled-sans-medium.ttf')  format('truetype'); /* Safari, Android, iOS */
  }
  body {
    margin: 0;
    background: #2C2C36;
    color: #F3EDE0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: 'untitled', helvetica;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-size: 2rem;
    position: relative;
  }
  ul {
    padding: 0;
    margin: 0;
    display: none;
    list-style: none;
  }
</style>
