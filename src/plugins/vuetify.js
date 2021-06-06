import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: true,
        themes: {
            other: {
                primary: colors.red.base,
                secondary: colors.orange.darken4,
                accent: colors.orange.base
            }
        }
    }
}

export default new Vuetify(opts)
