<template>
  <footer>
    <h1>{{ title }}</h1>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: right;
  padding-right: 12px;
}
footer {
  bottom: 0;
  right: 0;
}
</style>
