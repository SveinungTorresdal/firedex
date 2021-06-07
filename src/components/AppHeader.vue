<template>
    <v-app-bar
        app
        absolute
        prominent
        flat
        color="transparent"
    >
        <template #default class="align-center">
            <v-spacer />

            <v-autocomplete
                prepend-inner-icon="mdi-magnify"
                clearable
                outlined
                single-line
                hide-details
                class="align-self-center"
            >
                <template #label>
                    Search your favorite manga
                </template>
            </v-autocomplete>

            <v-spacer />
        </template>
    </v-app-bar>
</template>
<style lang="scss" scoped>
.v-toolbar__content {
    align-items: center;
}
</style>
<script>
export default {
    data: () => ({
        img: window.themeImg
    })
}
</script>
