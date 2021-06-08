import VuexPersistence from 'vuex-persist'

const mangaLocal = new VuexPersistence({
    storage: window.localStorage
})

export default mangaLocal
