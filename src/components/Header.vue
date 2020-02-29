<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
header {
  top: 0;
  left: 0;
}
</style>
