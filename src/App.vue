<template>
    <v-app>
        <app-header />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
        <app-footer />
    </v-app>
</template>
<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
    components: {
        AppFooter,
        AppHeader
    },
    data: () => ({
        searching: false
    })
}
</script>
