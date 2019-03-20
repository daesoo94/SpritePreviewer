import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import SpritePreviewPage from './views/SpritePreviewPage.vue';

Vue.use(VueRouter);

//vuex
import { store } from './store'

// router 설정
var routes = [
  { path: '/', component: SpritePreviewPage }
  // { path: '/BTC', component: DetailBTC }
];

var router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});