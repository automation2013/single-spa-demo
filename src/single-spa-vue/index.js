// import './set-public-path';
import Vue from 'vue';
import App from './src/App.vue';
import VueRouter from 'vue-router';
import { router } from './src/router/index';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
    router,
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;