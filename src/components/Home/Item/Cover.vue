<template>
    <v-card
        color="transparent"
        elevation="0"
        tile
    >
        <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
            <v-img :src="image" :aspect-ratio="80/114" class="grey darken-3 rounded" />
            <v-card-text class="py-3 d-block text-truncate white--text text-center">
                <strong>{{ title }}</strong>
            </v-card-text>

            <v-card outlined>
                <v-card-text class="py-0 d-flex flex-row align-center text-subtitle-2">
                    <v-icon small color="grey darken-3" class="mr-2">
                        mdi-pound
                    </v-icon>
                    123
                </v-card-text>
                <v-card-text class="pt-0 d-flex flex-row align-center text-subtitle-2">
                    <v-icon small color="grey darken-3" class="mr-2">
                        mdi-av-timer
                    </v-icon>
                    6 hours
                </v-card-text>
            </v-card>
        </router-link>
    </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: {
        manga: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
    computed: {
        ...mapGetters('manga', {
            covers: 'getCovers'
        }),
        cover () {
            const id = this.manga?.relationships.find(item => item.type === 'cover_art').id

            if (!this.covers[id]) {
                this.fetchCover(id)

                return undefined
            }

            return this.covers[id].data.attributes.fileName
        },
        id () {
            return this.manga?.data.id
        },
        image () {
            if (!this.id || !this.cover) {
                return undefined
            }

            return `https://uploads.mangadex.org/covers/${this.id}/${this.cover}.512.jpg`

        },
        title () {
            return this.manga?.data.attributes.title.en
        }
    },
    methods: {
        ...mapActions('manga', [
            'fetchCover'
        ])
    }
}
</script>
