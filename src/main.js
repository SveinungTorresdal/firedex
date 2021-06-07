import Vue from 'vue'
import { router } from './plugins/router'
import store from './plugins/store'
import vuetify from './plugins/vuetify'
import App from './App.vue'

// Importing SCSS file.
import './style/main.scss'

// https://www.gettyimages.no/detail/photo/fire-flam-royalty-free-image/981575442
// window.themeImg = './src/img/gettyimages-981575442-2048x2048.jpg'

new Vue({
    el: '#vue',
    router,
    store,
    vuetify,
    render: h => h(App)
})
