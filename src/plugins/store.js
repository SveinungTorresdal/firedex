import Vue from 'vue'
import Vuex from 'vuex'
import manga from '../store/manga'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        manga
    }
})

export default store
