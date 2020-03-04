<template>
  <header class="header">
    <div v-for="(word, index) in message" :key="index" class="header__item">
      <span>{{ word }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
  computed: {
    message() {
      return this.title.trim().split(' ');
    },
  },
};
</script>
