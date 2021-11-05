import VueRouter from 'vue-router';

import Page1 from '../pages/page1.vue';
import Page2 from '../pages/page2.vue';

// const Page1 = { template: '<div>foo</div>' }
// const Page2 = { template: '<div>bar</div>' }

const routes = [
    { path: '/single-spa-vue/page1', component: Page1 },
    { path: '/single-spa-vue/page2', component: Page2 },
];

const router = new VueRouter({
    mode: 'history',
    routes, // (缩写) 相当于 routes: routes
});

export { router };