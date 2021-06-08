import mangaService from '../services/mangadex-api/manga'

const state = {
    covers: {},
    mangas: [],
    timestamps: {
        mangas: null
    }
}

const getters = {
    getCovers: state => state.covers,
    getMangas: state => state.mangas
}

const mutations = {
    setCover: (state, payload) => state.covers[payload.data.id] = payload,
    setMangas: (state, payload) => state.mangas = payload.results,
    setTimestamp: (state, payload) => state.timestamps[payload] = new Date()
}

const actions = {
    fetchCover ({ commit, state }, id) {
        if (state.covers[id] !== undefined) {
            return
        }

        return mangaService.cover(id)
            .then(async data => {
                commit('setCover', await data.json())
            })
    },
    fetchMangas ({ commit }) {
        return mangaService.search()
            .then(async data => {
                commit('setMangas', await data.json())
                commit('setTimestamp', 'mangas')
            })
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
