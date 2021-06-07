<template>
    <div>
        <h1 class="mt-6 mb-8">
            <span role="img" aria-hidden="true">🔔</span>
            New releases
        </h1>
        <div class="d-grid grid-cols-min-200 grid-col-gap-8">
            <hot v-for="item in [0,1,2,3,4,5,6,7,8,9]" :key="`new-${item}`" />
        </div>

        <v-row>
            <v-col cols="6">
                <h1 class="mt-6 mb-4">
                    <span role="img" aria-hidden="true">💘</span>
                    Popular releases
                </h1>
                <v-card elevation="0">
                    <v-tabs
                        v-model="tab"
                    >
                        <v-tab>6 hours</v-tab>
                        <v-tab>24 hours</v-tab>
                        <v-tab>7 days</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item class="d-flex flex-row flex-wrap pa-0">
                            <popular v-for="index in [1,2,3,4,5,6,7,8,9,10]" :key="`popular-${index}`" />
                        </v-tab-item>
                        <v-tab-item class="py-2 px-3">
                            ...
                        </v-tab-item>
                        <v-tab-item class="py-2 px-3">
                            ...
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Hot from '../components/Home/Item/Hot.vue'
import Popular from '../components/Home/Item/Popular.vue'

export default {
    components: {
        Hot,
        Popular
    },
    data: () => ({
        tab: ''
    })
}
</script>
