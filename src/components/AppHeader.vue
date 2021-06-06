<template>
    <v-app-bar app flat :src="img ? img : undefined">
        <template #img="{ props }">
            <v-img v-bind="props" position="top" class="opacity-25" />
        </template>

        <v-app-bar-nav-icon />
        <v-toolbar-title>
            <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
                <!-- eslint-disable-next-line vue-a11y/accessible-emoji -->
                <strong>🔥DEX</strong>
            </router-link>
        </v-toolbar-title>

        <v-spacer />

        <v-autocomplete prepend-inner-icon="mdi-magnify" outlined filled single-line hide-details>
            <template #label>
                Search your favorite manga
            </template>
        </v-autocomplete>

        <v-spacer />
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        img: window.themeImg
    })
}
</script>
