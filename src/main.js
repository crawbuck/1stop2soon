import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import store from './store/store';
import App from './App.vue';


Vue.config.productionTip = false;

Vue.use(VueLazyload);

new Vue({
  store,
  created() {
    this.$store.dispatch('init');
  },
  render: (h) => h(App),
}).$mount('#app');
