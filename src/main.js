import Vue from "vue";
import App from "./App.vue";
import FV from "./FirstVue.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(FV)
}).$mount("#app");
