<template>
    <v-card>
        <v-img :aspect-ratio="80/114" class="grey darken-3" />
        <v-card-title>Manga title</v-card-title>
        <v-card-text class="d-flex flex-row align-center">
            <span class="mr-4">
                <v-icon small class="mr-2">
                    mdi-pound
                </v-icon>
                Chapter 123
            </span>
            <span class="mr-4">
                <v-icon small color="grey darken-3" class="mr-2">
                    mdi-av-timer
                </v-icon>
                6 hours ago
            </span>
        </v-card-text>
    </v-card>
</template>
