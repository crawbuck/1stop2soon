<template>
  <header>
    <div v-for="(word, index) in message" :key="index">
      {{ word }}
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

<style scoped lang="scss">
header {
  top: 0;
  left: 0;
}
</style>
