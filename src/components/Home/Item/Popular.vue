<template>
    <v-card tile elevation="0" width="20%" outlined>
        <router-link :to="{ name: 'Home' }" class="text-decoration-none white--text">
            <v-img :aspect-ratio="1" class="grey darken-3" />
            <v-card-title class="text-button text-no-wrap d-block text-truncate">
                Survival Story Of A Sword King In A Fantasy World
            </v-card-title>
            <v-card-text class="overflow-hidden">
                <v-icon x-small class="mr-2">
                    mdi-pound
                </v-icon>
                Chapter 123
            </v-card-text>
        </router-link>
    </v-card>
</template>
