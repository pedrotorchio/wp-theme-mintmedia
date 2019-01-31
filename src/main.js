import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Store from '@/plugins/DataFetcher';
Vue.use(Store);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
