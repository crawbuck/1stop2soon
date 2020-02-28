<template>
  <div id="app">
    <!-- 
      This site was built using VueJS using Netlify & Are.na
      For Nina Harcus, with love by Michael Crawbuck. 
    -->
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
  @import url("https://use.typekit.net/tfh2cfl.css");
  body {
    margin: 0;
    background: #2C2C36;
    color: #F3EDE0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: starling, serif;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-size: 2rem;   
  }
</style>