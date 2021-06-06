<template>
    <v-footer
        dark
        padless
    >
        <v-card
            flat
            tile
            class="text-center"
            width="100%"
        >
            <v-img v-if="img" width="100%" position="bottom" class="position-absolute position-top-0 position-bottom-0 opacity-25" :src="img" />

            <v-card-text class="white--text position-relative">
                This website is not affiliated with MangaDex. It only uses the publicly available <strong><external-link href="https://api.mangadex.org/docs.html" class="primary--text">MangaDex V5 API</external-link></strong>.
            </v-card-text>

            <v-divider class="position-relative" />

            <v-card-text class="white--text position-relative">
                {{ new Date().getFullYear() }} —
                <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
                    <!-- eslint-disable-next-line vue-a11y/accessible-emoji -->
                    <strong>🔥DEX</strong>
                </router-link>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import ExternalLink from '../components/utils/ExternalLink.vue'

export default {
    components: {
        ExternalLink
    },
    data: () => ({
        img: window.themeImg
    })
}
</script>
