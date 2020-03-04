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

<style scoped lang="scss">
// header div {
//   position: fixed;
//   &:first-of-type {
//     top: 0;
//     left:0;
//     width: 100%;
//     text-align: center;
//   }
//   &:nth-of-type(2) {
//     top:0;
//     left:0;
//     margin-left: -20px;
//     height: 100vh;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//   }
//   &:nth-of-type(2) span {
//     transform: rotate(270deg);
//   }
//   &:nth-of-type(3) {
//     top:0;
//     right:0;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-right: -10px;
//   }
//   &:nth-of-type(3) span {
//     transform: rotate(90deg);
//   }
//   &:last-of-type {
//     bottom: 0;
//     left:0;
//     width: 100%;
//     text-align: center;
//   }
//   span {
//     font-size: 8vw;
//     letter-spacing: -0.05vw;
//   }
// }
</style>
