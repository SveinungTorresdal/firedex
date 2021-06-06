<template>
    <v-navigation-drawer app permanent expand-on-hover>
        <v-list-item>
            <v-list-item-icon>
                <h1>
                    <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
                        <!-- eslint-disable-next-line vue-a11y/accessible-emoji -->
                        <span role="img" aria-label="Fire">🔥</span>
                    </router-link>
                </h1>
            </v-list-item-icon>
            <v-list-item-title>
                <h1>
                    <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
                        <!-- eslint-disable-next-line vue-a11y/accessible-emoji -->
                        <strong>FireDEX</strong>
                    </router-link>
                </h1>
            </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list
            nav
            dense
        >
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>
