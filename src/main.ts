import Vue from 'vue';
import App from './App.vue'
import Router from 'vue-router';

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./components/Test.vue')
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})