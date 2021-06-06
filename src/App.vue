<template>
    <v-app>
        <app-drawer />
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
import AppDrawer from './components/AppDrawer.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
    components: {
        AppFooter,
        AppDrawer,
        AppHeader
    },
    data: () => ({
        searching: false
    })
}
</script>
