<template>
    <v-card
        color="transparent"
        elevation="0"
        tile
    >
        <router-link :to="{ name: 'Home' }" class="white--text text-decoration-none">
            <v-img :aspect-ratio="80/114" class="grey darken-3 rounded" />
            <v-card-title class="pb-0">
                Manga title
            </v-card-title>
            <v-card-text class="d-flex flex-row align-center">
                <span class="mr-4 grey--text">
                    <v-icon small color="grey darken-3" class="mr-2">
                        mdi-pound
                    </v-icon>
                    123
                </span>
                <span class="mr-4 grey--text">
                    <v-icon small color="grey darken-3" class="mr-2">
                        mdi-av-timer
                    </v-icon>
                    6 hours
                </span>
            </v-card-text>
        </router-link>
    </v-card>
</template>
<script>
export default {

}
</script>
