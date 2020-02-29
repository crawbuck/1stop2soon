import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueLazyload)

new Vue({
  store,
  created() {
    this.$store.dispatch('init');
  },	
  render: h => h(App),
}).$mount('#app')
