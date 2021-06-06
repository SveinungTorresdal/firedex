// eslint-disable-next-line camelcase, no-undef
__webpack_nonce__ = window.__webpack_nonce__ = window.btoa(Math.random().toString(36).substr(7));

import Vue from 'vue';
import { router } from './router';
import App from './App.vue';

// Importing SCSS file.
import './style/main.scss';

new Vue({
    el: '#vue',
    router,
    render: h => h(App)
})