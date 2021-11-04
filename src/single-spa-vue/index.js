import Vue from 'vue';
import App from './src/App.vue';
import VueRouter from 'vue-router';
import { router } from './src/router/index';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    router,
    render: (h) => { return h(App); },
}).$mount('#app-single-spa-vue');