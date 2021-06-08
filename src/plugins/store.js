import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import manga from '../store/manga'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        manga
    },
    plugins: [
        new VuexPersistence({
            key: 'vuex',
            storage: window.localStorage,
            modules: ['manga']
        }).plugin
    ]
})

export default store
