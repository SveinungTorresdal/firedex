<template>
    <div>
        <h1 class="mt-6 mb-8">
            <span role="img" aria-hidden="true">🔥</span>
            Most popular
        </h1>
        <div class="d-grid grid-cols-min-150 grid-col-gap-6 grid-row-gap-4">
            <cover v-for="(manga, index) in mangas" :key="`new-${index}`" :manga="manga" />
        </div>
    </div>
</template>

<script>
import Cover from '../components/Home/Item/Cover.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Cover
    },
    data: () => ({
        tab: ''
    }),
    computed: {
        ...mapGetters('manga', {
            mangas: 'getMangas'
        })
    }
}
</script>
