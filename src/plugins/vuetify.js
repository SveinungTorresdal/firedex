import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: true,
        themes: {
            dark: {
                origin: '#121212'
            }
        }
    }
}

export default new Vuetify(opts)
