<template>
    <div>
        <h1 class="mt-6 mb-4">
            <span role="img" aria-hidden="true">🔥</span>
            Hot releases
        </h1>
        <v-row>
            <v-col v-for="index in [1,2,3,4,5,6]" :key="`manga-${index}`" md="2">
                <hot />
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6" lg="8" xl="9">
                <h1 class="mt-6 mb-4">
                    <span role="img" aria-hidden="true">🔔</span>
                    New releases
                </h1>
            </v-col>
            <v-col md="6" lg="4" xl="3">
                <h1 class="mt-6 mb-4">
                    <span role="img" aria-hidden="true">💘</span>
                    Popular releases
                </h1>
                <v-card class="mb-4">
                    <v-tabs
                        v-model="tab"
                        centered
                    >
                        <v-tab>6 hours</v-tab>
                        <v-tab>24 hours</v-tab>
                        <v-tab>7 days</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item class="py-2 px-3">
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                        </v-tab-item>
                        <v-tab-item class="py-2 px-3">
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                        </v-tab-item>
                        <v-tab-item class="py-2 px-3">
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
                            <popular />
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
