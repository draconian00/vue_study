import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
// import App from './AppAxiosTest.vue';
import router from './router';
import store from './store';
import eventBus from './EventBus';

require('es6-promise').polyfill();

Vue.prototype.$axios = axios;
Vue.prototype.$eventBus = eventBus;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
