import Vue from 'vue';

import App from './App.vue';
import router from './router';

import 'weavv-css/dist/weavv-1.1.8.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(
    App,
  ),
}).$mount('#app');
