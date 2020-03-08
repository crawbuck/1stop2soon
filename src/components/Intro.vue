<template>
  <article class="intro">
    <p class="intro__copy">{{ letter }}</p>
    <button v-on:click="init" class="intro__btn">Enter</button>
  </article>
</template>

<script>
import { mapActions } from 'vuex';
import textFile from '../assets/letter.txt';

export default {
  name: 'Introduction',
  data() {
    return {
      letter: textFile,
    };
  },
  methods: {
    ...mapActions([
      'showPhotos',
    ]),
    init() {
      this.showPhotos();
    },
  },
};
</script>
