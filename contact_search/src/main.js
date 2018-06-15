import Vue from 'vue';
import ES6Promise from 'es6-promise';
import App from './App.vue';
import router from './router';
import store from './store';

ES6Promise.polyfill();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
