import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //router: router,
  router,
  // new Vue 인스턴스에는 store라는 속성이 있고, 거기에 import받은 store를 연결.
  store,
}).$mount('#app')
