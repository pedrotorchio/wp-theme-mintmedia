import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Btn from '@/components/Button'
Vue.component('btn', Btn);

import Store from '@/plugins/DataFetcher';
Vue.use(Store);

import LazyImg from 'vue-hoverable-lazy-image';
Vue.component('lazy-img', LazyImg);

import svgIcon from 'vue-svgicon'
Vue.use(svgIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
