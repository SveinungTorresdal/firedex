import mangaService from '../services/mangadex-api/manga'

const state = {
    mangas: []
}

const getters = {
    getMangas: state => state.mangas
}

const mutations = {
    setMangas: (state, payload) => state.mangas = payload.results
}

const actions = {
    fetchMangas ({ commit }) {
        return mangaService.search()
            .then(async data => commit('setMangas', await data.json()))
            .catch(e => console.error(e))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
