import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    }
];

const router = new Router({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior () {
        return {
            x: 0,
            y: 0
        };
    }
});

export { routes, router };
