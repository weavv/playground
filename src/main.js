import Vue from 'vue';

import App from './App.vue';
import router from './router';

import 'weavvcss/dist/weavv-1.0.0.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(
    App,
  ),
}).$mount('#app');
