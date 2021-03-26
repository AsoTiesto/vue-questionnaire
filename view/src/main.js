import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(Vuex);
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
