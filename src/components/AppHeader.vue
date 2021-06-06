<template>
    <v-app-bar app absolute flat color="transparent" class="my-10">
        <v-spacer />

        <v-autocomplete prepend-inner-icon="mdi-magnify" clearable outlined single-line hide-details>
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
