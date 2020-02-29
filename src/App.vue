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
    Footer,
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'Bobby';
    src: url('assets/F37Bobby-Regular.eot'); /* IE9 Compat Modes */
    src: url('assets/F37Bobby-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('assets/F37Bobby-Regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('assets/F37Bobby-Regular.woff') format('woff'), /* Pretty Modern Browsers */
         url('assets/F37Bobby-Regular.ttf')  format('truetype'); /* Safari, Android, iOS */
  }
  body {
    margin: 0;
    background: #2C2C36;
    color: #F3EDE0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: 'Bobby', serif;
    font-weight: 900;
    font-style: italic;
    text-transform: capitalize;
    letter-spacing: .2rem;
    font-size: 2rem;
    position: relative;
  }
  header,
  footer {
    position: absolute;
    width: 100%;
    background: transparent;
  }
  h1 {
    margin: 0;
    letter-spacing: -0.5vw;
    font-size: 19vw;
  }
  ul {
    padding: 0;
    margin: 0;
    display: none;
    list-style: none;
  }
</style>
